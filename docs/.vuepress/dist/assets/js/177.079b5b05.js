(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1718:function(t,s,a){"use strict";a.r(s);var n=a(36),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),a("h2",{attrs:{id:"mustache语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mustache语法"}},[t._v("#")]),t._v(" "),a("code",[t._v("Mustache")]),t._v("语法")]),t._v(" "),a("blockquote",[a("p",[t._v("语法的格式把data中的数据绑定到页面中渲染，使用 Mustache 语法（双大括号）将变量包起来即可。语法格式为：")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ 要绑定的数据名称 }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"mustache-语法的主要应用场景如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mustache-语法的主要应用场景如下"}},[t._v("#")]),t._v(" "),a("code",[t._v("Mustache")]),t._v(" 语法的主要应用场景如下：")]),t._v(" "),a("ul",[a("li",[t._v("绑定内容")]),t._v(" "),a("li",[t._v("绑定属性")]),t._v(" "),a("li",[t._v("运算（三元运算、算术运算等")])]),t._v(" "),a("h2",{attrs:{id:"target-和currenttarget-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-和currenttarget-的区别"}},[t._v("#")]),t._v(" target 和currentTarget 的区别")]),t._v(" "),a("blockquote",[a("p",[t._v("target 是触发该事件的源头组件，而 currentTarget 则是当前事件所绑定的组件。")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("outer-view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("outerHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("按钮"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("点击内部的按钮时，点击事件以冒泡的方式向外扩散，也会触发外层 view 的tap 事件处理函数。\n此时，对于外层的 view 来说：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("e.target")]),t._v(" 指向的是触发事件的源头组件，因此，"),a("code",[t._v("e.target")]),t._v(" 是内部的按钮组件")]),t._v(" "),a("li",[a("code",[t._v("e.currentTarget")]),t._v(" 指向的是当前正在触发事件的那个组件，因此，"),a("code",[t._v("e.currentTarget")]),t._v(" 是当前的 view 组件")])]),t._v(" "),a("h2",{attrs:{id:"条件渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染"}},[t._v("#")]),t._v(" 条件渲染")]),t._v(" "),a("h3",{attrs:{id:"结合-block-使用-wx-if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结合-block-使用-wx-if"}},[t._v("#")]),t._v(" 结合 "),a("code",[t._v("<block>")]),t._v(" 使用 wx:if")]),t._v(" "),a("p",[t._v("如果要一次性控制多个组件的展示与隐藏，可以使用一个 "),a("code",[t._v("<block></block>")]),t._v(" 标签将多个组件包装起来，并在"),a("code",[t._v("<block>")]),t._v(" 标签上使用 wx:if 控制属性")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("block")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wx:")]),t._v("if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ true }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("view1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("view2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("blockquote",[a("p",[t._v("注意： "),a("code",[t._v("<block>")]),t._v(" 并不是一个组件，它只是一个包裹性质的容器，不会在页面中做任何渲染。")])]),t._v(" "),a("h3",{attrs:{id:"hidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hidden"}},[t._v("#")]),t._v(" hidden")]),t._v(" "),a("p",[t._v("在小程序中，直接使用 hidden 也能控制元素的显示与隐藏：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("hidden")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ condition }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("条件为 true 隐藏、条件为 false 显示"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"wx-if-与hidden-的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wx-if-与hidden-的对比"}},[t._v("#")]),t._v(" wx:if 与hidden 的对比")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("运行方式不同")]),t._v(" "),a("ul",[a("li",[t._v("wx:if 以动态创建和移除元素的方式，控制元素的展示与隐藏")]),t._v(" "),a("li",[t._v("hidden 以切换样式的方式（display: none/block;），控制元素的显示与隐藏")])])]),t._v(" "),a("li",[a("p",[t._v("使用建议")]),t._v(" "),a("ul",[a("li",[t._v("频繁切换时，建议使用 hidden")]),t._v(" "),a("li",[t._v("控制条件复杂时，建议使用 wx:if 搭配 wx:elif、wx:else 进行展示与隐藏的切换")])])])]),t._v(" "),a("h2",{attrs:{id:"rpx-的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpx-的实现原理"}},[t._v("#")]),t._v(" rpx 的实现原理")]),t._v(" "),a("p",[t._v("rpx 的实现原理非常简单：鉴于不同设备屏幕的大小不同，为了实现屏幕的自动适配，rpx 把所有设备的屏幕，在宽度上等分为 750 份（即：当前屏幕的总宽度为 750rpx）。")]),t._v(" "),a("ul",[a("li",[t._v("在较小的设备上，1rpx 所代表的宽度较小")]),t._v(" "),a("li",[t._v("在较大的设备上，1rpx 所代表的宽度较大")])]),t._v(" "),a("p",[t._v("小程序在不同设备上运行的时候，会自动把 rpx 的样式单位换算成对应的像素单位来渲染，从而实现屏幕适配。")]),t._v(" "),a("h2",{attrs:{id:"小程序中实现页面导航的两种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序中实现页面导航的两种方式"}},[t._v("#")]),t._v(" 小程序中实现页面导航的两种方式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("声明式导航")]),t._v(" "),a("ul",[a("li",[t._v("在页面上声明一个 "),a("code",[t._v("<navigator>")]),t._v(" 导航组件")]),t._v(" "),a("li",[t._v("通过点击 "),a("code",[t._v("<navigator>")]),t._v(" 组件实现页面跳转")])])]),t._v(" "),a("li",[a("p",[t._v("编程式导航\n调用小程序的导航 API，实现页面的跳转")])])]),t._v(" "),a("h2",{attrs:{id:"页面追加数据方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面追加数据方案"}},[t._v("#")]),t._v(" 页面追加数据方案")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 页面的初始数据\n   */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("colorList")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isloding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getColors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isloding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要展示 loading 效果")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showLoading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数据加载中...'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.escook.cn/api/color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("colorList")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("colorList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("complete")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hideLoading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isloding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])]),a("h2",{attrs:{id:"上拉触底案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上拉触底案例"}},[t._v("#")]),t._v(" 上拉触底案例")]),t._v(" "),a("blockquote",[a("p",[t._v("对上拉触底进行节流处理")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在 data 中定义 isloading 节流阀")]),t._v(" "),a("ul",[a("li",[t._v("false 表示当前没有进行任何数据请求")]),t._v(" "),a("li",[t._v("true 表示当前正在进行数据请求")])])]),t._v(" "),a("li",[a("p",[t._v("在 getColors() 方法中修改 isloading 节流阀的值")]),t._v(" "),a("ul",[a("li",[t._v("在刚调用 getColors 时将节流阀设置 true")]),t._v(" "),a("li",[t._v("在网络请求的 complete 回调函数中，将节流阀重置为 false")])])]),t._v(" "),a("li",[a("p",[t._v("在 onReachBottom 中判断节流阀的值，从而对数据请求进行节流控制")]),t._v(" "),a("ul",[a("li",[t._v("如果节流阀的值为 true，则阻止当前请求")]),t._v(" "),a("li",[t._v("如果节流阀的值为 false，则发起数据请求")])])])]),t._v(" "),a("h2",{attrs:{id:"wxs-的应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wxs-的应用场景"}},[t._v("#")]),t._v(" wxs 的应用场景")]),t._v(" "),a("p",[t._v("wxml 中无法调用在页面的 .js 中定义的函数，但是，wxml 中可以调用 wxs 中定义的函数。因此，小程序中wxs 的典型应用场景就是“过滤器”。")]),t._v(" "),a("h3",{attrs:{id:"wxs-和javascript-的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wxs-和javascript-的关系"}},[t._v("#")]),t._v(" wxs 和JavaScript 的关系")]),t._v(" "),a("p",[t._v("虽然 wxs 的语法类似于 JavaScript，但是 wxs 和JavaScript 是完全不同的两种语言：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("wxs 有自己的数据类型")]),t._v(" "),a("ul",[a("li",[t._v("number 数值类型、string 字符串类型、boolean 布尔类型、object 对象类型")]),t._v(" "),a("li",[t._v("function 函数类型、array 数组类型、 date 日期类型、 regexp 正则")])])]),t._v(" "),a("li",[a("p",[t._v("wxs 不支持类似于 ES6 及以上的语法形式")]),t._v(" "),a("ul",[a("li",[t._v("不支持：let、const、解构赋值、展开运算符、箭头函数、对象属性简写、etc...")]),t._v(" "),a("li",[t._v("支持：var 定义变量、普通 function 函数等类似于 ES5 的语法")])])]),t._v(" "),a("li",[a("p",[t._v("wxs 遵循 CommonJS 规范")]),t._v(" "),a("ul",[a("li",[t._v("module 对象")]),t._v(" "),a("li",[t._v("require() 函数")]),t._v(" "),a("li",[t._v("module.exports 对象")])])])]),t._v(" "),a("h3",{attrs:{id:"内嵌-wxs-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内嵌-wxs-脚本"}},[t._v("#")]),t._v(" 内嵌 wxs 脚本")]),t._v(" "),a("p",[a("code",[t._v("wxs")]),t._v(" 代码可以编写在 "),a("code",[t._v("wxml")]),t._v(" 文件中的 "),a("code",[t._v("<wxs>")]),t._v(" 标签内，就像 Javascript 代码可以编写在 html 文件中的 "),a("code",[t._v("<script>")]),t._v(" 标签内一样。")]),t._v(" "),a("p",[a("code",[t._v("wxml")]),t._v(" 文件中的每个 "),a("code",[t._v("<wxs></wxs>")]),t._v(" 标签，必须提供 "),a("code",[t._v("module")]),t._v(" 属性，用来指定当前 "),a("code",[t._v("wxs")]),t._v(" 的模块名称，方便在 "),a("code",[t._v("wxml")]),t._v(" 中访问模块中的成员：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{m1.toUpper(username)}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wxs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../../utils/tools.wxs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("m2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("wxs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wxs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("m1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  module.exports.toUpper = function(str) {\n    return str.toUpperCase()\n  }\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("wxs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"定义外联的-wxs-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义外联的-wxs-脚本"}},[t._v("#")]),t._v(" 定义外联的 wxs 脚本")]),t._v(" "),a("p",[a("code",[t._v("wxs")]),t._v(" 代码还可以编写在以 "),a("code",[t._v(".wxs")]),t._v(" 为后缀名的文件内，就像 "),a("code",[t._v("javascript")]),t._v(" 代码可以编写在以 "),a("code",[t._v(".js")]),t._v(" 为后缀名的文件中一样。")]),t._v(" "),a("p",[t._v("示例代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLower")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toLowerCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("toLower")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" toLower\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"使用外联的-wxs-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用外联的-wxs-脚本"}},[t._v("#")]),t._v(" 使用外联的 wxs 脚本")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("wxml")]),t._v(" 中引入外联的 "),a("code",[t._v("wxs")]),t._v(" 脚本时，必须为"),a("code",[t._v("<wxs>")]),t._v("标签添加 "),a("code",[t._v("module")]),t._v(" 和 "),a("code",[t._v("src")]),t._v(" 属性，其中：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("module")]),t._v(" 用来指定模块的名称")]),t._v(" "),a("li",[a("code",[t._v("src")]),t._v(" 用来指定要引入的脚本的路径，且必须是相对路径")])]),t._v(" "),a("p",[t._v("示例代码如下：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{m2.toLower(country)}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wxs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../../utils/tools.wxs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("m2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("wxs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WXS注意事项")]),t._v(" "),a("ol",[a("li",[t._v("为了降低 wxs（WeiXin Script）的学习成本， wxs 语言在设计时借大量鉴了 JavaScript 的语法。但是本质上，wxs 和JavaScript 是完全不同的两种语言！")]),t._v(" "),a("li",[t._v("wxs 典型的应用场景就是“过滤器”，经常配合 Mustache 语法进行使用")]),t._v(" "),a("li",[t._v("但是，在 wxs 中定义的函数不能作为组件的事件回调函数。")])])]),t._v(" "),a("h3",{attrs:{id:"wxs-的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wxs-的特点"}},[t._v("#")]),t._v(" WXS 的特点")]),t._v(" "),a("h4",{attrs:{id:"隔离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔离性"}},[t._v("#")]),t._v(" 隔离性")]),t._v(" "),a("p",[t._v("隔离性指的是 wxs 的运行环境和其他 JavaScript 代码是隔离的。体现在如下两方面：")]),t._v(" "),a("ul",[a("li",[t._v("wxs 不能调用 js 中定义的函数")]),t._v(" "),a("li",[t._v("wxs 不能调用小程序提供的 AP")])]),t._v(" "),a("h4",{attrs:{id:"性能好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能好"}},[t._v("#")]),t._v(" 性能好")]),t._v(" "),a("ul",[a("li",[t._v("在iOS 设备上，小程序内的 WXS 会比 JavaScript 代码快2 ~ 20 倍")]),t._v(" "),a("li",[t._v("在android 设备上，二者的运行效率无差异")])]),t._v(" "),a("h2",{attrs:{id:"判断是否还有下一页数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断是否还有下一页数据"}},[t._v("#")]),t._v(" 判断是否还有下一页数据")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("如果下面的公式成立，则证明没有下一页数据了：\n页码值 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 每页显示多少条数据 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" 总数据条数\npage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pageSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" total\n\n案例"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("：总共有 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("77")]),t._v(" 条数据，如果每页显示 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" 条数据，则总共分为 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" 页，其中第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" 页只有 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" 条数据\npage（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pageSize（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" total（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("77")]),t._v("）page（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pageSize（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" total（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("77")]),t._v("）\n\n案例"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("：总共有 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" 条数据，如果每页显示 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" 条数据，则总共分为 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" 页，其中第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" 页面有 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" 条数据\npage（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pageSize（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" total（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("）\npage（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" pageSize（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("）"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" total（"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("）\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);