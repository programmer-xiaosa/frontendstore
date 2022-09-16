# hooks 进阶

## 自定义 hooks

### 概述

除了使用内置的 Hooks 之外，还可以创建自己的 Hooks（自定义 Hooks）。

使用场景：**将组件状态逻辑提取到可重用的函数（自定义 Hooks）中，实现状态逻辑复用。**

内置 Hooks 为函数组件赋予了 class 组件的功能；在此之上，自定义 Hooks 针对不同组件实现不同状态逻辑复用。

- 自定义 Hooks 是一个函数，**约定函数名称必须以 use 开头，React 就是通过函数名称是否以 use 开头来判断是不是 Hooks**

- Hooks 只能在函数组件中或其他自定义 Hooks 中使用，否则，会报错！
- 自定义 Hooks 用来提取组件的状态逻辑，根据不同功能可以有不同的参数和返回值（就像使用普通函数一样）

### 使用

- 实现鼠标移动记录坐标

  ```jsx
  import { useState, useEffect } from 'react'
  const App = () => {
    // 定义记录移动坐标
    const [position, setPosition] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
      // 给window绑定鼠标移动事件
      window.addEventListener('mousemove', (e) => {
        setPosition({
          x: e.pageX,
          y: e.pageY,
        })
      })
    }, [])
    return (
      <div>
        鼠标的位置：{position.x},{position.y}
      </div>
    )
  }

  export default App
  ```

- 封装自定义 hooks

  ```jsx
  import { useState, useEffect } from 'react'
  const useMouse = () => {
    // 定义记录移动坐标
    const [position, setPosition] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
      // 给window绑定鼠标移动事件
      window.addEventListener('mousemove', (e) => {
        setPosition({
          x: e.pageX,
          y: e.pageY,
        })
      })
    }, [])
    return position
  }

  export default useMouse
  ```

- 使用自定义 hooks

  ```jsx
  import useMouse from './hooks/useMouse'
  import hammer from './assets/hammer.png'
  const App = () => {
    const { x, y } = useMouse()
    return (
      <div>
        鼠标的位置：{x},{y}
        <img
          alt="锤子"
          src={hammer}
          style={{
            position: 'absolute',
            top: y,
            left: x,
          }}
        />
      </div>
    )
  }

  export default App
  ```

- 清理副作用

  ```jsx
  import { useState, useEffect } from 'react'
  const useMouse = () => {
    // 定义记录移动坐标
    const [position, setPosition] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
      const move = (e) => {
        setPosition({
          x: e.pageX,
          y: e.pageY,
        })
      }
      // 给window绑定鼠标移动事件
      window.addEventListener('mousemove', move)

      return () => {
        window.removeEventListener('mousemove', move)
      }
    }, [])
    return position
  }

  export default useMouse
  ```

## useRef-操作 DOM

### 目标

能够使用 useRef 操作 DOM

### 内容

使用场景：在 React 中进行 DOM 操作时，用来获取 DOM

作用：**返回一个带有 current 属性的可变对象，通过该对象就可以进行 DOM 操作了。**

```jsx
const inputRef = useRef(null)
```

解释：

- 参数：在获取 DOM 时，一般都设置为 null
- 返回值：包含 current 属性的对象。

- 注意：只要在 React 中进行 DOM 操作，都可以通过 useRef Hook 来获取 DOM（比如，获取 DOM 的宽高等）。

- 注意：useRef 不仅仅可以用于操作 DOM，还可以操作组件(函数组件不可以引用 ref)

**核心代码：**

```JSX
/*
  1. 使用useRef能够创建一个ref对象，  有current属性  {current: null}
    const xxRef = useRef(null)

  2. 通过ref属性关联到某个DOM对象上  {current: DOM}
    <div ref={xxRef}></div>

  3. 可以通过 xxRef.current访问到对应的DOM
*/
const App = () => {
  const inputRef = useRef(null)
  const add = () => {
    console.log(inputRef.current.value)
  }
  return (
    <section className="todoapp">
      <input type="text" placeholder="请输入内容" ref={inputRef} />{' '}
      <button onClick={add}>添加</button>
    </section>
  )
}

export default App
```

### 操作组件

默认 ref 只能引用类组件，不可以引用函数组件，如果使用需要配合 forwardRef

#### 类组件

```jsx
import { useRef, Component } from 'react'

class Demo extends Component {
  render() {
    return <div>demo</div>
  }
}

const App = () => {
  const demoRef = useRef(null)

  return (
    <div>
      <Demo ref={demoRef} />
      <button onClick={() => console.log(demoRef)}>获取组件</button>
    </div>
  )
}

export default App
```

#### 函数组件

```js
import { useRef } from 'react'

function Demo() {
  return <div>demo</div>
}

const App = () => {
  const demoRef = useRef(null)

  return (
    <div>
      <Demo ref={demoRef} />
      <button onClick={() => console.log(demoRef)}>获取组件</button>
    </div>
  )
}

export default App
```

![image-20220119114513443](/Users/liufusong/Desktop/itcast/react/2021版react/笔记/03-react-hooks/images/image-20220119114513443.png)

#### 转发 ref

