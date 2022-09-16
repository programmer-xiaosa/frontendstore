# setState

## 更新数据

- setState() 可能是异步更新数据的
- 注意：使用该语法时，后面的 setState() 不要依赖于前面的 setState()

```js
1. 当你调用 setState 的时候，React.js 并不会马上修改 state （为什么）
2. 而是把这个对象放到一个更新队列里面
3. 稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。
```

- 可以多次调用 setState() ，只会触发一次重新渲染

```js
this.state = { count: 1 }
this.setState({
  count: this.state.count + 1,
})
console.log(this.state.count) // 1
```

在使用 React.js 的时候，并不需要担心多次进行 `setState` 会带来性能问题。

## setState 是同步还是异步？

**1.何时是同步，何时是异步呢？**

- 在合成事件和生命周期钩⼦函数中是异步的
- 在原⽣事件和 setTimeout 中是同步的

**2.那为什么会出现异步的情况呢？**

为了做性能优化，将 state 的更新延缓到最后批量合并再去渲染对于应用的性能优化是有极大好处的，如果每次的状态改变都去重新渲染真实 dom，那么它将带来巨大的性能消耗。

- setState 的异步并不是指内部由异步代码实现。其实，它本身执⾏的过程及代码都是同步的，只是由于合成事件和钩⼦函数的调⽤顺序在更新之前，因此导致了在合成事件和钩⼦函数中没法立刻拿到更新后的值，所以形成了所谓的异步。
- setState 的批量更新优化也是建⽴在异步（合成事件、钩⼦函数）之上的，在原⽣事件和 setTimeout 中不会批量更新。在异步中，如果对同⼀个值进⾏多次 setState，则它的批量更新策略会对其进⾏覆盖，只取最后⼀次的执⾏。如果同时 setState 多个不同的值，则会在更新时对其进⾏合并批量更新。

**3.那如何在表现出异步的函数里可以准确拿到更新后的 state 呢？**

通过第二个参数 setState(partialState, callback) 中的 callback 拿到更新后的结果。

或者可以通过给 setState 传递函数来表现出同步的情况：

## 源码分析

> react 17 版本的

**为什么? 原理? 源码?**

- setState() 被调用后, 最终会走到 scheduleUpdateOnFiber() 这个函数里面来
- 代码 就是 当 executionContext 为 NoContext 的时候, 内部的 flushSyncCallbackQueue 里面就会去同步调用我们的 setState
- `executionContext` 代表了目前 `react` 所处的阶段，而 `NoContext` 你可以理解为是 没有处于`react`react 的调度流程中 。而 `flushSyncCallbackQueue` 里面就会去同步调用我们的 `this.setState` ，也就是说会同步更新我们的 `state` 。所以，我们知道了，当 `executionContext` 为 `NoContext` 的时候，我们的 `setState` 就是同步的
- 所以 此时 setState 就是同步的
- 否则 , (当 executionContext 为 EventContext 或者 BatchedContext 的时候 ) 都是异步的

**那你知道之前的 16 版本是如何处理的呢?**

1. 通过 isBatchingUpdates 变量, 来控制是同步还是异步的
2. 默认值 isBatchingUpdates = false => 同步的
3. 合成事件 和 钩子函数 里面 调用之前, 会 调用 bachedUpdates 这个函数, 内部 把 isBactchingUpdate = true, => 异步的

> https://zhuanlan.zhihu.com/p/350332132
>
> https://developer.huawei.com/consumer/cn/forum/topic/0202480991169840069

## 推荐语法

- 推荐：使用 `setState((preState) => {})` 语法

- 参数 preState: React.js 会把上一个 `setState` 的结果传入这个函数

```js
this.setState((preState) => {
  return {
    count: preState.count + 1,
  }
})
console.log(this.state.count) // 1
```

**这种语法依旧是异步的，但是 state 可以获取到最新的状态，适用于需要调用多次 setState**

## 第二个参数

- 场景：在状态更新（页面完成重新渲染）后立即执行某个操作
- 语法：`setState(updater[, callback])`

