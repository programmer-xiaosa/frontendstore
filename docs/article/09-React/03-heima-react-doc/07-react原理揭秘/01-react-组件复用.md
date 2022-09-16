# 任务

思考：如果两个组件中的部分功能相似或相同，该如何处理？

鼠标移动图片跟随

<img src="images/image-20211123193640589.png" alt="image-20211123193640589" style="zoom:50%;" />

鼠标移动页面实时更新坐标信息

<img src="images/image-20211123194047885.png" alt="image-20211123194047885" style="text-align: left;zoom:50%;" />

# render-props 技术

## 组件复用的说明

- 复用什么？1. state 2. 操作 state 的方法 **复用组件的状态和组件的逻辑，组件的 UI 不一样**
- 两种解决方案
  - render-props
  - HOC（高阶组件）
  - hooks
- 注意：前两种方式不是新的 API，而是利用 React 自身特点的编码技巧，演化而成的固定模式（写法）

## render-props 基本使用

分析：

- 思路：将要复用的 state 和操作 state 的方法封装到一个组件中
- 问题：渲染的 UI 内容不一样，该怎么办
- **在使用组件时，添加一个值为函数的 prop，通常把这个 prop 命名为 render，在组件内部调用这个函数。传进来的函数负责渲染 UI**
- 问题 2：如果获取组件内部的状态
- **在组件内部调用方法的时候，把状态当成参数进行传递**

代码：

Mouse 组件

```jsx
import React, { Component } from 'react'

export default class Mouse extends Component {
  render() {
    return <div>{this.props.render({ x: this.state.x, y: this.state.y })}</div>
  }
  state = {
    x: 0,
    y: 0,
  }

  componentDidMount() {
    // 给window绑定鼠标移动事件
    window.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove = (e) => {
    // 鼠标移动设置x，y坐标
    this.setState({
      x: e.pageX,
      y: e.pageY,
    })
  }
}
```

使用 mouse 组件

```jsx
<Mouse
  render={(mouse) => (
    <div style={{ padding: 100 }}>
      <h1>鼠标位置：</h1>
      <p>x坐标：{mouse.x}</p>
      <p>y坐标：{mouse.y}</p>
    </div>
  )}
/>
```

## children 代替 render 属性

- 注意：并不是该模式叫 render props 就必须使用名为 render 的 prop，实际上可以使用任意名称的 prop
- 把 prop 是一个函数并且告诉组件要渲染什么内容的技术叫做：render props 模式
- 推荐：使用 children 代替 render 属性

通过 children 传递 ui

```jsx
<Mouse>
  {(mouse) => (
    <div style={{ padding: 100 }}>
      <h1>鼠标位置：</h1>
      <p>x坐标：{mouse.x}</p>
      <p>y坐标：{mouse.y}</p>
    </div>
  )}
</Mouse>
```

通过 children 进行接收

```jsx
<div>{this.props.children({ x: this.state.x, y: this.state.y })}</div>
```

# 高阶组件 HOC higher order component

## 概述

- 目的：实现状态逻辑复用 增强一个组件的能力

- 采用 包装（装饰）模式 ，比如说：手机壳
- 手机：获取保护功能
- 手机壳 ：提供保护功能
- 高阶组件就相当于手机壳，通过包装组件，增强组件功能

<!-- ![](images/HOC.png) -->

## 思路分析

- 高阶组件（HOC，Higher-Order Component）是一个函数，接收要包装的组件，返回增强后的组件
- 高阶组件的命名： `withMouse` `withRouter` `withXXX`
- 高阶组件内部创建一个类组件，在这个类组件中提供复用的状态逻辑代码，通过 prop 将复用的状态传递给
  被包装组件

```js
const CatWithMouse = withMouse(Cat)
const PositionWithMOuse = withMouse(Position)
```

```js
// 高阶组件内部创建的类组件：
const WithMouse = (Base) => {
  class Mouse extends React.Component {
    // 处理鼠标的位置等操作
    render() {
      return <Base {...this.state} />
    }
  }
  return Mouse
}
```

## 使用步骤

- 创建一个函数，名称约定以 with 开头

  ```jsx
  function withMouse() {}
  ```

- 在函数内部创建一个类组件，**提供复用的状态逻辑代码**，并返回

  ```jsx
  function withMouse() {
    class Mouse extends Component {
      render() {
        return null
      }
      state = {
        x: 0,
        y: 0,
      }

      componentDidMount() {
        // 给window绑定鼠标移动事件
        window.addEventListener('mousemove', this.onMouseMove)
      }

      onMouseMove = (e) => {
        // 鼠标移动设置x，y坐标
        this.setState({
          x: e.pageX,
          y: e.pageY,
        })
      }
    }

    return Mouse
  }
  ```

- 指定函数参数（作为要增强的组件） 传入的组件只能渲染基本的 UI

  ```jsx
  function withMouse(Components) {
    // Components 要传入的ui组件
    class Mouse extends Component {
      render() {
        return <Components />
      }
      state = {
        x: 0,
        y: 0,
      }

      componentDidMount() {
        // 给window绑定鼠标移动事件
        window.addEventListener('mousemove', this.onMouseMove)
      }

      onMouseMove = (e) => {
        // 鼠标移动设置x，y坐标
        this.setState({
          x: e.pageX,
          y: e.pageY,
        })
      }
    }

    return Mouse
  }
  ```

- 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件，并将其渲染到页面中

  ```jsx
  function MoveImg() {
    return (
      <div>
        <img
          style={{ position: 'absolute' }}
          alt=""
          src="http://destiny001.gitee.io/image/zxc.gif"
        />
      </div>
    )
  }

  const Mouse = withMouse(MoveImg)
  ```

- 在内部创建的组件的 render 中，需要渲染传入的基本组件，增强功能，通过 props 的方式给基本组件传值

  ```jsx
  render() {
    return <Components {...this.state} />
  }
  ```

  ```jsx
  function MoveImg({ x, y }) {
    return (
      <div>
        <img
          style={{ position: 'absolute', left: x, top: y }}
          alt=""
          src="http://destiny001.gitee.io/image/zxc.gif"
        />
      </div>
    )
  }
  ```

## 传递 props

- 问题：props 丢失

  给 mouse 组件传递数据

  ```jsx
  <div>
    <Mouse name={'张三'} />
  </div>
  ```

  丢失数据

  ```jsx
  function MoveImg({ x, y, name }) {
    console.log(name) // undefined
    return (
      <div>
        <img
          style={{ position: 'absolute', left: x, top: y }}
          alt=""
          src="http://destiny001.gitee.io/image/zxc.gif"
        />
      </div>
    )
  }
  ```

- 原因是数据传递给了 Mouse 组件，mouse 组件并没有再次传递给 Component 组件

- 在 mouse 组件中将 props 传递给 Component 组件

  ```jsx
  class Mouse extends Component {
    render() {
      return <Components {...this.state} {...this.props} />
    }
  }
  ```
