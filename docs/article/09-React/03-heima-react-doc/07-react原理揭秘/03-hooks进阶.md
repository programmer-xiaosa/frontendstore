# Hooks 进阶

## 概述

根据前面的学习我们知道，Hooks（内置或自定义）只能在函数组件中使用。因此，Hooks 与函数组件是密不可分的。

所以，要想深入理解 Hooks，就必须先理解函数组件的特性，因为这些特性会影响到了 Hooks 的使用。

本节，我们先来理解函数组件的特性。然后，根据这些特性对实际开发产生的影响，我们再来学习 **useCallback / useMemo / useRef** 等内置 Hooks。

最后，我们来模拟实现 useState / useEffect 这两个 Hooks，来深入理解 Hooks 的实现原理。

## 函数组件的特性

React 中的函数组件是通过函数来实现的，函数组件的公式：`f(state) => UI`，即：数据到视图的映射。

函数组件本身很简单，但因为是通过函数实现的，所以，在使用函数组件时，就会体现出函数所具有的特性来。

函数组件的特性说明：

- 对于函数组件来说，每次状态更新后，组件都会重新渲染。
- 并且，**每次组件更新都像是在给组件拍照。每张照片就代表组件在某个特定时刻的状态。**
- 或者说：`组件的每次特定渲染，都有自己的 props/state/事件处理程序` 等。
- 这些照片记录的状态，从代码层面来说，是通过 JS 中函数的闭包机制来实现的。

这就是 React 中函数组件的特性，更加的函数式（利用函数的特性）

```jsx
import { useState } from 'react'
import ReactDOM from 'react-dom'

// 没有 hooks 的函数组件：
const Counter = ({ count }) => {
  // console.log(count)
  const showCount = () => {
    setTimeout(() => {
      console.log('展示 count 值：', count)
    }, 3000)
  }

  return (
    <div>
      <button onClick={showCount}>点击按钮3秒后显示count</button>
    </div>
  )
}

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <hr />
      {/* 子组件 */}
      <Counter count={count} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## 函数组件特性带来的问题

函数组件的特性：**组件的每次特定渲染，都有自己的 props/state/事件处理程序 等。**

该特性，导致了几个问题：

- 组件每次重新渲染时，_组件内部的事件处理程序等函数都会重新创建，导致子组件每次都会接收到不同的 props，从而重复进行不必要的渲染（性能问题）_。
- 组件内的事件处理程序等函数中，只能获取到那一次特定渲染时的数据，这是合理的（闭包的原因）。

说明：函数组件配合 Hooks 使用时，会不会因为闭包以及每次都创建新的函数等，让组件变慢？答案：[不会！](https://react.docschina.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render)

注意：在没有发现性能问题前，避免过早的性能优化。如果要优化，一定要考虑优化成本是否大于优化后的价值。

对于第一个问题，我们使用 `React.memo` 配合 `useCallback/useMemo` 这两个 Hooks 来解决。

对于第二个问题，我们使用 `useRef Hook` 来解决。

## 组件性能优化-hooks

### React.memo 高阶组件

#### 介绍

React.memo 高阶组件的使用场景说明：

React 组件更新机制：只要父组件状态更新，子组件就会无条件的一起更新。

- 子组件 props 变化时更新过程：组件代码执行 -> JSX Diff（配合虚拟 DOM）-> 渲染（变化后的内容）【 DOM 操作】。
- 子组件 props 无变化更新过程：组件代码执行 -> JSX Diff（配合虚拟 DOM）【无 DOM 操作】。

注意：此处更新指的是组件代码执行、JSX 进行 Diff 操作（纯 JS 的操作，速度非常快，不会对性能产生太多影响）。

- 如果组件 props 改变了，那么，该组件就必须要更新，才能接收到最新的 props。
- 但是，如果组件 props 没有改变时，组件也要进行一次更新。实际上，这一次更新是没有必要的。

如果要避免组件 props 没有变化而进行的不必要更新（Diff），这种情况下，就要使用 React.memo 高阶组件。

注：`对于 class 组件来说，可以使用 PureComponent 或 shouldComponentUpdate 钩子函数来实现`。

```jsx
import { useState } from 'react'
import ReactDOM from 'react-dom'

