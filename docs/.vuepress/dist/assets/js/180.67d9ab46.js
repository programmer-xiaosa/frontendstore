(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1742:function(s,t,a){"use strict";a.r(t);var n=a(36),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"项目介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[s._v("#")]),s._v(" 项目介绍")]),s._v(" "),a("h2",{attrs:{id:"资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资料"}},[s._v("#")]),s._v(" 资料")]),s._v(" "),a("ul",[a("li",[s._v("短信接收&M端演示：http://geek.itheima.net/")]),s._v(" "),a("li",[s._v("PC 端接口文档：http://liufusong.top:8086/")])]),s._v(" "),a("h2",{attrs:{id:"项目介绍-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍-2"}},[s._v("#")]),s._v(" 项目介绍")]),s._v(" "),a("blockquote",[a("p",[s._v("「极客园」对标"),a("code",[s._v("CSDN")]),s._v("、"),a("code",[s._v("博客园")]),s._v("等竞品，致力成为更加贴近年轻 IT 从业者（学员）的科技资讯类应用"),a("br"),s._v("\n产品关键词：IT、极客、活力、科技、技术分享、前沿动态、内容社交"),a("br"),s._v("\n用户特点：年轻有活力，对IT领域前言科技信息充满探索欲和学习热情")])]),s._v(" "),a("ul",[a("li",[s._v("极客园 PC 端项目：个人自媒体管理端")]),s._v(" "),a("li",[s._v("项目演示")]),s._v(" "),a("li",[s._v("项目功能，包括\n"),a("ul",[a("li",[s._v("登录")]),s._v(" "),a("li",[s._v("首页")]),s._v(" "),a("li",[s._v("内容（文章）管理\n"),a("ul",[a("li",[s._v("文章列表")]),s._v(" "),a("li",[s._v("发布文章")]),s._v(" "),a("li",[s._v("修改文章")])])])])]),s._v(" "),a("li",[s._v("技术栈：\n"),a("ul",[a("li",[a("code",[s._v("react")]),s._v(" v17.0.2 / "),a("code",[s._v("react-dom")]),s._v(" v17.0.2")]),s._v(" "),a("li",[s._v("ajax请求库："),a("code",[s._v("axios")])]),s._v(" "),a("li",[s._v("路由："),a("code",[s._v("react-router-dom")]),s._v(" 以及 "),a("code",[s._v("history")])]),s._v(" "),a("li",[s._v("富文本编辑器："),a("code",[s._v("react-quill")])]),s._v(" "),a("li",[s._v("CSS 预编译器："),a("code",[s._v("sass")])]),s._v(" "),a("li",[s._v("UI 组件库："),a("code",[s._v("antd")]),s._v(" v4")]),s._v(" "),a("li",[s._v("项目搭建：React 官方脚手架 "),a("code",[s._v("create-react-app")])])])])]),s._v(" "),a("h1",{attrs:{id:"项目搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目搭建"}},[s._v("#")]),s._v(" 项目搭建")]),s._v(" "),a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("ol",[a("li",[s._v("使用 React CLI 搭建项目："),a("code",[s._v("npx create-react-app 项目名")])]),s._v(" "),a("li",[s._v("进入项目根目录："),a("code",[s._v("cd 项目名")])]),s._v(" "),a("li",[s._v("启动项目："),a("code",[s._v("yarn start")])]),s._v(" "),a("li",[s._v("调整项目目录结构：")])]),s._v(" "),a("div",{staticClass:"language-tree line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/src\n  /assets         项目资源文件，比如，图片 等\n  /components     通用组件\n  /pages          页面\n  /utils          工具，比如，token、axios 的封装等、\n  /api            封装接口\n  \n  App.js          根组件\n  index.css       全局样式\n  index.js        项目入口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"使用git管理项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用git管理项目"}},[s._v("#")]),s._v(" 使用git管理项目")]),s._v(" "),a("p",[s._v("https://gitee.com/hucongcong/geek-pc-hz21/tree/master")]),s._v(" "),a("h2",{attrs:{id:"配置登录路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置登录路由"}},[s._v("#")]),s._v(" 配置登录路由")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装路由："),a("code",[s._v("yarn add react-router-dom")])])]),s._v(" "),a("li",[a("p",[s._v("在 pages 目录中创建两个页面：Login")])])]),s._v(" "),a("p",[a("code",[s._v("src/pages/Login/index.js")])]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Login")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("登录页")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" Login\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("在 App 组件中，导入路由组件以及两个页面组件，配置路由规则")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入路由")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  BrowserRouter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  Route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  Switch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react-router-dom'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导入页面组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Login "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./pages/Login'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置路由规则")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Router"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div className"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"App"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 路由规则 */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Switch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Route path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/login"')]),s._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Route"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Switch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Router"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" App\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("ul",[a("li",[s._v("点击http://localhost:3000/login测试")])]),s._v(" "),a("h2",{attrs:{id:"组件库-antd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件库-antd"}},[s._v("#")]),s._v(" 组件库 - antd")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ant.design/index-cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ant Design"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ant.design/docs/react/introduce-cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("antd PC 端组件库文档"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("antd")]),s._v(" 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。")]),s._v(" "),a("p",[a("strong",[s._v("开箱即用")])])]),s._v(" "),a("ol",[a("li",[s._v("安装："),a("code",[s._v("yarn add antd")])]),s._v(" "),a("li",[s._v("使用：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1 在 index.js 中导入 antd 的样式文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'antd/dist/antd.css'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2 在 Login 页面组件中，使用 antd 的 Button 组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Button "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'antd'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("Login")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Button type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"primary"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"git提交代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git提交代码"}},[s._v("#")]),s._v(" git提交代码")])])}),[],!1,null,null,null);t.default=e.exports}}]);