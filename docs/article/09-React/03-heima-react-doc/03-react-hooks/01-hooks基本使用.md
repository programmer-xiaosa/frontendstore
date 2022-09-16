# React Hooks

- React Hooks 介绍 
- React Hooks 使用

## React Hooks 介绍

1. 为什么要有Hooks
2. Hooks是什么
3. Hooks的优势

### 为什么要有 Hooks 

[hooks官方文档](https://zh-hans.reactjs.org/docs/hooks-intro.html)

两个角度：1 组件的状态逻辑复用 2 class 组件自身的问题

1. 组件的状态逻辑复用：
   + 在 Hooks 之前，组件的状态逻辑复用经历了：mixins（混入）、HOCs（高阶组件）、render-props 等模式。
   + （早已废弃）mixins 的问题：1 数据来源不清晰 2 命名冲突。
   + HOCs、render-props 的问题：重构组件结构，导致组件形成 JSX 嵌套地狱问题。

2. class 组件自身的问题：
   + 选择：函数组件和 class 组件之间的区别以及使用哪种组件更合适
   + 需要理解 class 中的 this 是如何工作的
   + 相互关联且需要对照修改的代码被拆分到不同生命周期函数中（见图）
     + componentDidMount ->  window.addEventListener('resize', this.fn)
     + componentWillUnmount -> window.removeEventListener('resize', this.fn)

- 相比于函数组件来说，不利于代码压缩和优化，也不利于 TS 的类型推导

正是由于 React 原来存在的这些问题，才有了 Hooks 来解决这些问题

### Hooks 是什么

- `Hooks`：钩子、钓钩、钩住
- `Hooks` 是 **React v16.8** 中的新增功能 
- 作用：为**函数组件**提供状态、生命周期等原本 class 组件中提供的 React 功能
  - 可以理解为通过 Hooks 为函数组件钩入 class 组件的特性
- 注意：**Hooks 只能在函数组件中使用**，自此，函数组件成为 React 的新宠儿

React v16.8 版本前后，组件开发模式的对比：

- React v16.8 以前： class 组件(提供状态) + 函数组件(展示内容)
- React v16.8 及其以后：
  1. class 组件(提供状态) + 函数组件(展示内容)
  2. Hooks(提供状态) + 函数组件(展示内容)
  3. 混用以上两种方式：部分功能用 class 组件，部分功能用 Hooks+函数组件

注意1：虽然有了 Hooks，但 React 官方并没有计划从 React 库中移除 class。

注意2：有了 Hooks 以后，不能再把**函数组件**称为无状态组件了，因为 Hooks 为函数组件提供了状态。

### hooks的优势

由于原来 React 中存在的问题，促使 React 需要一个更好的自带机制来实现组件状态逻辑复用。

1. Hooks 只能在函数组件中使用，避免了 class 组件的问题
2. 复用组件状态逻辑，而无需更改组件层次结构
3. 根据功能而不是基于生命周期方法强制进行代码分割
4. 抛开 React 赋予的概念来说，Hooks 就是一些普通的函数
5. 具有更好的 TS  类型推导
6. tree- - shaking  友 好，打包时去掉未引用的代码
7. 更好的压 缩


项目开发中，Hooks 的采用策略：

+ 不推荐直接使用 Hooks 大规模重构现有组件
+ 推荐：新功能用 Hooks，复杂功能实现不了的，也可以继续用 class
+ 找一个功能简单、非核心功能的组件开始使用 hooks

### 前面学习的 React 知识是有用的

class 组件相关的 API 不用了，比如：

- `class Hello extends Component`
- `componentDidMount`、`componentDidUpdate`、`componentWillUnmount`
- `this` 相关的用法

原来学习的内容还是要用的，比如：

- JSX：`{}`、`onClick={handleClick}`、条件渲染、列表渲染、样式处理等
- 组件：函数组件、组件通讯
- 路由
- React 开发理念：`单向数据流`、`状态提升` 等
- 解决问题的思路、技巧、常见错误的分析等上

## useState Hook 

### 概述

问题：Hook 是什么? 一个 Hook 就是一个特殊的函数，让你在函数组件中获取状态等 React 特性
使用模式：函数组件 + Hooks
特点：从名称上看，Hook 都以 use 开头

### useState Hook 的基本使用

- 使用场景：当你想要在**函数组件中，使用组件状态时**，就要使用 **useState** Hook 了
- 作用：为函数组件提供状态（state）
- 使用步骤：
  1. 导入 `useState` 函数
  2. 调用 `useState` 函数，并传入状态的初始值
  3. 从 `useState` 函数的返回值中，拿到状态和修改状态的函数
  4. 在 JSX 中展示状态
  5. 在按钮的点击事件中调用修改状态的函数，来更新状态

```js
import { useState } from 'react'

const Count = () => {
  // 返回值是一个数组
  const stateArray = useState(0)

  // 状态值 -> 0
  const state = stateArray[0]
  // 修改状态的函数
  const setState = stateArray[1]

  return (
    <div>
      {/* 展示状态值 */}
      <h1>useState Hook  {state}</h1>
      {/* 点击按钮，让状态值 +1 */}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
}
```

- 参数：**状态初始值**。比如，传入 0 表示该状态的初始值为 0
  - 注意：此处的状态可以是任意值（比如，数值、字符串等），而 class 组件中的 state 必须是对象
- 返回值：数组，包含两个值：1 状态值（state） 2 修改该状态的函数（setState）

### 使用数组解构简化

比如，要获取数组中的元素：

1. 原始方式：索引访问

```js
const arr = ['aaa', 'bbb']

const a = arr[0]  // 获取索引为 0 的元素
const b = arr[1]  // 获取索引为 1 的元素
```

2. 简化方式：数组解构
   - 相当于创建了两个变量（可以是任意的变量名称）分别获取到对应索引的数组元素

```js
const arr = ['aaa', 'bbb']

const [a, b] = arr
// a => arr[0]
// b => arr[1]

const [state, setState] = arr
```

- 使用数组解构简化 `useState` 的使用
  - 约定：**修改状态的函数名称以 set 开头，后面跟上状态的名称**

```js
// 解构出来的名称可以是任意名称

const [state, setState] = useState(0)
const [age, setAge] = useState(0)
const [count, setCount] = useState(0)
```

### 状态的读取和修改

状态的使用：1 读取状态 2 修改状态

1. 读取状态：该方式提供的状态，是函数内部的局部变量，可以在函数内的任意位置使用

2. 修改状态：

  - `setCount(newValue)` 是一个函数，参数表示：**新的状态值**
  - 调用该函数后，将**使用新的状态值`替换`旧值**
  - 修改状态后，因为状态发生了改变，所以，该组件会重新渲染

### 组件的更新过程

函数组件使用 **useState** hook 后的执行过程，以及状态值的变化： 

- 组件第一次渲染：
  1. 从头开始执行该组件中的代码逻辑
  2. 调用 `useState(0)` 将传入的参数作为状态初始值，即：0
  3. 渲染组件，此时，获取到的状态 count 值为： 0

- 组件第二次渲染：
  1. 点击按钮，调用 `setCount(count + 1)` 修改状态，因为状态发生改变，所以，该组件会重新渲染
  2. 组件重新渲染时，会再次执行该组件中的代码逻辑
  3. 再次调用 `useState(0)`，此时 **React 内部会拿到最新的状态值而非初始值**，比如，该案例中最新的状态值为 1
  4. 再次渲染组件，此时，获取到的状态 count 值为：1

注意：**useState 的初始值(参数)只会在组件第一次渲染时生效**。 

也就是说，以后的每次渲染，useState 获取到都是最新的状态值。React 组件会记住每次最新的状态值!

### 为函数组件添加多个状态

问题：如果一个函数组件需要多个状态，该如何处理?
回答：调用 `useState` Hook 多次即可，每调用一次 useState Hook 可以提供一个状态。
注意：useState Hook 多次调用返回的 [state, setState] 相互之间，互不影响。

### hooks 的使用规则

注意：**React Hooks 只能直接出现在 函数组件 中，不能嵌套在 if/for/其他函数中**！

否则就会报错：React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render

React 的 useState 这个 Hook 被条件性（放在一个条件判断中）的调用了。

React Hooks 必须要每次组件渲染时，按照**相同的顺序**来调用所有的 Hooks。

- 为什么会有这样的规则？ 因为 React 是按照 Hooks 的调用顺序来识别每一个 Hook，如果每次调用的顺序不同，导致 React 无法知道是哪一个 Hook
- 通过开发者工具可以查看到。

## useEffect Hook

1. side effect - 副作用
2. useEffect 的基本使用
3. useEffect 的依赖
4. useEffect 发送请求

### side effect - 副作用

使用场景：当你想要在函数组件中，**处理副作用（side effect）时**，就要使用 **useEffect** Hook 了
作用：**处理函数组件中的副作用（side effect）**

问题：副作用（side effect）是什么? 
回答：在计算机科学中，如果一个函数或其他操作修改了其局部环境之外的状态变量值，那么它就被称为有副作用
类比，对于 999 感冒灵感冒药来说：

- （**主**）作用：用于感冒引起的头痛，发热，鼻塞，流涕，咽痛等 
- 副作用：可见困倦、嗜睡、口渴、虚弱感

理解：副作用是相对于主作用来说的，一个功能（比如，函数）除了主作用，其他的作用就是副作用
对于 React 组件来说，**主作用就是根据数据（state/props）渲染 UI**，除此之外都是副作用（比如，手动修改 DOM）

React 组件的公式：**UI = f(state)**

常见的副作用（side effect）

- 数据（Ajax）请求、手动修改 DOM、localStorage 操作等

### useEffect 的基本使用

使用场景：当你想要在函数组件中，处理副作用（side effect）时，就要使用 useEffect Hook 了
作用：处理函数组件中的副作用（side effect）
注意：在实际开发中，副作用是不可避免的。因此，react 专门提供了 **useEffect** Hook **来处理函数组件中的副作用**

```js
import { useEffect } from 'react'

useEffect(function effect() {
  document.title = `当前已点击 ${count} 次`
})

useEffect(() => {
  document.title = `当前已点击 ${count} 次`
})
```

解释：

- 参数：回调函数（称为 **effect**），就是**在该函数中写副作用代码**
- 执行时机：该 effect 会在组件渲染后以及组件更新后执行
- 相当于componentDidMount + componentDidUpdate

### useEffect 的依赖

- 问题：如果组件中有另外一个状态，另一个状态更新时，刚刚的 effect 回调，也会执行 
- 性能优化：**跳过不必要的执行，只在 count 变化时，才执行相应的 effect**

```js
useEffect(() => {
  document.title = `当前已点击 ${count} 次`
}, [count])
```

解释：

- 第二个参数：可选的，可省略；也可以传一个数组，数组中的元素可以成为依赖项（deps） 
- 该示例中表示：只有当 count 改变时，才会重新执行该 effect

### useEffect 的依赖是一个空数组

useEffect 的第二个参数，还可以是一个**空数组（[]）**，表示只在组件第一次渲染后执行 effect
使用场景：1 事件绑定 2 发送请求获取数据 等

```js
useEffect(() => {
  const handleResize = () => {}
  window.addEventListener('resize', handleResize)
}, [])
```

解释：

- 该 effect 只会在组件第一次渲染后执行，因此，可以执行像事件绑定等只需要执行一次的操作
  - 此时，相当于 class 组件的 componentDidMount 钩子函数的作用
- 跟 useState Hook 一样，一个组件中也可以调用 useEffect Hook 多次 
- 推荐：一个 useEffect 只处理一个功能，有多个功能时，使用多次 useEffect

### 总结 useEffect 的使用

```js
// 触发时机：1 第一次渲染会执行 2 每次组件重新渲染都会再次执行
// componentDidMount + ComponentDidUpdate
useEffect(() => {})

// componentDidMount
// 触发时机：只在组件第一次渲染时执行
useEffect(() => {}, [])

// componentDidMount + componentDidUpdate(判断)
// 触发时机：1 第一次渲染会执行 2 当 count 变化时会再次执行
useEffect(() => {}, [count])
```

### 不要对useEffect的依赖项撒谎

```jsx
const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = '点击了' + count + '次'
  }, [])
  return (
    <div>
      <h1>计数器：{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <hr />
    </div>
  )
}
```

开启定时器

```js
useEffect(function () {
    setInterval(() => {
      setCount(count + 1)
    }, 1000)
  }, [])
```



> useEffect完全指南：https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/

### 打地鼠案例

+ 创建地鼠组件

  ```js
  import img from './hamster.jpeg'
  const Hamster = () => {
    return (
      <div>
        <img
          style={{ width: 100 }}
          alt="地鼠"
          src={img}
        />
      </div>
    )
  }
  
  export default Hamster
  ```

+ 动态控制地鼠显示隐藏

  ```js
  import img from './hamster.jpeg'
  import { useState, useEffect } from 'react'
  const Hamster = () => {
    
    // 地鼠显示状态
    const [display, setDisplay] = useState('none')
    
    useEffect(() => {
      // 控制地鼠随机显示和隐藏
      setInterval(() => {
        setDisplay(Math.random() > 0.5 ? 'none' : 'block')
        console.log('地鼠状态要切换了')
      }, 1000)
    }, [])
  
    return (
      <div>
        <img
          style={{ width: 100, display: display }}
          alt="地鼠"
          src={img}
        />
      </div>
    )
  }
  
  export default Hamster
  ```

+ 父组件控制地鼠被打次数的记录

  ```js
  import Hamster from './Components/Hamster'
  import hammer from './assets/hammer.png'
  import { useState } from 'react'
  function App() {
    const [count, setCount] = useState(0)
    return (
      <div className="App">
        <h1>地鼠被打次数：{count}</h1>
        <img
          onClick={() => setCount(count + 1)}
          alt="锤子"
          src={hammer}
          style={{ width: 50}}
        />
        <Hamster />
      </div>
    )
  }
  
  export default App;
  
  
  ```

+ 如果计数为5地鼠死了

  ```js
  {count >== 5 ? '地鼠被打死了' : <Hamster />}
  ```

### useEffect 清理副作用

有时候，我们只想**在 React 更新 DOM 之后运行一些额外的代码。**比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作。

还有一些副作用是需要清除的。例如** 开启定时器，注册事件**。这种情况下，清除工作是非常重要的，可以防止引起内存泄露！

问题：如何在组件卸载时，解绑事件？此时，就用到 effect 的返回值了

```js
useEffect(() => {
  // 开启副作用
  return () => 清楚副作用
}, [])
```

**完善打豆豆案例**

```js
import img from '../assets/hamster.jpeg'
import { useState, useEffect } from 'react'
const Hamster = () => {

  const [display, setDisplay] = useState('none')
  
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplay(Math.random() > 0.5 ? 'none' : 'block')
      console.log('地鼠状态要切换了')
    }, 1000)

    // 组件销毁是调用的回调
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <img
        style={{ width: 100, display: display }}
        alt="地鼠"
        src={img}
      />
    </div>
  )
}

export default Hamster
```



解释：

- effect 的返回值也是可选的，可省略。也可以返回一个清理函数，用来执行事件解绑等清理操作
- 清理函数的执行时机：1 组件卸载时 2 effect 重新执行前 
  - 此时，相当于 class 组件的 componentWillUnmount 钩子函数的作用
- 推荐：一个 useEffect 只处理一个功能，有多个功能时，使用多次 useEffect 
- 优势：根据业务逻辑来拆分，相同功能的业务逻辑放在一起，而不是根据生命周期方法名称来拆分代码 
- 编写代码时，关注点集中；而不是上下翻滚来查看代码

### useEffect 发送请求

在组件中，使用 useEffect Hook 发送请求获取数据（side effect）：

```js
import { useEffect } from 'react'
import axios from 'axios'
const App = () => {

  useEffect(() => {
    // 获取推荐列表
    const getList = async () => {
      const res = await axios.get('http://toutiao-app.itheima.net/v1_0/user/channels')
      console.log(res)
    }

    getList()
  }, [])

  return (
    <div>
      <ul>
        <li>推荐</li>
      </ul>
    </div>
  )
}

export default App
```

保存并渲染

```jsx
import { useState, useEffect } from 'react'
import axios from 'axios'
const App = () => {
  // 定义数据
  const [list, setList] = useState([])

  useEffect(() => {
    // 获取推荐列表
    const getList = async () => {
      const res = await axios.get('http://toutiao-app.itheima.net/v1_0/user/channels')
      // 保存数据
      setList(res.data.data.channels)
    }

    getList()
  }, [])

  return (
    <div>
      <ul>
        {/* 渲染视图 */}
        {
          list.map(item => (
            <li key={item.id}>{ item.name }</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
```



解释：

- 注意：**effect 只能是一个同步函数，不能使用 async**
- 因为 effect 的返回值应该是一个清理函数，React 会在组件卸载或者 effect 的依赖项变化时重新执行 
- 但如果 effect 是 async 的，此时返回值是 Promise 对象。这样的话，就无法保证清理函数被立即调用
- **为了使用 async/await 语法，可以在 effect 内部创建 async 函数，并调用**



## 购物车案例



![image-20201223110712000](images/image-20201223110712000-16362089372116.png)

### 基本步骤

1. 初始化项目基本结构
2. 封装 MyHeader 组件
3. 封装 MyFooter 组件
4. 商品列表数据展示
5. 封装 MyGoods 组件
6. 封装 MyCounter 组件

### 项目初始化

+ 清理目录
+ 安装bootstrap `yarn add bootstrap@4.5.0`
+ 引入bootstrap样式文件

```jsx
// index.js 
import 'bootstrap/dist/css/bootstrap.css'
```

### 封装MyHeader 组件

+ 新建组件`src/components/MyHeader/index.js`

```jsx
import './index.scss'
import React from 'react'

export default function index() {
  return (
    <div className='my-header'>
      标题
    </div>
  )
}

```

+ 新建样式文件`src/components/MyHeader/index.scss`

```jsx
.my-header {
  z-index: 999;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

+ 注意：脚手架内置了scss的支持，但是需要安装scss依赖包

```jsx
yarn add sass
```

+ `App.js`使用组件

```jsx
import React from 'react'
import MyHeader from './components/MyHeader'
export default function App() {
  return (
    <div>
      <MyHeader>购物车</MyHeader>
    </div>
  )
}

```

### 封装MyFooter组件

**目标：**能够封装购物车的Footer组件

![image-20211021180953961](images/image-20211021180953961-16362089372117.png)

**步骤**

1. 创建Footer组件
2. 提供Footer样式
3. 在App.js中渲染

**核心代码：**

+ 创建Footer组件 `src/components/MyFooter.js`

```jsx
import React from 'react'
import './index.scss'
export default function MyFooter() {
  return (
  <div className="my-footer">
    <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="footerCheck" />
      <label className="custom-control-label" htmlFor="footerCheck">全选</label>
    </div>
    <div>
      <span>合计:</span>
      <span className="price">¥ 100</span>
    </div>
    <button type="button" className="footer-btn btn btn-primary">结算 (0)</button>
  </div>
  )
}

```

+ 提供Footer样式`src/components/MyFooter.scss`

```scss
.my-footer {
  z-index: 999;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
```

+ 在`App.js`中渲染

```jsx
import React from 'react'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
export default function App() {
  return (
    <div>
      <MyHeader>购物车</MyHeader>

      <MyFooter></MyFooter>
    </div>
  )
}

```

### 封装GoodsItem组件

**目标：**能够封装GoodsItems组件

**核心代码**

+ 创建组件`src/components/GoodsItem/index.js`

```jsx
import React from 'react'
import './index.scss'
export default function GoodsItem() {
  return (
    <div className="my-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="input" />
          <label className="custom-control-label" htmlFor="input">
            <img
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              alt=""
            />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">商品名称</div>
        <div className="bottom">
          <span className="price">¥ 商品价格</span>
          <span>counter组件</span>
        </div>
      </div>
    </div>
  )
}

```

+ 准备样式

```scss
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}

```

+ 使用组件

```jsx
import React from 'react'
import './App.scss'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import GoodsItem from './components/GoodsItem'
export default function App() {
  return (
    <div className="app">
      <MyHeader>购物车</MyHeader>
      <GoodsItem></GoodsItem>
      <MyFooter></MyFooter>
    </div>
  )
}

```

+ 新增样式 App.scss

```scss
.app {
  padding-top: 45px;
  padding-bottom: 50px;
}

```



### 商品列表渲染

**目标：**完成商品列表的数据渲染

**步骤：**

1. app组件根据数据渲染商品列表
2. GoodsItem接收数据进行渲染

**核心代码**

+ 提供数据

```jsx
const arr = [
  {
    id: 1,
    goods_name:
      '班俏BANQIAO超火ins潮卫衣女士2020秋季新款韩版宽松慵懒风薄款外套带帽上衣',
    goods_img: 'https://www.escook.cn/vuebase/pics/1.png',
    goods_price: 108,
    goods_count: 1,
    goods_state: true,
  },
  {
    id: 2,
    goods_name:
      '嘉叶希连帽卫衣女春秋薄款2020新款宽松bf韩版字母印花中长款外套ins潮',
    goods_img: 'https://www.escook.cn/vuebase/pics/2.png',
    goods_price: 129,
    goods_count: 1,
    goods_state: true,
  },
  {
    id: 3,
    goods_name:
      '思蜜怡2020休闲运动套装女春秋季新款时尚大码宽松长袖卫衣两件套',
    goods_img: 'https://www.escook.cn/vuebase/pics/3.png',
    goods_price: 198,
    goods_count: 1,
    goods_state: false,
  },
  {
    id: 4,
    goods_name:
      '思蜜怡卫衣女加绒加厚2020秋冬装新款韩版宽松上衣连帽中长款外套',
    goods_img: 'https://www.escook.cn/vuebase/pics/4.png',
    goods_price: 99,
    goods_count: 1,
    goods_state: false,
  },
  {
    id: 5,
    goods_name:
      '幂凝早秋季卫衣女春秋装韩版宽松中长款假两件上衣薄款ins盐系外套潮',
    goods_img: 'https://www.escook.cn/vuebase/pics/5.png',
    goods_price: 156,
    goods_count: 1,
    goods_state: true,
  },
  {
    id: 6,
    goods_name: 'ME&CITY女装冬季新款针织抽绳休闲连帽卫衣女',
    goods_img: 'https://www.escook.cn/vuebase/pics/6.png',
    goods_price: 142.8,
    goods_count: 1,
    goods_state: true,
  },
  {
    id: 7,
    goods_name:
      '幂凝假两件女士卫衣秋冬女装2020年新款韩版宽松春秋季薄款ins潮外套',
    goods_img: 'https://www.escook.cn/vuebase/pics/7.png',
    goods_price: 219,
    goods_count: 2,
    goods_state: true,
  },
  {
    id: 8,
    goods_name:
      '依魅人2020休闲运动衣套装女秋季新款秋季韩版宽松卫衣 时尚两件套',
    goods_img: 'https://www.escook.cn/vuebase/pics/8.png',
    goods_price: 178,
    goods_count: 1,
    goods_state: true,
  },
  {
    id: 9,
    goods_name:
      '芷臻(zhizhen)加厚卫衣2020春秋季女长袖韩版宽松短款加绒春秋装连帽开衫外套冬',
    goods_img: 'https://www.escook.cn/vuebase/pics/9.png',
    goods_price: 128,
    goods_count: 1,
    goods_state: false,
  },
  {
    id: 10,
    goods_name:
      'Semir森马卫衣女冬装2019新款可爱甜美大撞色小清新连帽薄绒女士套头衫',
    goods_img: 'https://www.escook.cn/vuebase/pics/10.png',
    goods_price: 153,
    goods_count: 1,
    goods_state: false,
  },
]
const [list, setList] = useState(arr)

```

+ app.js渲染组件

```jsx
{list.map((item) => (
  <GoodsItem key={item.id} {...item}></GoodsItem>
))}
```

+ goodsItem渲染数据

```jsx
import React from 'react'
import './index.scss'
export default function GoodsItem({
  goods_count,
  goods_img,
  goods_name,
  goods_price,
  goods_state,
  id,
}) {
  return (
    <div className="my-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            checked={goods_state}
            id={id}
          />
          <label className="custom-control-label" htmlFor={id}>
            <img src={goods_img} alt="" />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {goods_price}</span>
          <span>counter组件</span>
        </div>
      </div>
    </div>
  )
}

```

### 商品选中功能

**目标：**完成商品的选中切换功能

**步骤：**

1. 注册onChange事件
2. 子传父修改状态

**核心代码**

+ 子组件

```jsx
<input
  type="checkbox"
  className="custom-control-input"
  checked={goods_state}
  id={id}
  onChange={() => changeState(id)}
/>
```

+ 父组件

```jsx
const changeState = (id) => {
  setList(
    list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          goods_state: !item.goods_state,
        }
      } else {
        return item
      }
    })
  )
}

