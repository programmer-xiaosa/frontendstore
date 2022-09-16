# 移动web开发vw布局

+ [移动端vm适配方案](https://www.cnblogs.com/haoqiyouyu/p/14788137.html)
+ [将px单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件](https://github.com/evrone/postcss-px-to-viewport)
+ [使用viewport中的vm来适配移动端页面](https://www.jianshu.com/p/35e81bb5c997)
+ [第三代移动端布局方案](https://juejin.cn/post/6844903817645916173)
+ [vw相比rem，在实际开发中究竟有多大区别？](https://www.zhihu.com/question/37179916)

## B站首页实战

> 使用移动端vm布局来开发的，请在手机上看效果或者copy代码在编辑器中打开调式模式看下效果

<div>
  <img src="./images/bili.jpg" width="300">
</div>

```html
<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./iconfont/iconfont.css">
  <link rel="stylesheet" href="./css/reset.css">
  <style>
    a {
      color: #4c514d;
    }

    .head {
      height: 11.733vw;
      display: flex;
      align-items: center;
      padding: 0 2.667vw;
    }

    .head-logo {
      margin-left: 2.133vw;
      /* 这里注意点：
        如果margin-right:auto的话剩余空间默认分给右边，这样右边元素往右挤过去
        这也是做左右排列的一种方式，重要点
      */
      margin-right: auto;
    }

    .head-logo i {
      font-size: 7.467vw;
      color: #f47296;
    }

    .head-search i {
      font-size: 5.867vw;
      color: #c9c9c9;
    }

    .head-login {
      width: 6.4vw;
      height: 6.4vw;
      line-height: 6.4vw;
      margin-left: 5.333vw;
      background: #e8e8e8;
      font-size: 3.2vw;
      border-radius: 50%;
      padding: 1.333vw;
    }

    .head-login a {
      color: #f47296;
    }

    .head-app {
      margin-right: 0.533vw;
      margin-left: 5.333vw;
      background: #f47296;
      border-radius: 1.067vw;
      padding: 1.333vw 2.667vw;
    }

    .head-app a {
      color: #fffefc;
    }

    .nav {
      height: 10.667vw;
      border-bottom: 0.133vw solid #f3f3f3;
      padding: 0 2.667vw;
      position: relative;
    }

    .nav-list {
      height: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .nav-list li {
      width: 10.667vw;
      margin-right: 5.333vw;
      flex-shrink: 0;
      text-align: center;
      position: relative;
    }

    .nav-list li.active a {
      color: #f47296;
    }

    .nav-list li.active::after {
      content: "";
      position: absolute;
      width: 11.733vw;
      height: 0.533vw;
      background: #f47296;
      bottom: -2.667vw;
      left: -0.533vw;
    }

    .nav-arrow {
      position: absolute;
      right: 0;
      top: 0;
      width: 10.667vw;
      height: 100%;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .video {
      padding: 2.133vw 2.667vw;
      display: grid;
      /* grid-template-columns: 1fr 1fr; */
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2.667vw;
    } 

    .video-item-pic {
      display: grid;
    }

    .video-item-pic img {
      grid-area: 1/1/1/1;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.8vw;
    }

    .video-item-pic span {
      grid-area: 1/1/1/1;
      align-self: flex-end;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.533vw;
    }

    .video-item-pic i {
      margin-right: 1.333vw;
    }

    .video-item-title {
      margin-top: 1.867vw;
      margin-bottom: 4vw;
      font-size: 3.2vw;
      line-height: 4.267vw;
    }
  </style>
</head>

<body>
  <div class="head">
    <div class="head-logo">
      <i class="iconfont icon-BILIBILI_LOGO"></i>
    </div>
    <div class="head-search">
      <i class="iconfont icon-fangdajing"></i>
    </div>
    <div class="head-login">
      <a href="#">登录</a>
    </div>
    <div class="head-app">
      <a href="#">下载 App</a>
    </div>
  </div>

  <div class="nav">
    <ul class="nav-list">
      <li class="active">
        <a href="#">首页</a>
      </li>
      <li>
        <a href="#">动画</a>
      </li>
      <li>
        <a href="#">番剧</a>
      </li>
      <li>
        <a href="#">国创</a>
      </li>
      <li>
        <a href="#">音乐</a>
      </li>
      <li>
        <a href="#">首页</a>
      </li>
      <li>
        <a href="#">动画</a>
      </li>
      <li>
        <a href="#">番剧</a>
      </li>
      <li>
        <a href="#">国创</a>
      </li>
      <li>
        <a href="#">音乐</a>
      </li>
    </ul>
    <div class="nav-arrow">
      <i class="iconfont icon-arrow-bottom"></i>
    </div>
  </div>

  <ul class="video">
    <li class="video-item">
      <div class="video-item-pic">
        <img src="http://contentcms-bj.cdn.bcebos.com/cmspic/6eaed43877ed2ff52ee0cb95f1a251a0.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362" alt="">
        <span>
          <span>
            <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
            73.7万
          </span>
          <span>
            <i class="iconfont icon-xinxi"></i>
            5591
          </span>
        </span>
      </div>
      <h3 class="video-item-title">
        <a href="#">测试标题测试标题</a>
      </h3>
    </li>
    <li class="video-item">
      <div class="video-item-pic">
        <img src="http://contentcms-bj.cdn.bcebos.com/cmspic/cdfcb87a9dc76226cb0d4edde853ff8e.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362" alt="">
        <span>
          <span>
            <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
            73.7万
          </span>
          <span>
            <i class="iconfont icon-xinxi"></i>
            5591
          </span>
        </span>
      </div>
      <h3 class="video-item-title">
        <a href="#">测试标题测试标题</a>
      </h3>
    </li>
    <li class="video-item">
      <div class="video-item-pic">
        <img src="http://contentcms-bj.cdn.bcebos.com/cmspic/21b00c6d02e23d5d70c12bbc721e6ae9.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362" alt="">
        <span>
          <span>
            <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
            73.7万
          </span>
          <span>
            <i class="iconfont icon-xinxi"></i>
            5591
          </span>
        </span>
      </div>
      <h3 class="video-item-title">
        <a href="#">测试标题测试标题</a>
      </h3>
    </li>
    <li class="video-item">
      <div class="video-item-pic">
        <img src="http://contentcms-bj.cdn.bcebos.com/cmspic/6eaed43877ed2ff52ee0cb95f1a251a0.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362" alt="">
        <span>
          <span>
            <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
            73.7万
          </span>
          <span>
            <i class="iconfont icon-xinxi"></i>
            5591
          </span>
        </span>
      </div>
      <h3 class="video-item-title">
        <a href="#">测试标题测试标题</a>
      </h3>
    </li>
    <li class="video-item">
      <div class="video-item-pic">
        <img src="http://contentcms-bj.cdn.bcebos.com/cmspic/6eaed43877ed2ff52ee0cb95f1a251a0.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362" alt="">
        <span>
          <span>
            <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
            73.7万
          </span>
          <span>
            <i class="iconfont icon-xinxi"></i>
            5591
          </span>
        </span>
      </div>
      <h3 class="video-item-title">
        <a href="#">测试标题测试标题测试标题测试标题测试标题测试标题</a>
      </h3>
    </li>
    <li class="video-item">
      <div class="video-item-pic">
        <img src="http://contentcms-bj.cdn.bcebos.com/cmspic/6eaed43877ed2ff52ee0cb95f1a251a0.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362" alt="">
        <span>
          <span>
            <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
            73.7万
          </span>
          <span>
            <i class="iconfont icon-xinxi"></i>
            5591
          </span>
        </span>
      </div>
      <h3 class="video-item-title">
        <a href="#">测试标题测试标题</a>
      </h3>
    </li>
    <li class="video-item">
      <div class="video-item-pic">
        <img src="http://contentcms-bj.cdn.bcebos.com/cmspic/21b00c6d02e23d5d70c12bbc721e6ae9.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362" alt="">
        <span>
          <span>
            <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
            73.7万
          </span>
          <span>
            <i class="iconfont icon-xinxi"></i>
            5591
          </span>
        </span>
      </div>
      <h3 class="video-item-title">
        <a href="#">测试标题测试标题</a>
      </h3>
    </li>
    <li class="video-item">
      <div class="video-item-pic">
        <img src="http://contentcms-bj.cdn.bcebos.com/cmspic/cdfcb87a9dc76226cb0d4edde853ff8e.jpeg?x-bce-process=image/crop,x_0,y_0,w_665,h_362" alt="">
        <span>
          <span>
            <i class="iconfont icon-703bofang-fangxing-xianxing"></i>
            73.7万
          </span>
          <span>
            <i class="iconfont icon-xinxi"></i>
            5591
          </span>
        </span>
      </div>
      <h3 class="video-item-title">
        <a href="#">测试标题测试标题</a>
      </h3>
    </li>
  </ul>
</body>

</html>
```