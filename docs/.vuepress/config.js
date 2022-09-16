/*
 * @Author: Musa Tabitay
 * @Date: 2022-02-25 19:15:24
 * @LastEditTime: 2022-03-15 23:45:48
 */
const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: '程序猿小萨',
  description: '学的不仅是技术，更是梦想',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'icon', href: '/logo.jpg' }],
    ['link', { rel: 'stylesheet', href: '/css/style.css' }],
    ['link', { rel: 'stylesheet', href: '/styles/style.css' }],
  ],
  base: '/my-blog/',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  themeConfig: {
    logo: '/img/logo.png',
    nav,
    sidebar,
    sidebarDepth: 2,
    lastUpdated: '最近更新时间',
    search: true,
    searchMaxSuggestions: 50,
    // algolia: {
    //   // apiKey: '<API_KEY>',
    //   // indexName: '<INDEX_NAME>',
    //   // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    //   appId: 'BH4D9OD16A',
    // },
    repo: 'https://gitee.com/qarabala/my-blog',
    repoLabel: '源码',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '在 Gitee 上编辑此页',
    smoothScroll: true,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
  },
  plugins: [
    // ['vuepress-plugin-code-copy', true], 
    ['@vuepress/back-to-top'], 
    ['@vuepress/medium-zoom'],
    'demo-block'
  ]
}