```js
this.setState(
  (state) => ({}),
  () => {
    console.log('这个回调函数会在状态更新后立即执行')
  }
)
```

```js
this.setState(
  (state, props) => {},
  () => {
    document.title = '更新state后的标题：' + this.state.count
  }
)
```

# 组件更新机制

- setState() 的两个作用： 1. 修改 state 2. 更新组件（UI）
- 过程：父组件重新渲染时，也会重新渲染子组件。但只会渲染当前组件（当前组件及其所有子组件）

<!-- ![](images/组件更新.png)  -->

# 组件性能优化

1. 功能第一
2. 性能优化

## 减轻 state

- 减轻 state：只存储跟组件渲染相关的数据（比如：count / 列表数据 / loading 等）
- 注意：不用做渲染的数据不要放在 state 中，比如定时器 id 等
- 对于这种需要在多个方法中用到的数据，应该直接放在 this 中
  - this.xxx = 'bbb'
  - this.xxx

```js
class Hello extends Component {
    componentDidMount() {
        // timerId存储到this中，而不是state中
        this.timerId = setInterval(() => {}, 2000)
    }
    componentWillUnmount() {
    	clearInterval(this.timerId)
    }
    render() { … }
}
```

vue 中不要把和渲染无关的数据放到 data 中

## 避免不必要的重新渲染

- 组件更新机制：父组件更新会引起子组件也被更新，这种思路很清晰
- 问题：子组件没有任何变化时也会重新渲染 （接收到的 props 没有发生任何的改变）
- 如何避免不必要的重新渲染呢？
- 解决方式：使用钩子函数 `shouldComponentUpdate(nextProps, nextState)`

- 作用：通过返回值决定该组件是否重新渲染，返回 true 表示重新渲染，false 表示不重新渲染
- 触发时机：更新阶段的钩子函数，组件重新渲染前执行 （shouldComponentUpdate => render）

```js
class Hello extends Component {
    shouldComponentUpdate() {
        // 根据条件，决定是否重新渲染组件
        return false
    }
    render() {…}
}
```

案例：随机数

## 纯组件

- 纯组件：`React.PureComponent` 与 `React.Component `功能相似
- 区别：PureComponent 内部自动实现了 shouldComponentUpdate 钩子，不需要手动比较
- 原理：纯组件内部通过分别 对比 前后两次 props 和 state 的值，来决定是否重新渲染组件

```js
class Hello extends React.PureComponent {
  render() {
    return <div>纯组件</div>
  }
}
```

**只有在性能优化的时候可能会用到纯组件，不要所有的组件都使用纯组件，因为纯组件需要消耗性能进行对比**

## 纯组件比较-值类型

- 说明：纯组件内部的对比是 shallow compare（浅层对比）

- 对于值类型来说：比较两个值是否相同（直接赋值即可，没有坑）

```js
let number = 0
let newNumber = number
newNumber = 2
console.log(number === newNumber) // false
```

```js
state = { number: 0 }
setState({
  number: Math.floor(Math.random() * 3),
})
// PureComponent内部对比：
最新的state.number === 上一次的state.number // false，重新渲染组件
```

## 纯组件比较-引用类型

- 说明：纯组件内部的对比是 shallow compare（浅层对比）
- 对于引用类型来说：只比较对象的引用（地址）是否相同

```js
const obj = { number: 0 }
const newObj = obj
newObj.number = 2
console.log(newObj === obj) // true
```

```js
state = { obj: { number: 0 } }
// 错误做法
state.obj.number = 2
setState({ obj: state.obj })
// PureComponent内部比较：
最新的state.obj === 上一次的state.obj // true，不重新渲染组件
```

纯组件的最佳实践：

注意：state 或 props 中属性值为引用类型时，应该创建新数据，不要直接修改原数据！

```js
// 正确！创建新数据
const newObj = { ...state.obj, number: 2 }
setState({ obj: newObj })
// 正确！创建新数据
// 不要用数组的push / unshift 等直接修改当前数组的的方法
// 而应该用 concat 或 slice 等这些返回新数组的方法
this.setState({
  list: [...this.state.list, { 新数据 }],
})
```