forwardRef：可以转发 ref，函数组件和类组件均可使用 [refs 转发](https://zh-hans.reactjs.org/docs/forwarding-refs.html)

```jsx
import { useRef, forwardRef } from 'react'

{
  /* 2. 利用forwardRef进行转发 */
}
const Demo = forwardRef(function (props, ref) {
  {
    /* 3. 子组件进行引用 */
  }
  return <div ref={ref}>demo</div>
})

const App = () => {
  const demoRef = useRef(null)

  return (
    <div>
      {/* 1. 将ref传递到函数组件内 */}
      <Demo ref={demoRef} />
      <button onClick={() => console.log(demoRef)}>获取组件</button>
    </div>
  )
}

export default App
```

## useContext

**目标：回顾 context 跨级组件通讯的使用**

**内容：**

使用场景：跨组件共享数据。

Context 作用：实现跨组件传递数据，而不必在每个级别手动传递 props，简化组件之间的数据传递过程

![image-20210901215518365](/Users/liufusong/Desktop/itcast/react/2021版react/笔记/03-react-hooks/images/image-20210901215518365-16347403277492-16362080009754.png)

Context 对象包含了两个组件

- `<Context.Provider value>`：通过 value 属性提供数据。

- `<Context.Consumer>`：通过 render-props 模式，在 JSX 中获取 Context 中提供的数据。

![image-20210901215545019](/Users/liufusong/Desktop/itcast/react/2021版react/笔记/03-react-hooks/images/image-20210901215545019-16347403277493-16362080009753.png)

注意：

1. 如果提供了 Provider 组件，Consumer 获取到的是 Provider 中 value 属性的值。
2. 如果没有提供 Provider 组件，Consumer 获取到的是 createContext(defaultValue) 的 defaultValue 值。

### 复习 Context

CreateContext 的使用

App 组件

```js
import { createContext } from 'react'
import Father from './Father'

export const ThemeContext = createContext()
const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Father />
    </ThemeContext.Provider>
  )
}

export default App
```

Father 组件

```jsx
import Child from './Child.js'
const Father = () => {
  return (
    <div>
      <h2>
        父组件：
        <Child />
      </h2>
    </div>
  )
}

export default Father
```

Child 组件

```jsx
import { ThemeContext } from './App'
const Child = () => {
  return (
    <div>
      <h3>
        子组件：
        <ThemeContext.Consumer>{(value) => value}</ThemeContext.Consumer>
      </h3>
    </div>
  )
}

export default Child
```

### 抽离 ThemeContext

ThemeContext.js

```jsx
import { createContext } from 'react'
const ThemeContext = createContext()
export default ThemeContext
```

App.js

```jsx
import ThemeContext from './context/ThemeContext.js'
```

Child.js

```jsx
import ThemeContext from './context/ThemeContext'
```

### useContext-使用

**目标：**能够通过 useContext hooks 实现跨级组件通讯

```jsx
// 1.引入useContext
import { useContext } from 'react'
import ThemeContext from './context/ThemeContext'
const Child = () => {
  // 2.使用useContext获取Context的数据
  const ThemeValue = useContext(ThemeContext)
  console.log(ThemeValue)
  return (
    <div>
      <h3>子组件：{ThemeValue}</h3>
    </div>
  )
}

export default Child
```

## 购物车案例

### 发送请求-获取列表数据

**目标：**发送请求，获取到购物车数据

**步骤**

1. 安装 axios
2. 使用 useState hooks 提供状态
3. 使用 useEffect 发送请求获取数据

**核心代码**

- 安装 axios

```bash
yarn add axios
```

- 发送请求，获取数据

```jsx
useEffect(() => {
  // 判断本地是否有数据
  const arr = JSON.parse(localStorage.getItem('list')) || []
  if (arr.length) {
    return setList(arr)
  }
  // 本地没有数据，发送请求，获取数据
  const getList = async () => {
    const res = await axios.get('https://www.escook.cn/api/cart')
    setList(res.data.list)
  }
  getList()
}, [])
```

### MyCount 组件的封装

- 基本结构

```jsx
import React from 'react'
import './index.scss'
export default function MyCount() {
  return (
    <div className="my-counter">
      <button type="button" className="btn btn-light">
        -
      </button>
      <input type="number" className="form-control inp" value="1" />
      <button type="button" className="btn btn-light">
        +
      </button>
    </div>
  )
}
```

- 样式

```scss
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
}
```

- 在 GoodsItem 组件中渲染

```jsx
import MyCount from '../MyCount'
;<MyCount count={row.goods_count}></MyCount>
```

### 数量控制-useContext

**目标：**使用 useContext 优化组件的通讯

**步骤**

1. 在 App.js 中创建 Context 对象，并且导出

```jsx
export const Context = createContext()
```

2. 在 App.js 中，通过 Provider 提供方法

```jsx
<Context.Provider value={{ changeCount }}>
  <div className="app">
    <MyHeader>购物车</MyHeader>

    {list.map((item) => (
      <GoodsItem
        key={item.id}
        {...item}
        changeState={changeState}
        changeCount={changeCount}
      ></GoodsItem>
    ))}

    <MyFooter list={list} changeAll={changeAll}></MyFooter>
  </div>
</Context.Provider>
```

3. 在 myCount 组件中，使用 useContext 获取数据

```jsx
import { Context } from '../../App'

const { changeCount } = useContext(Context)
```
