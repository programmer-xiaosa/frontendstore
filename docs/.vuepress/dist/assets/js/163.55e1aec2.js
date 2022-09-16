(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1669:function(s,e,n){"use strict";n.r(e);var a=n(36),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_2-vue前端工程化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue前端工程化"}},[s._v("#")]),s._v(" 2.Vue前端工程化")]),s._v(" "),n("h2",{attrs:{id:"今日目标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#今日目标"}},[s._v("#")]),s._v(" 今日目标")]),s._v(" "),n("p",[s._v("1.能够了解模块化的相关规范\n2.了解webpack\n3.了解使用Vue单文件组件\n4.能够搭建Vue脚手架"),n("br"),s._v("\n5.掌握Element-UI的使用")]),s._v(" "),n("h2",{attrs:{id:"_1-模块化的分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-模块化的分类"}},[s._v("#")]),s._v(" 1.模块化的分类")]),s._v(" "),n("h3",{attrs:{id:"a-浏览器端的模块化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-浏览器端的模块化"}},[s._v("#")]),s._v(" A.浏览器端的模块化")]),s._v(" "),n("ul",[n("li",[n("ol",[n("li",[s._v("AMD(Asynchronous Module Definition,异步模块定义)\n代表产品为：Require.js")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[s._v("CMD(Common Module Definition,通用模块定义)\n代表产品为：Sea.js")])])])]),s._v(" "),n("h3",{attrs:{id:"b-服务器端的模块化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#b-服务器端的模块化"}},[s._v("#")]),s._v(" B.服务器端的模块化")]),s._v(" "),n("p",[s._v("服务器端的模块化规范是使用CommonJS规范：")]),s._v(" "),n("ul",[n("li",[n("ol",[n("li",[s._v("使用require引入其他模块或者包")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[s._v("使用exports或者module.exports导出模块成员")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[s._v("一个文件就是一个模块，都拥有独立的作用域")])])])]),s._v(" "),n("h3",{attrs:{id:"c-es6模块化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c-es6模块化"}},[s._v("#")]),s._v(" C.ES6模块化")]),s._v(" "),n("p",[s._v("ES6模块化规范中定义：")]),s._v(" "),n("ul",[n("li",[n("ol",[n("li",[s._v("每一个js文件都是独立的模块")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[s._v("导入模块成员使用import关键字")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[s._v("暴露模块成员使用export关键字")])])])]),s._v(" "),n("p",[s._v("小结：推荐使用ES6模块化，因为AMD，CMD局限使用与浏览器端，而CommonJS在服务器端使用。\nES6模块化是浏览器端和服务器端通用的规范.")]),s._v(" "),n("h2",{attrs:{id:"_2-在nodejs中安装babel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-在nodejs中安装babel"}},[s._v("#")]),s._v(" 2.在NodeJS中安装babel")]),s._v(" "),n("h3",{attrs:{id:"a-安装babel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-安装babel"}},[s._v("#")]),s._v(" A.安装babel")]),s._v(" "),n("p",[s._v("打开终端，输入命令：npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node\n安装完毕之后，再次输入命令安装：npm install --save @babel/polyfill")]),s._v(" "),n("h3",{attrs:{id:"b-创建babel-config-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#b-创建babel-config-js"}},[s._v("#")]),s._v(" B.创建babel.config.js")]),s._v(" "),n("p",[s._v("在项目目录中创建babel.config.js文件。\n编辑js文件中的代码如下：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" presets "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@babel/env"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("targets")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("edge")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"17"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("firefox")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"60"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("chrome")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"67"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("safari")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11.1"')]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//暴露")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" presets "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"c-创建index-js文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c-创建index-js文件"}},[s._v("#")]),s._v(" C.创建index.js文件")]),s._v(" "),n("p",[s._v('在项目目录中创建index.js文件作为入口文件\n在index.js中输入需要执行的js代码，例如：\nconsole.log("ok");')]),s._v(" "),n("h3",{attrs:{id:"d-使用npx执行文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#d-使用npx执行文件"}},[s._v("#")]),s._v(" D.使用npx执行文件")]),s._v(" "),n("p",[s._v("打开终端，输入命令：npx babel-node ./index.js")]),s._v(" "),n("h2",{attrs:{id:"_3-设置默认导入-导出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-设置默认导入-导出"}},[s._v("#")]),s._v(" 3.设置默认导入/导出")]),s._v(" "),n("h3",{attrs:{id:"a-默认导出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-默认导出"}},[s._v("#")]),s._v(" A.默认导出")]),s._v(" "),n("p",[s._v("export default {\n成员A,\n成员B,\n.......\n},如下：\nlet num = 100;\nexport default{\nnum\n}")]),s._v(" "),n("h3",{attrs:{id:"b-默认导入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#b-默认导入"}},[s._v("#")]),s._v(" B.默认导入")]),s._v(" "),n("p",[s._v('import 接收名称 from "模块标识符"，如下：\nimport test from "./test.js"')]),s._v(" "),n("p",[s._v("注意：在一个模块中，只允许使用export default向外默认暴露一次成员，千万不要写多个export default。\n如果在一个模块中没有向外暴露成员，其他模块引入该模块时将会得到一个空对象")]),s._v(" "),n("h2",{attrs:{id:"_4-设置按需导入-导出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置按需导入-导出"}},[s._v("#")]),s._v(" 4.设置按需导入/导出")]),s._v(" "),n("h3",{attrs:{id:"a-按需导出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-按需导出"}},[s._v("#")]),s._v(" A.按需导出")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("998")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" myName "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jack"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("fn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"b-按需导入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#b-按需导入"}},[s._v("#")]),s._v(" B.按需导入")]),s._v(" "),n("p",[s._v('import { num,fn as printFn ,myName } from "./test.js"\n//同时导入默认导出的成员以及按需导入的成员\nimport test,{ num,fn as printFn ,myName } from "./test.js"\n注意：一个模块中既可以按需导入也可以默认导入，一个模块中既可以按需导出也可以默认导出')]),s._v(" "),n("h2",{attrs:{id:"_5-直接导入并执行代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-直接导入并执行代码"}},[s._v("#")]),s._v(" 5.直接导入并执行代码")]),s._v(" "),n("p",[s._v('import "./test2.js";')]),s._v(" "),n("h2",{attrs:{id:"_6-webpack的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-webpack的概念"}},[s._v("#")]),s._v(" 6.webpack的概念")]),s._v(" "),n("p",[s._v("webpack是一个流行的前端项目构建工具，可以解决目前web开发的困境。\nwebpack提供了模块化支持，代码压缩混淆，解决js兼容问题，性能优化等特性，提高了开发效率和项目的可维护性")]),s._v(" "),n("h2",{attrs:{id:"_7-webpack的基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-webpack的基本使用"}},[s._v("#")]),s._v(" 7.webpack的基本使用")]),s._v(" "),n("h3",{attrs:{id:"a-创建项目目录并初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-创建项目目录并初始化"}},[s._v("#")]),s._v(" A.创建项目目录并初始化")]),s._v(" "),n("p",[s._v("创建项目，并打开项目所在目录的终端，输入命令：\nnpm init -y")]),s._v(" "),n("h3",{attrs:{id:"b-创建首页及js文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#b-创建首页及js文件"}},[s._v("#")]),s._v(" B.创建首页及js文件")]),s._v(" "),n("p",[s._v("在项目目录中创建index.html页面，并初始化页面结构：在页面中摆放一个ul，ul里面放置几个li\n在项目目录中创建js文件夹，并在文件夹中创建index.js文件")]),s._v(" "),n("h3",{attrs:{id:"c-安装jquery"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#c-安装jquery"}},[s._v("#")]),s._v(" C.安装jQuery")]),s._v(" "),n("p",[s._v("打开项目目录终端，输入命令:\nnpm install jQuery -S")]),s._v(" "),n("h3",{attrs:{id:"d-导入jquery"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#d-导入jquery"}},[s._v("#")]),s._v(" D.导入jQuery")]),s._v(" "),n("p",[s._v('打开index.js文件，编写代码导入jQuery并实现功能：\nimport $ from "jquery";\n$(function(){\n$("li:odd").css("background","cyan");\n$("li:odd").css("background","pink");\n})\n注意：此时项目运行会有错误，因为import $ from "jquery";这句代码属于ES6的新语法代码，在浏览器中可能会存在兼容性问题\n所以我们需要webpack来帮助我们解决这个问题。')]),s._v(" "),n("h3",{attrs:{id:"e-安装webpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#e-安装webpack"}},[s._v("#")]),s._v(" E.安装webpack")]),s._v(" "),n("p",[s._v('1).打开项目目录终端，输入命令:\nnpm install webpack webpack-cli -D\n2).然后在项目根目录中，创建一个 webpack.config.js 的配置文件用来配置webpack\n在 webpack.config.js 文件中编写代码进行webpack配置，如下：\nmodule.exports = {\nmode:"development"//可以设置为development(开发模式)，production(发布模式)\n}\n补充：mode设置的是项目的编译模式。\n如果设置为development则表示项目处于开发阶段，不会进行压缩和混淆，打包速度会快一些\n如果设置为production则表示项目处于上线发布阶段，会进行压缩和混淆，打包速度会慢一些\n3).修改项目中的package.json文件添加运行脚本dev，如下：\n"scripts":{\n"dev":"webpack"\n}\n注意：scripts节点下的脚本，可以通过 npm run 运行，如：\n运行终端命令：npm run dev\n将会启动webpack进行项目打包\n4).运行dev命令进行项目打包，并在页面中引入项目打包生成的js文件\n打开项目目录终端，输入命令:\nnpm run dev\n等待webpack打包完毕之后，找到默认的dist路径中生成的main.js文件，将其引入到html页面中。\n浏览页面查看效果。')]),s._v(" "),n("h2",{attrs:{id:"_8-设置webpack的打包入口-出口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-设置webpack的打包入口-出口"}},[s._v("#")]),s._v(" 8.设置webpack的打包入口/出口")]),s._v(" "),n("p",[s._v('在webpack 4.x中，默认会将src/index.js 作为默认的打包入口js文件\n默认会将dist/main.js 作为默认的打包输出js文件\n如果不想使用默认的入口/出口js文件，我们可以通过改变 webpack.config.js 来设置入口/出口的js文件，如下：\nconst path = require("path");\nmodule.exports = {\nmode:"development",\n//设置入口文件路径\nentry: path.join(__dirname,"./src/xx.js"),\n//设置出口文件\noutput:{\n//设置路径\npath:path.join(__dirname,"./dist"),\n//设置文件名\nfilename:"res.js"\n}\n}')]),s._v(" "),n("h2",{attrs:{id:"_9-设置webpack的自动打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-设置webpack的自动打包"}},[s._v("#")]),s._v(" 9.设置webpack的自动打包")]),s._v(" "),n("p",[s._v('默认情况下，我们更改入口js文件的代码，需要重新运行命令打包webpack，才能生成出口的js文件\n那么每次都要重新执行命令打包，这是一个非常繁琐的事情，那么，自动打包可以解决这样繁琐的操作。\n实现自动打包功能的步骤如下：\nA.安装自动打包功能的包:webpack-dev-server\nnpm install webpack-dev-server -D\nB.修改package.json中的dev指令如下：\n"scripts":{\n"dev":"webpack-dev-server"\n}\nC.将引入的js文件路径更改为：'),n("script",{attrs:{src:"/bundle.js"}}),s._v("\nD.运行npm run dev，进行打包\nE.打开网址查看效果：http://localhost:8080")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("注意：webpack-dev-server自动打包的输出文件，默认放到了服务器的根目录中.\n")])])]),n("p",[s._v('补充：\n在自动打包完毕之后，默认打开服务器网页，实现方式就是打开package.json文件，修改dev命令：\n"dev": "webpack-dev-server --open --host 127.0.0.1 --port 9999"')]),s._v(" "),n("h2",{attrs:{id:"_10-配置html-webpack-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-配置html-webpack-plugin"}},[s._v("#")]),s._v(" 10.配置html-webpack-plugin")]),s._v(" "),n("p",[s._v('使用html-webpack-plugin 可以生成一个预览页面。\n因为当我们访问默认的 http://localhost:8080/的时候，看到的是一些文件和文件夹，想要查看我们的页面\n还需要点击文件夹点击文件才能查看，那么我们希望默认就能看到一个页面，而不是看到文件夹或者目录。\n实现默认预览页面功能的步骤如下：\nA.安装默认预览功能的包:html-webpack-plugin\nnpm install html-webpack-plugin -D\nB.修改webpack.config.js文件，如下：\n//导入包\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\n//创建对象\nconst htmlPlugin = new HtmlWebpackPlugin({\n//设置生成预览页面的模板文件\ntemplate:"./src/index.html",\n//设置生成的预览页面名称\nfilename:"index.html"\n})\nC.继续修改webpack.config.js文件，添加plugins信息：\nmodule.exports = {\n......\nplugins:[ htmlPlugin ]\n}')]),s._v(" "),n("h2",{attrs:{id:"_11-webpack中的加载器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-webpack中的加载器"}},[s._v("#")]),s._v(" 11.webpack中的加载器")]),s._v(" "),n("p",[s._v("通过loader打包非js模块：默认情况下，webpack只能打包js文件，如果想要打包非js文件，需要调用loader加载器才能打包\nloader加载器包含：\n1).less-loader\n2).sass-loader\n3).url-loader:打包处理css中与url路径有关的文件\n4).babel-loader:处理高级js语法的加载器\n5).postcss-loader\n6).css-loader,style-loader")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("注意：指定多个loader时的顺序是固定的，而调用loader的顺序是从后向前进行调用\n\nA.安装style-loader,css-loader来处理样式文件\n    1).安装包\n        npm install style-loader css-loader -D\n    2).配置规则：更改webpack.config.js的module中的rules数组\n    module.exports = {\n        ......\n        plugins:[ htmlPlugin ],\n        module : {\n            rules:[\n                {\n                    //test设置需要匹配的文件类型，支持正则\n                    test:/\\.css$/,\n                    //use表示该文件类型需要调用的loader\n                    use:['style-loader','css-loader']\n                }\n            ]\n        }\n    }\nB.安装less,less-loader处理less文件\n    1).安装包\n        npm install less-loader less -D\n    2).配置规则：更改webpack.config.js的module中的rules数组\n    module.exports = {\n        ......\n        plugins:[ htmlPlugin ],\n        module : {\n            rules:[\n                {\n                    //test设置需要匹配的文件类型，支持正则\n                    test:/\\.css$/,\n                    //use表示该文件类型需要调用的loader\n                    use:['style-loader','css-loader']\n                },\n                {\n                    test:/\\.less$/,\n                    use:['style-loader','css-loader','less-loader']\n                }\n            ]\n        }\n    }\nC.安装sass-loader,node-sass处理less文件\n    1).安装包\n        npm install sass-loader node-sass -D\n    2).配置规则：更改webpack.config.js的module中的rules数组\n    module.exports = {\n        ......\n        plugins:[ htmlPlugin ],\n        module : {\n            rules:[\n                {\n                    //test设置需要匹配的文件类型，支持正则\n                    test:/\\.css$/,\n                    //use表示该文件类型需要调用的loader\n                    use:['style-loader','css-loader']\n                },\n                {\n                    test:/\\.less$/,\n                    use:['style-loader','css-loader','less-loader']\n                },\n                {\n                    test:/\\.scss$/,\n                    use:['style-loader','css-loader','sass-loader']\n                }\n            ]\n        }\n    }\n\n    补充：安装sass-loader失败时，大部分情况是因为网络原因，详情参考：\n    https://segmentfault.com/a/1190000010984731?utm_source=tag-newest\n\nD.安装post-css自动添加css的兼容性前缀（-ie-,-webkit-）\n1).安装包\n    npm install postcss-loader autoprefixer -D\n2).在项目根目录创建并配置postcss.config.js文件\nconst autoprefixer = require(\"autoprefixer\");\nmodule.exports = {\n    plugins:[ autoprefixer ]\n}\n3).配置规则：更改webpack.config.js的module中的rules数组\nmodule.exports = {\n    ......\n    plugins:[ htmlPlugin ],\n    module : {\n        rules:[\n            {\n                //test设置需要匹配的文件类型，支持正则\n                test:/\\.css$/,\n                //use表示该文件类型需要调用的loader\n                use:['style-loader','css-loader','postcss-loader']\n            },\n            {\n                test:/\\.less$/,\n                use:['style-loader','css-loader','less-loader']\n            },\n            {\n                test:/\\.scss$/,\n                use:['style-loader','css-loader','sass-loader']\n            }\n        ]\n    }\n}\n\nE.打包样式表中的图片以及字体文件\n在样式表css中有时候会设置背景图片和设置字体文件，一样需要loader进行处理\n使用url-loader和file-loader来处理打包图片文件以及字体文件\n1).安装包\n    npm install url-loader file-loader -D\n2).配置规则：更改webpack.config.js的module中的rules数组\nmodule.exports = {\n    ......\n    plugins:[ htmlPlugin ],\n    module : {\n        rules:[\n            {\n                //test设置需要匹配的文件类型，支持正则\n                test:/\\.css$/,\n                //use表示该文件类型需要调用的loader\n                use:['style-loader','css-loader']\n            },\n            {\n                test:/\\.less$/,\n                use:['style-loader','css-loader','less-loader']\n            },\n            {\n                test:/\\.scss$/,\n                use:['style-loader','css-loader','sass-loader']\n            },{\n                test:/\\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,\n                //limit用来设置字节数，只有小于limit值的图片，才会转换\n                //为base64图片\n                use:\"url-loader?limit=16940\"\n            }\n        ]\n    }\n}\n\nF.打包js文件中的高级语法：在编写js的时候，有时候我们会使用高版本的js语法\n有可能这些高版本的语法不被兼容，我们需要将之打包为兼容性的js代码\n我们需要安装babel系列的包\nA.安装babel转换器\n    npm install babel-loader @babel/core @babel/runtime -D\nB.安装babel语法插件包\n    npm install @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D\nC.在项目根目录创建并配置babel.config.js文件\n    \n    module.exports = {\n        presets:[\"@babel/preset-env\"],\n        plugins:[ \"@babel/plugin-transform-runtime\", \"@babel/plugin-proposal-class-properties\" ]\n    }\nD.配置规则：更改webpack.config.js的module中的rules数组\nmodule.exports = {\n    ......\n    plugins:[ htmlPlugin ],\n    module : {\n        rules:[\n            {\n                //test设置需要匹配的文件类型，支持正则\n                test:/\\.css$/,\n                //use表示该文件类型需要调用的loader\n                use:['style-loader','css-loader']\n            },\n            {\n                test:/\\.less$/,\n                use:['style-loader','css-loader','less-loader']\n            },\n            {\n                test:/\\.scss$/,\n                use:['style-loader','css-loader','sass-loader']\n            },{\n                test:/\\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,\n                //limit用来设置字节数，只有小于limit值的图片，才会转换\n                //为base64图片\n                use:\"url-loader?limit=16940\"\n            },{\n                test:/\\.js$/,\n                use:\"babel-loader\",\n                //exclude为排除项，意思是不要处理node_modules中的js文件\n                exclude:/node_modules/\n            }\n        ]\n    }\n}\n")])])]),n("h2",{attrs:{id:"_12-vue单文件组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-vue单文件组件"}},[s._v("#")]),s._v(" 12.Vue单文件组件")]),s._v(" "),n("p",[s._v("传统Vue组件的缺陷：\n全局定义的组件不能重名，字符串模板缺乏语法高亮，不支持css(当html和js组件化时，css没有参与其中)\n没有构建步骤限制，只能使用H5和ES5，不能使用预处理器（babel）\n解决方案：\n使用Vue单文件组件，每个单文件组件的后缀名都是.vue\n每一个Vue单文件组件都由三部分组成\n1).template组件组成的模板区域\n2).script组成的业务逻辑区域\n3).style样式区域")]),s._v(" "),n("p",[s._v("代码如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<template>\n\n    组件代码区域\n\n</template>\n\n<script>\n\n    js代码区域\n\n<\/script>\n\n<style scoped>\n\n    样式代码区域\n\n</style>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("补充：安装Vetur插件可以使得.vue文件中的代码高亮")]),s._v(" "),n("p",[s._v('配置.vue文件的加载器\nA.安装vue组件的加载器\nnpm install vue-loader vue-template-compiler -D\nB.配置规则：更改webpack.config.js的module中的rules数组\nconst VueLoaderPlugin = require("vue-loader/lib/plugin");\nconst vuePlugin = new VueLoaderPlugin();\nmodule.exports = {\n......\nplugins:[ htmlPlugin, vuePlugin  ],\nmodule : {\nrules:[\n...//其他规则\n{\ntest:/.vue$/,\nloader:"vue-loader",')]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("            }\n        ]\n    }\n}\n")])])]),n("h2",{attrs:{id:"_13-在webpack中使用vue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13-在webpack中使用vue"}},[s._v("#")]),s._v(" 13.在webpack中使用vue")]),s._v(" "),n("p",[s._v('上一节我们安装处理了vue单文件组件的加载器，想要让vue单文件组件能够使用，我们必须要安装vue\n并使用vue来引用vue单文件组件。\nA.安装Vue\nnpm install vue -S\nB.在index.js中引入vue：import Vue from "vue"\nC.创建Vue实例对象并指定el，最后使用render函数渲染单文件组件\nconst vm = new Vue({\nel:"#first",\nrender:h=>h(app)\n})')]),s._v(" "),n("h2",{attrs:{id:"_14-使用webpack打包发布项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_14-使用webpack打包发布项目"}},[s._v("#")]),s._v(" 14.使用webpack打包发布项目")]),s._v(" "),n("p",[s._v('在项目上线之前，我们需要将整个项目打包并发布。\nA.配置package.json\n"scripts":{\n"dev":"webpack-dev-server",\n"build":"webpack -p"\n}\nB.在项目打包之前，可以将dist目录删除，生成全新的dist目录')]),s._v(" "),n("h2",{attrs:{id:"_15-vue脚手架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_15-vue脚手架"}},[s._v("#")]),s._v(" 15.Vue脚手架")]),s._v(" "),n("p",[s._v("Vue脚手架可以快速生成Vue项目基础的架构。\nA.安装3.x版本的Vue脚手架：\nnpm install -g @vue/cli\nB.基于3.x版本的脚手架创建Vue项目：\n1).使用命令创建Vue项目\n命令：vue create my-project\n选择Manually select features(选择特性以创建项目)\n勾选特性可以用空格进行勾选。\n是否选用历史模式的路由：n\nESLint选择：ESLint + Standard config\n何时进行ESLint语法校验：Lint on save\nbabel，postcss等配置文件如何放置：In dedicated config files(单独使用文件进行配置)\n是否保存为模板：n\n使用哪个工具安装包：npm\n2).基于ui界面创建Vue项目\n命令：vue ui\n在自动打开的创建项目网页中配置项目信息。\n3).基于2.x的旧模板，创建Vue项目\nnpm install -g @vue/cli-init\nvue init webpack my-project")]),s._v(" "),n("p",[s._v("C.分析Vue脚手架生成的项目结构\nnode_modules:依赖包目录\npublic：静态资源目录\nsrc：源码目录\nsrc/assets:资源目录\nsrc/components：组件目录\nsrc/views:视图组件目录\nsrc/App.vue:根组件\nsrc/main.js:入口js\nsrc/router.js:路由js\nbabel.config.js:babel配置文件\n.eslintrc.js:")]),s._v(" "),n("h2",{attrs:{id:"_16-vue脚手架的自定义配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_16-vue脚手架的自定义配置"}},[s._v("#")]),s._v(" 16.Vue脚手架的自定义配置")]),s._v(" "),n("p",[s._v('A.通过 package.json 进行配置 [不推荐使用]\n"vue":{\n"devServer":{\n"port":"9990",\n"open":true\n}\n}\nB.通过单独的配置文件进行配置，创建vue.config.js\nmodule.exports = {\ndevServer:{\nport:8888,\nopen:true\n}\n}')]),s._v(" "),n("h2",{attrs:{id:"_17-element-ui的基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_17-element-ui的基本使用"}},[s._v("#")]),s._v(" 17.Element-UI的基本使用")]),s._v(" "),n("p",[s._v('Element-UI:一套基于2.0的桌面端组件库\n官网地址：http://element-cn.eleme.io/#/zh-CN\nA.安装：\nnpm install element-ui -S\nB.导入使用：\nimport ElementUI from "element-ui";\nimport "element-ui/lib/theme-chalk/index.css";')]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("Vue.use(ElementUI)\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);