{list.map((item) => (
  <GoodsItem
    key={item.id}
    {...item}
    changeState={changeState}
  ></GoodsItem>
))}
```

### 商品全选功能

**目标：完成商品全选切换功能**

**核心代码：**

+ App组件（全选显示）

  ```jsx
  <Footer list={list} />
  ```

+ MyFooter组件（全选显示）

  ```jsx
  import React from 'react'
  import './index.scss'
  export default function MyFooter({ list }) {
    const isCheckAll = list.every(item => item.goods_state)
    return (
      ...省略其他代码
      <input
            type="checkbox"
            className="custom-control-input"
            id="footerCheck"
            checked={isCheckAll}
          />
    )
  }
  
  ```

+ App组件（全选更改）

  ```jsx
  const checkAll = (value) => {
    setList(
      list.map((item) => {
        return {
          ...item,
          goods_state: value,
        }
      })
    )
  }
  
  <Footer list={list} checkAll={checkAll} />
  ```

+ Footer组件（全选更改）

  ```jsx
  import React from 'react'
  import './index.scss'
  export default function MyFooter({ list, checkAll }) {
    const isCheckAll = list.every(item => item.goods_state)
    return (
      <input
            type="checkbox"
            className="custom-control-input"
            id="footerCheck"
            checked={isCheckAll}
            onChange={() => checkAll(!isCheckAll)}
          />
    )
  }
  
  ```

  

### 商品数量与价格的显示

**步骤：**

2. 子组件计算总数量和总价钱

```jsx
const totalCount = list
  .filter((item) => item.goods_state)
  .reduce((prev, item) => prev + item.goods_count, 0)
const totalPrice = list
  .filter((item) => item.goods_state)
  .reduce((prev, item) => prev + item.goods_price * item.goods_count, 0)
```

### 数据持久化

```jsx
// 获取
const [list, setList] = useState(() => {
  return JSON.parse(localStorage.getItem('list')) || arr
})


useEffect(() => {  
  localStorage.setItem('list', JSON.stringify(list))
}, [list])
```