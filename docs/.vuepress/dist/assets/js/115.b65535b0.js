(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1634:function(s,t,a){"use strict";a.r(t);var n=a(36),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"css文件划分及功能分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css文件划分及功能分类"}},[s._v("#")]),s._v(" CSS文件划分及功能分类")]),s._v(" "),n("h2",{attrs:{id:"css文件划分"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css文件划分"}},[s._v("#")]),s._v(" CSS文件划分")]),s._v(" "),n("p",[s._v("  在中大型项目中，一般会对CSS进行文件划分，根据文件的性质与用途，大概会分成：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("公共型样式")])]),s._v(" "),n("li",[n("strong",[s._v("特殊型样式")])]),s._v(" "),n("li",[n("strong",[s._v("皮肤型样式")])])]),s._v(" "),n("p",[s._v("  公共型样式可命名为global.css或common.css等名字，主要包括网站通用样式编写，例如：重置默认样式reset、网站通用布局、通用模块和元件、通用响应式系统等。")]),s._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 重置样式 */")]),s._v("\n省略css代码...\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 网站通用布局 */")]),s._v("\n省略css代码...\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 通用模块 */")]),s._v("\n省略css代码...\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 通用元件 */")]),s._v("\n省略css代码...\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 通用响应式系统 */")]),s._v("\n省略css代码...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("  特殊型样式主要是根据当前页面来决定的文件，只针对当前页面做出特殊处理的样式，例如只在首页中用到的样式可放置到index.css中，在登录页中用到的样式可放置到login.css中。")]),s._v(" "),n("p",[s._v("  皮肤型样式是针对网站需要皮肤功能时，把颜色、背景等抽离出来放到文件中的形式，例如theme-pink.css、theme-skyblue.css等。")]),s._v(" "),n("p",[s._v("  CSS文件的引入顺序如下：")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("assets/css/global.css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("text/css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("assets/css/index.css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("text/css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("assets/css/theme.css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("text/css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"css功能分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css功能分类"}},[s._v("#")]),s._v(" CSS功能分类")]),s._v(" "),n("p",[s._v("  上面提到了公共型样式，在文件中具体包括哪些常见的功能呢？大概可分为如下几类：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("重置样式")])]),s._v(" "),n("li",[n("strong",[s._v("网站通用布局")])]),s._v(" "),n("li",[n("strong",[s._v("通用模块")])]),s._v(" "),n("li",[n("strong",[s._v("通用元件")])]),s._v(" "),n("li",[n("strong",[s._v("通用响应式系统")])])]),s._v(" "),n("p",[s._v("  重置样式在前面章节中有介绍过，主要是去除默认样式和统一不同设备下的表现形态。通常为Reset CSS代码和Normalize CSS代码的结合版本。在本套课程中已经把二者结合成为了一个reset.css文件，并在多个综合案例中进行使用过。")]),s._v(" "),n("p",[s._v("  网站通用布局主要指的是对网站中出现的大块结构进行排版。如：PC端中的菜单、内容的左右布局方案；移动端中的头部、列表、尾部的上中下布局方案等。")]),s._v(" "),n("div",{attrs:{align:"center"}},[n("img",{attrs:{src:a(695)}}),s._v(" "),n("div",[s._v("菜单、内容的左右布局")])]),s._v(" "),n("div",{attrs:{align:"center"}},[n("img",{attrs:{src:a(696)}}),s._v(" "),n("div",[s._v("头部、列表、尾部的上中下布局")])]),s._v(" "),n("p",[s._v("  通用模块指的是网页中可以重复使用的较大的整体，比如导航、登录、注册、各种列表、评论、搜索等。")]),s._v(" "),n("p",[s._v("  通用原件指的是不可再分的较为小巧的个体，通常被重复用于各种模块中，比如按钮、输入框、loading、图标等。")]),s._v(" "),n("p",[s._v("  通用响应式系统指的是在不同设备下要实现响应式布局，当满足了某个断点设定后调用的相应变化样式，比如浮动添加、栅格生效、显示隐藏、版心宽度等。")])])}),[],!1,null,null,null);t.default=e.exports},695:function(s,t,a){s.exports=a.p+"assets/img/8_2_1.ca9574fe.jpg"},696:function(s,t,a){s.exports=a.p+"assets/img/8_2_2.fcfc63a5.jpg"}}]);