const Child2 = ({ count }) => {
  console.log('Child2 子组件代码执行了')
  return <div style={{ backgroundColor: '#abc' }}>子组件2：{count}</div>
}

const Child1 = () => {
  console.log('Child1 子组件代码执行了')
  return <div style={{ backgroundColor: '#def' }}>子组件1</div>
}

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ backgroundColor: 'pink', padding: 10 }}>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <hr />

      {/* 子组件 */}
      <Child1 />
      <br />
      <Child2 count={count} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

#### 语法

使用场景：当你想要避免函数组件 props 没有变化而产生的不必要更新时，就要用到 React.memo 了。

作用：**记忆组件上一次的渲染结果，在 props 没有变化时复用该结果，避免函数组件不必要的更新**。

<!-- ![image-20210830205522685](images/image-20210830205522685.png) -->

解释：

- React.memo 是一个高阶组件，用来记忆（memorize）组件。
- 参数（Child）：需要被记忆的组件，或者说是需要避免不必要更新的组件。
- 返回值（MemoChild）：React 记住的 Child 组件。

原理：通过对比检查更新前后 props 是否相同，来决定是否复用上一次的渲染结果，

- 如果相同，复用上一次的渲染结果；
- 如果不同，重新渲染组件。

**并不是所有的组件都适合使用 memo，比如 child2 组件，每次都需要重新渲染，使用 memo 反而会使性能变得更低，逻辑也变得更复杂**

#### 浅层对比

默认情况下，React.memo 只会对更新前后的 props 进行浅对比（shallow compare）与 PureComponent 相同。

也就是说，对于对象类型的 prop 来说，只会比较引用

- 如果更新前后的引用相同，复用上一次的渲染结果（不会重新渲染该组件）。
- 如果更新前后的引用不同，重新渲染该组件。

如果你要手动控制比较过程，可以使用 React.memo 的第二个参数：

<!-- ![image-20210830220716165](images/image-20210830220716165.png) -->

解释：

- 第二个参数：用来比较更新前后 props 的函数。
- 返回值：如果返回 true，表示记住（不重新渲染）该组件；如果返回 false，表示重新渲染该组件。

### useCallback hook

#### 概念

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调函数。

#### 问题

当我们给子组件传递一个方法的时候，子组件不管有没有使用，只要父组件更新了，子组件也会重新渲染

```js
import React from 'react'
import Child from './components/Child'
import { useState } from 'react'

const App = () => {
  console.log('app')
  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount(3)
  }
  return (
    <div>
      app: {count}
      <button
        onClick={() => {
          setCount(1)
        }}
      >
        修改count
      </button>
      <Child updateCount={updateCount} />
    </div>
  )
}

export default App
```

原因：

1. 当父组件重新渲染，给 updateCount 重新赋值
2. 将最新的函数引用传递给子组件
3. 子组件虽然使用了 mome，但是因为浅层对比，发现引用变了，所以重新渲染

#### useCallback

- 引入 useCallback

  ```js
  const updateCount = useCallback(() => {
    setCount(3)
  }, [])
  ```

**useCallback 需要配合 React.memo 使用才有意义，不然反而性能更低，因为 useCallback 来包裹函数也是需要开销的**

### useMemo hook

#### 概念

缓存数据，类似 vue 中的计算属性

#### 问题

当通过逻辑计算某一个数据,每次更新特别卡顿

```js
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const total = () => {
    let total = 0
    for (let i = 0; i < 1000000000; i++) {
      total++
    }
    return total
  }
  return (
    <div>
      数量： {count}{' '}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        修改count
      </button>
      {total()}
    </div>
  )
}

export default App
```

#### useMemo

通过 useMemo 进行数据缓存

```jsx
import React, { useState, useMemo } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const total = useMemo(() => {
    let total = 0
    for (let i = 0; i < 1000000000; i++) {
      total++
    }
    return total
  }, []) // 第二个参数为依赖的数据
  return (
    <div>
      数量： {count}{' '}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        修改count
      </button>
      {total}
    </div>
  )
}

export default App
```

## useReducer

[`useState`](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate) 的替代方案。它接收一个形如 `(state, action) => newState` 的 reducer，并返回当前的 state 以及与其配套的 `dispatch` 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。）

在某些场景下，`useReducer` 会比 `useState` 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等。并且，使用 `useReducer` 还能给那些会触发深更新的组件做性能优化，因为[你可以向子组件传递 `dispatch` 而不是回调函数](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down) 。

### 计数器案例

- 基本语法

  ```js
  import React, { useReducer } from 'react'

  const App = () => {
    const initState = 0
    const reducer = (state, action) => {
      return state
    }
    // useReducer的第一个行参是reducer函数
    // 第二个参数是初始数据
    const [count, dispatch] = useReducer(reducer, initState)
    return <div>计数：{count}</div>
  }

  export default App
  ```

- 累加 count

  ```jsx
  import React, { useReducer } from 'react'

  const App = () => {
    const initState = 0
    const reducer = (state, action) => {
      if (action.type === 'ADD') {
        return state + 1
      }

      if (action.type === 'SUB') {
        return state - 1
      }
      return state
    }
    // useReducer的第一个行参是reducer函数
    // 第二个参数是初始数据
    const [count, dispatch] = useReducer(reducer, initState)
    return (
      <div>
        计数：{count}
        <button onClick={() => dispatch({ type: 'ADD' })}>count+</button>
        <button onClick={() => dispatch({ type: 'SUB' })}>count-</button>
      </div>
    )
  }

  export default App
  ```

### 将 dispatch 传递子组件

无需传递过多的回调函数，而是直接传递 dispatch

- 将数据和方法可以传递给子组件

  ```jsx
  import React, { useReducer } from 'react'
  import Child from './components/Child'

  const App = () => {
    const initState = 0
    const reducer = (state, action) => {
      if (action.type === 'ADD') {
        return state + 1
      }

      if (action.type === 'SUB') {
        return state - 1
      }
      return state
    }
    // useReducer的第一个行参是reducer函数
    // 第二个参数是初始数据
    const [count, dispatch] = useReducer(reducer, initState)
    return (
      <div>
        计数：{count}
        <button onClick={() => dispatch({ type: 'ADD' })}>count+</button>
        <button onClick={() => dispatch({ type: 'SUB' })}>count-</button>
        <Child count={count} dispatch={dispatch} />
      </div>
    )
  }

  export default App
  ```

- 子组件接收

  ```jsx
  import React from 'react'

  const Child = ({ count, dispatch }) => {
    return (
      <div>
        <h2>子组件{count}</h2>
        <button onClick={() => dispatch({ type: 'ADD' })}>count+</button>
        <button onClick={() => dispatch({ type: 'SUB' })}>count-</button>
      </div>
    )
  }

  export default Child
  ```

### 结合 useContext

- 利用 createContext 提供值

  ```jsx
  import React, { useReducer, createContext } from 'react'
  import Child from './components/Child'

  export const Context = createContext()

  const App = () => {
    const initState = 0
    const reducer = (state, action) => {
      if (action.type === 'ADD') {
        return state + 1
      }

      if (action.type === 'SUB') {
        return state - 1
      }
      return state
    }
    // useReducer的第一个行参是reducer函数
    // 第二个参数是初始数据
    const [count, dispatch] = useReducer(reducer, initState)
    return (
      <Context.Provider value={{ count, dispatch }}>
        <div>
          计数：{count}
          <button onClick={() => dispatch({ type: 'ADD' })}>count+</button>
          <button onClick={() => dispatch({ type: 'SUB' })}>count-</button>
          <Child />
        </div>
      </Context.Provider>
    )
  }

  export default App
  ```

- 利用 useContext 获取值

  ```jsx
  import React, { useContext } from 'react'
  import { Context } from '../App'

  const Child = () => {
    const { count, dispatch } = useContext(Context)
    return (
      <div>
        <h2>子组件{count}</h2>
        <button onClick={() => dispatch({ type: 'ADD' })}>count+</button>
        <button onClick={() => dispatch({ type: 'SUB' })}>count-</button>
      </div>
    )
  }

  export default Child
  ```
