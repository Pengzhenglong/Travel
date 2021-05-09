---
title: Vue去哪儿项目环境搭建
index_img: /image/21.1.png
date: 2021-05-01 20:15:58
tags: 
- Vue
- 前端基础
categories:
- Vue项目实战
---


---

### 项目环境准备

1. 安装node
2. Gitee创建一个自己的仓库

![仓库](/image1/1.png)


3. git ssh本地免密

4. git  clone 项目到本地电脑

5. 全局安装vue-cli

![全局安装](/image1/2.png)

6. 项目初始化


![初始化项目](/image1/3.png)

7. 项目启动

npm  run  dev

![启动成功](/image1/4.png)

目录结构

```
readme              //项目的说明文件
package.json         //第三方依赖包配置
package.lock.json    //帮助我们去确定安装的第三方依赖包的具体的版本，保持团队编程的统一
license             //开源协议的说明
index.html          //项目默认的首页模版文件
.postcssrc.js        //对 postcss 的配置项
.gitignore          //不需要上传到 git 上的文件管理 
.eslintrc.js        //对写的代码检测是否标准做一个检测
.eslintignore       //配置不需要 eslintrc 检测工具检测的文件
.editorconfig       //配置编辑器总风格统一的自动化格式的语法
.babelrc            //项目写的代码是 Vue 的大文件组件的代码的写法，所以需要通过 babel 这种语法解析器做一些语法上的转换，最终转换成浏览器能够编译执行的代码，babel 需要做额外配置时，就放在文件里面
static                  //static 目录放的是静态资源，要用到的静态图片啊或者后续需要模拟的 json 数据
node_modules                 //项目中需要用到的第三方 node 包
src                         //放的是项目的源代码
src/main.js                  //整个项目的入口文件
src/app.vue                 //整个项目最原始的根组件
src/router/index.js          //项目的路由放置位置
src/components               //项目中要用到的小组件
src/assets                  //项目中需要用到的图片
config                      //放置项目配置文件
config/index.js              //放基础配置
config/dev.ent.js            //开发环境配置信息
config/prod.ent.js           //线上环境配置信息
build                      //放置项目打包的 webpack 配置信息，vue-cli 会自动构建
build/webpack.base.conf.js   //基础的 webpack 配置信息
build/webpack.dev.conf.js    //开发环境的 webpack 配置信息
build/webpack.prod.conf.js   //线上环境的 webpack 配置信息
```

###  项目代码初始化

由于做的是webapp，所以需要针对移动端，做相应的准备。

1.  meta标签相关设置

项目中的  index.html

```
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

效果：页面比例始终是1：1，用户通过手指操作缩放是无效的

2. 引入reset.css
目的：重置页面样式

因为在不同移动端、不同浏览器上页面的初始样式是不一样的，引入reset.css为了保证在每个浏览器上展示出的初始效果是一样的

3. 引入border.css

目的：解决移动端1像素边框问题  原因，不同手机上显示的像素不同(可能有二倍屏，多倍屏)


main.js中代码导入
```
import  fastClick  from  'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
```

4. 项目中安装fastclick

npm install fastclick --save

目的：解决移动端300ms延迟问题


移动端浏览器click事件为什么会有300ms的延迟呢？因为在手机上有个双击方案 —— 在手机上快速点击两下，实现页面放大；再次双击，恢复到原始比例。

那它是如何实现的呢？浏览器在捕捉到第一次点击事件后，会等待一段时间，如果在这段时间内，用户没有再次进行点击操作的话，就执行单击事件；如果用户进行了第二次点击操作的话，就会执行双击事件。这段等待的时间大约300ms。


5. Iconfont阿里巴巴矢量图标注册账号使用

### 单页应用与多页应用

![对比](/image1/5.png)

本项目页面采用的是单页页面

### 项目下方报error解决

问题：由于esLint校验导致报错或警告

![error](/image1/6.png)

解决

![注释](/image1/7.png)



---
title: Vue去哪儿项目首页开发&首页header区域
index_img: /image/21.1.png
date: 2021-05-02 20:15:58
tags: 
- Vue
- 前端基础
categories:
- Vue项目实战
---


---

###  首页header区域

1. 安装开发依赖包(项目目录下)
stylus：CSS的预处理框架，即将stylus转换为css使用       
stylus-loader：让webpack理解stylus
```
npm  install  stylus --save
npm  install  stylus-loader  --save
```

参考使用文章：
[『前端干货篇』：你不知道的Stylus](https://juejin.cn/post/6850037277675454478#heading-3)       
[张鑫旭大大的Stylus文章](www.zhangxinxu.com/jq/stylus/)


使用过程中报错：npm run dev后报错
Vue中使用Stylus报错：Module build failed: TypeError: this.getOptions is not a function

报错原因
stylus-loader版本过高，更改为stylus-loader@3.0.1即可

再次安装stylus
```
npm uninstall stylus stylus-loader //删除之前的loader
npm install stylus stylus-loader@3.0.1 --save-dev //再次安装
```

2. src\pages\home\components路径下新建一个Header.vue

页面组件化，对于Home这个页面可以被拆分成多个小组件，Header.vue可以放在compons中被使用

3. 引入组件使用

![使用组件](/image1/8.png)

4. Header.vue页面样式

```
<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩/主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
.header
  display:flex
  line-height: .86rem
  background #00bcd4
  color: #fff
  .header-left
    width .64rem
    float:left
  .header-input
     flex:1
     line-height:.64rem
     height: .64rem
     margin-top .12rem
     margin-left: .2rem
     background: #fff
     border-radius: .1rem
     color:#ccc
  .header-right
     width: 1.24rem
     float:right
     text-align:center
</style>

```

补充：`<style lang="stylus" scoped>`
我们写的这个组件不要对其他组件产生影响，使用scoped可以限制.header的样式只对当前组件有效，不对其他组件有影响
当` <style>` 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素。


完成效果：

![使用组件](/image1/9.png)

### iconfont的使用和代码优化

![iconfont下载使用](/image1/10.png)

1. 将以下文件放入项目静态资源中,这里我们修改一下引用路径

![资源引入](/image1/11.png)

1. 引入iconfont

由于我们几乎所有页面都要使用iconfont，所以我们可以在main.js中引用

```
import 'styles/iconfont.css'
```

3. 使用，这里的代码是Unicode编码

```
<div class="iconfont back-icon">&#xe624;</div>
<span class="iconfont">&#xe632;</span>
<span class="iconfont  arrow-cron">&#xe64a;</span>
```

css样式(省略)

4. 代码优化

整个Header背景色都是一个绿色的内容，我们这个网页很多地方都会用到这个背景色，我们可以将这个颜色单独放在一个变量中，然后单独的去引用。未来网站颜色风格需要切换，只需要去改变这一个变量，全局都会改变，这个可维护性会有很大的提升

解决：

全局变量文件

![全局变量文件](/image1/12.png)

引入使用：

![引入与使用](/image1/13.png)


5. 引入优化
   
起别名：

![起别名](/image1/14.png)

使用：

```
@import '~styles/varibles.styl';
```

这里我们修改了webpack中的配置项时，一定要重启项目，否者会报错



---
title: Vue去哪儿项目首页开发&首页轮播图&推荐组件开发
index_img: /image/21.1.png
date: 2021-05-02 21:15:58
tags: 
- Vue
- 前端基础
categories:
- Vue项目实战
---


---

### 首页轮播图

1. 第三方轮播插件使用

Github地址           
[vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)


安装：项目文件夹路径中,这里我们安装的是@2.6.7版本，其他版本可能兼容性等问题

```
npm install swiper vue-awesome-swiper@2.6.7 --save
```

2. 引用(这里我们引用到全局中，因为各个页面可能都会使用)

main.js

```
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

//这里我们使用这个版本
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
```


3. 使用

Swiper.vue
```
<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
// 样式穿透，不受scoped控制了
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff
.wrapper
    overflow hidden
    width:100%
    height:0
    padding-bottom :31.25%
    background  :#eee
    .swiper-img
        width:100%
</style>

```

####  占位
图片是可替代资源，在页面显然时，会先将页面中静态的内容渲染上去，等数据返回后，在进行重新渲染，这样页面就会出现抖动，影响用户体验，同时性能也比较低。

可以用下面的css代码对这些可替换资源先进行占位，页面大体框架在第一次渲染后就能呈现给用户，数据获取到后，替换相应的内容就可，就不会出现抖动了。
```
.icon-img
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 100%
```

![样式，可以滑动](/image1/15.png)


### 图标区域页面布局
新建一个组件
src\pages\home\components\Icons.vue

在Home.vue中引入并使用

icons.vue代码

```
<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" v-bind:src="item.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons  >>> .swiper-container
  width:100%
  height:0
  padding-bottom:50%
.icons
  margin-top:.1rem
  .icon
    position :relative
    overflow :hidden
    float:left
    width:25%
    height:0
    padding-bottom :25%
    .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding:.1rem
        .icon-img-content
            display:block
            margin 0 auto
            height:100%
    .icon-desc
       position :absolute
       left:0
       right:0
       bottom:0
       height:.44rem
       line-height :.44rem
       color:#darkTextColor
       text-align :center
       ellipsis()
</style>

```

![效果](/image1/17.png)


文字太长后面文字用....表示的Css样式
```
overflow :hidden 
white-space :nowrap 
text-overflow :ellipsis
```

由于这个样式很多地方都会用到，所以我们可以借助stylus的mixins.styl将它封装.

![封装](/image1/16.png)

使用：

导入
```
@import '~styles/mixins.styl';
```
css中使用
```
    .icon-desc
       ellipsis()
```

### 推荐组件开发

![效果](/image1/18.png)

新建一个组件
src\pages\home\components\Recommend.vue

在Home.vue中引入并使用

Recommend.vue代码

```
<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <ul>
      <li class="item  border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="" />

        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.title
    margin-top :.2rem
    line-height :.8rem
    background:#eee
    text-indent:.2rem
.item
    overflow: hidden
    display:flex
    height :1.9rem
    .item-img
       width 1.7rem
       height 1.7rem
       padding:.1rem
    .item-info
        flex:1
        padding:.1rem
        min-width:0
        .item-title
            line-height :.54rem
            font-size :.32rem
            ellipsis()
        .item-desc
            line-height :.4rem
            color:#ccc
            ellipsis()
        .item-button
            line-height :.44rem
            margin-top:.16rem
            background #ff9300
            padding:0 .2rem
            border radius 0.06rem
            color:#fff
</style>

```

### 周末游组件开发

![效果](/image1/19.png)

新建一个组件
src\pages\home\components\Weekend.vue

在Home.vue中引入并使用

Weekend.vue代码

```
<template>
  <div>
    <div class="title">
      周末去哪儿
    </div>
    <ul>
      <li class="item  border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-warpper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.title
    line-height :.8rem
    background:#eee
    text-indent:.2rem
.item-img-warpper
    overflow:hidden
    height:0
    padding-bottom :37.9%
.item-img
    width 100%
.item-info
    padding:.1rem
    .item-title
        line-height :.54rem
        font-size :.32rem
        ellipsis()
    .item-desc
        line-height :.4rem
        color:#ccc
        ellipsis()
</style>

```



---
title: Vue去哪儿项目&Ajax获取首页数据
index_img: /image/21.1.png
date: 2021-05-03 21:15:58
tags: 
- Vue
- 前端基础
categories:
- Vue项目实战
---


---


### Ajax获取首页数据--axios

1. 项目安装axios 

```
npm  install  axios --save
```

分析：首页由5个组件组成，每一个组件都有自己的数据，那么每个组件都发送一个ajax请求。如果这样做首页就会发送5个ajax请求，网站的性能会很低。

解决：Home.vue组件中发送ajax是最好的选择，这个组件获取ajax请求的数据传给每个子组件中，只用请求一次。

2. 引入axios

```
import axios from "axios";
```

3. 使用

```
//'/static/mock/index.json'
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    }
  },
  //mounted (载入后) 在el 被新创建的 vm.$el替换，并挂载到实例上去之后调用
  mounted() {
    this.getHomeInfo();
  }
```

这里我们的使用的是本地模拟的数据json文件,开发环境中使用转发机制

vue中提供了一个代理功能

![代理](/image1/20.png)


index.json

![本地json文件](/image1/21.png)


### 首页父子组件数据传递

Home.vue
```
<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.city = res.data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  //mounted (载入后) 在el 被新创建的 vm.$el替换，并挂载到实例上去之后调用
  mounted() {
    this.getHomeInfo();
  }
};
</script>

<style></style>

```

父组件给子组件传值     
使用props，父组件可以使用props向子组件传递数据。


1. Swiper.vue中小问题

默认显示的是最后一页的图片

分析：当页面还没接收数据的时候，也就是还没接收ajax获取的Array数组时，这时候接收的是外面获取的空数组。
解决

```
<swiper :options="swiperOptions" v-if="showSwiper">
```

```
<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true //能够循环滑动，false只能滑倒最后，或最前
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>
```



---
title: Vue去哪儿项目&城市选择页面&动态数据渲染
index_img: /image/21.1.png
date: 2021-05-04 21:15:58
tags: 
- Vue
- 前端基础
categories:
- Vue项目实战
---


---

### 城市选择页面路由配置

![城市页面路由配置](/image1/22.png)


1. 页面跳转

src\pages\home\components\Header.vue中 `router-link to="/city"`实现点击右上角页面跳转

```
<router-link to="/city">
    <div class="header-right">
    {{ this.city }}
    <span class="iconfont  arrow-cron">&#xe64a;</span>
    </div>
</router-link>
```

这里router-link会使字体颜色发生变化，这是因为router-link在div外层加了个a标签，我们可以给header-right加一个颜色color:#fff


2. src\pages\city\components\Header.vue代码实现

![城市页面Header实现代码](/image1/23.png)

```
<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
   position: relative
   overflow :hidden
   height: $headerHeight
   line-height :$headerHeight
   text-align:center
   color:#fff
   background :$bgColor
   font-size:.32rem
   .header-back
       top:0
       left:0
       position:absolute
       width 0.64rem
       text-align:center
       font-size :.4rem
       color:#fff
</style>

```

3. src\pages\city\City.vue引入使用上面的组件

```
<template>
  <div>
    <city-header></city-header>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
export default {
  name: "City",
  components: {
    CityHeader,
  },
}
```


### 搜索框布局

![城市页面搜索框样式](/image1/24.png)

src\pages\city\components\Search.vue代码实现

```
<template>
<div class="search">
    <input
    v-model="keyword"
    class="search-input"
    type="text"
    placeholder="输入城市名或拼音"
    />
</template>
<script>
export default {
  name: "CitySearch",
}</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .search
       height:0.72rem
       padding:0  .1rem
       background:$bgColor
       .search-input
           box-sizing:border-box
           width :100%
           height: 0.62rem
           padding:0 .1rem
           line-height :.62rem
           text-align :center
           border-radius: 0.06rem
           color:#666
      .search-content
          z-index:1
          overflow :hidden
          position:absolute
          top: 1.58rem
          right:0
          left:0
          bottom:0
          background:#eee
          .search-item
            line-height :.62rem
            padding-left :.2rem
            color:#666
            background:#fff
</style>
```

###  列表布局


![城市列表](/image1/25.png)

部分代码样式：
```
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title  border-topbottom">当前城市</div>
        <div class="buttom-list">
          <div class="buttom-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title  border-topbottom">热门城市</div>
        <div class="buttom-list">
          <div class="buttom-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title   border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item  border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  display:flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left
    width .64rem
    float:left
    .back-icon
      text-align:center
      font-size:.4rem
  .header-input
     flex:1
     line-height:.64rem
     height: .64rem
     margin-top: .12rem
     margin-left: .2rem
     padding-left:.2rem
     background: #fff
     border-radius: .1rem
     color:#ccc
  .header-right
     width: 1.24rem
     float:right
     text-align:center
     color:#fff
     .arrow-icon
       margin-left :-.04rem
       font-size :.24rem
</style>

```

![城市列表](/image1/25.png)


###  Better-scroll的使用及字母表布局

问题：列表布局中.list加了一个绝对定位和overflow:hidden这会导致页面是无法拖动的

解决：我们可以使用一个第三方的包Better-scroll

[Github地址](https://github.com/ustbhuangyi/better-scroll)

1. 安装

```
npm install better-scroll --save
```

2. 使用(符合这个dom结构)

BetterScroll的最常见应用场景是列表滚动。让我们看看它的HTML：
```
<div class="wrapper">
  <ul class="content">
    <li>...</li>
    <li>...</li>
    ...
  </ul>
  <!-- you can put some other DOMs here, it won't affect the scrolling
</div>
```

3. 具体使用

```
import Bscroll from "better-scroll";
```

```
  <div class="list" ref="wrapper">  //ref帮助我们获取该dom元素

   //生命周期函数，载入后
    mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
```

4. 效果：上拉与下拉能够实现，并且有弹性动画效果，非常流畅


#### 字母表布局

![右侧字母表布局](/image1/26.png)

1. 创建组件src\pages\city\components\Alphabet.vue

部分代码样式
```
<template>
  <ul class="list">
    <li  class="item"  >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .list
        display:flex
        flex-direction :column
        justify-content :center
        position:absolute
        top 1.58rem
        right 0
        bottom:0
        width 0.4rem
        .item
            text-align:center
            line-height :.4rem
            color:$bgColor
</style>
```

### 城市列表页面动态数据渲染

利用ajax获取数据

1. 准备好的本地模拟数据

![数据](/image1/27.png)

2. ajax请求一般我们会放在最外层组件中获取，这样一次就能够获取到所有组件需要的内容

src\pages\city\City.vue这里我们在City.vue中发送

```
<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handLetterChange"></city-alphabet>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityIngoSucc);
    },
    handleGetCityIngoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handLetterChange(letter) {
      // console.log(letter);
      this.letter = letter;
    }
  },
  // 存放数据
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  // 生命周期函数
  mounted() {
    this.getCityInfo();
  }
};
</script>
```

3. 父组件向子组件传数据

例：
```
<city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
```

4. 子组件通过props接收

```
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
```

5. v-for渲染数据

循环数组
```
<div class="buttom-wrapper" v-for="item of hot" :key="item.id">
<div class="button">{{ item.name }}</div>
</div>
```

循环对象(这里我们使用了二次循环)

```
<div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
  <div class="title   border-topbottom">{{ key }}</div>
  <div class="item-list">
    <div
      class="item  border-bottom"
      v-for="innerItem of item"
      :key="innerItem.id"
    >
      {{ innerItem.name }}
    </div>
  </div>
      </div>
```



---
title: Vue去哪儿项目&兄弟组件间联动&节流
index_img: /image/21.1.png
date: 2021-05-05 21:15:58
tags: 
- Vue
- 前端基础
categories:
- Vue项目实战
---


---

### 兄弟组件间联动(重要)
实现功能：点击城市列表页面右侧的字母，列表选项会滚动到对应的字母区域。

>兄弟组件的传值，可以通过 bus 总线的形式来传值。但是因为我们现在这个非父子组件比较简单，可以让 Alphabet.vue 组件将值传递给父组件 City.vue 组件，然后 City.vue 组件再将值转发给 List.vue 组件，这样就实现了兄弟组件的传值。【子组件给父组件，父组件再转给另一个子组件】。这样，在 Alphabet.vue 中点击右侧字母，会获取到对应的字母。


src\pages\city\components\Alphabet.vue

在循环的元素上加一个点击事件，例如 handleLetterClick，然后在 methods 中写这个事件方法：

```
<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
methods: {
    handleLetterClick(e) {
        this.$emit("change", e.target.innerHTML);
    }
}
</script>
```

首先在父组件 City.vue 里的 data 中定义一个 letter，默认值是空，在 handleLetterClick 方法中，当接受到外部传来的 letter 的时候，让 this.letter = letter。

City.vue部分代码

```
<city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
<city-alphabet :cities="cities" @change="handLetterChange"></city-alphabet>

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    handLetterChange(letter) {
      // console.log(letter);
      this.letter = letter;
    }
  },
  // 存放数据
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },

};
</script>
```

接下来，将父组件接收到的这个数据转发给子组件 List.vue，父组件是通过属性props向子组件传值的。

最后只需要把 letter 传递给子组件 List.vue 就可以了，在 City.vue 组件的模板 city-list 中通过 :letter="letter" 向子组件 List 传值，在 props 中接收这个 letter，并且验证类型为 String 类型。

List.vue

```
props: {
    hot: Array,
    cities: Object,
    letter: String
  }
```

这样就实现了兄弟组件的传值。

#### 【项目难点】

接下来要做的是，当 List.vue 发现 letter 有改变的时候，就需要让组件显示的列表项跟 letter 相同的首字母的列表项要显示出来，怎么做呢？

1. 这个时候就要借助一个侦听器，监听letter的变化；

better-scroll 给提供了这样一个接口，scroll.scorllToElement，如果 letter 不为空的时候，就调用 this.scroll.scrollToElement() 这个方法，可以让滚动区自动滚到某一个元素上，那么怎么传这个元素呢？在循环城市这一块中，给循环项加一个 ref 引用来获取当前 Dom 元素，等于 key，然后回到侦听器的 letter 中，定义一个 element，它就等于通过 ref 获取到的元素：

src\pages\city\components\List.vue

ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据
```
<div class="area" v-for="(item, key) of cities" :key="key" :ref="key">

watch: {
letter() {
    // console.log(this.letter);
    if (this.letter) {
    const element = this.$refs[this.letter][0];
    this.scroll.scrollToElement(element);
    }
}
}
```

这个时候就可以通过字母获取到对应的区域，然后把 element 传入 scrollToElement 里，注意，上边代码最后加了一个 [0]，这是因为如果不加，通过 ref 或的内容就是一个数组，这个数组里的第一个元素才是真正的 DOM 元素，这个时候，点击右侧字母表，就可以跳到对应的字母下的城市列表了。

点击跳转的功能实现了

2. 接下来再实现一下滑动右侧字母表，左侧城市列表切换的效果。

知识补充
```
touchstart事件：当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。

touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。

touchend事件：当手指从屏幕上离开的时候触发。

touchcancel事件：当系统停止跟踪触摸的时候触发。关于这个事件的确切出发时间，文档中并没有具体说明，咱们只能去猜测了。
```
src\pages\city\components\Alphabet.vue部分代码

思路：绑定三个新的事件， @touchstart @touchmove @touchend，然后定义一个标识位，    touchStatus: false,开始@touchstart=true,结束@touchend=false

首先我们要知道我们滑动的是第几个字母--思路：先获得A字母到顶部的高度，然后滑动后获得当前位置距离顶部的高度，做一个差值就能算出当前位置距离A的高度了，除以每个字母的高度就能得到当前是第几个字母了，然后去取对应的字母触发一个change事件给外部。

```
<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
//计算属性得到一个字母数组['A','B',......]
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
    };
  },
  methods: {
    handleLetterClick(e) {
      // console.log(e.target.innerText);
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        //startY 计算的是A的顶部距离上沿的距离  
        //HTMLElement.offsetTop 为只读属性，它返回当前元素相对于其 offsetParent 元素的顶部内边距的距离。
        const startY = this.$refs["A"][0].offsetTop;//74
        //clientY 事件属性clientY 事件属性返回当事件被触发时鼠标指针向对于浏览器页面（客户区）的垂直坐标。 客户区指的是当前窗口。
        const touchY = e.touches[0].clientY - 79;
        const index = Math.floor((touchY - startY) / 20); //20为每个字母的高度，index计算出来为每个字母的下标0，1，2，3，4...
        if (index >= 0 && index < this.letters.length) {
          this.$emit("change", this.letters[index]);
        }
      }

    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
```

### 列表切换性能优化

#### 节流
手指在城市字母表中滑动时，会触发无数次handleTouchMove这个函数，这就对性能影响很大。

函数节流：通过设定一个时间周期，只要在这个周期内函数就不执行。

实现方法：

```

      // if (this.touchStatus) {
      //   const startY = this.$refs["A"][0].offsetTop;
      //   const touchY = e.touches[0].clientY - 79;
      //   const index = Math.floor((touchY - startY) / 20); //20为每个字母的高度
      //   if (index >= 0 && index < this.letters.length) {
      //     this.$emit("change", this.letters[index]);
      //   }
      // }  
//节流   
handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20); //20为每个字母的高度
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
```

这里设置的周期是16ms，16ms这个代码只会执行一次，大大优化了性能



1. offsetTop的值是固定的，我们每一次去执行这个方法就会去运算一次，性能很低

解决： data()中 先定义startY: 0,分析：页面刚加载的时候，Alphabet.vue中什么都不会显示出来，当City.vue中ajax获取数据后，Citys的值才发生变化，Alphabet才被渲染出来。当往Alphabet中传入的数据发生变化时，Alphabet才会被重新渲染，当Alphabet重新渲染之后，updated() 这个生命周期就会被执行，这个时候页面已经展示了城市字母列表的所有内容，这个时候我们去计算offsetTop就可以了。
```
 data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
```







---
title: Vue去哪儿项目&搜索功能实现
index_img: /image/21.1.png
date: 2021-05-06 20:15:58
tags: 
- Vue
- 前端基础
categories:
- Vue项目实战
---


---

### 搜索功能实现

![效果图](/image1/28.png)

src\pages\city\components\Search.vue部分代码
```
<div class="search-content" ref="search" v-show="keyword">
<ul>
    <li
    class="search-item  border-bottom"
    v-for="item of list"
    :key="item.id"
    >
    {{ item.name }}
    </li>
    <li class="search-item  border-bottom" v-show="hasNoData">
    没有找到匹配数据
    </li>
</ul>
</div>

 .search-content
          z-index:1
          overflow :hidden
          position:absolute
          top: 1.58rem
          right:0
          left:0
          bottom:0
          background:#eee
          .search-item
            line-height :.62rem
            padding-left :.2rem
            color:#666
            background:#fff
```


```
<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
      <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li
            class="search-item  border-bottom"
            v-for="item of list"
            :key="item.id"
          >
            {{ item.name }}
          </li>
          <li class="search-item  border-bottom" v-show="hasNoData">
            没有找到匹配数据
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      //防抖节流函数
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>
```

【性能优化--节流】
函数节流：通过设定一个时间周期，只要在这个周期内函数就不执行。

【防抖】       
写一个侦听器 watch，在里边监听 keyword 的改变，考虑到性能优化，使用防抖的方式来实现，先在 data 中定义一个 timer 定时器，默认值为 null，然后在监听 keyword 的方法中，判断，当 timer 不为 null 时，清除这个定时器。下面写这个定时器的方法，当延时 100ms 的时候，箭头函数会被执行。



---
title: 使用Vuex的实现数据共享&localStorage&keep-alive
index_img: /image/21.1.png
date: 2021-05-07 20:15:58
tags: 
- Vue
- 前端基础
categories:
- Vue项目实战
---


---
###  使用Vuex的实现数据共享

需求：我们点击城市页时首页的城市也能改变

City.vue和Home.vue是没有一个共用的父级组价的，这样两个页面是没有一个共用的父级组件进行中转。方法一：使用Bus总线(比较麻烦)

方法二：Vuex(数据框架)
main.js引入store

```
import  store  from  './store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```


src\store\index.js 代码：
```
import Vue from 'vue'
import Vuex from 'vuex'
import  state  from  './state'
import  mutations from  './mutation'
Vue.use(Vuex)
export default  new  Vuex.Store({
    state,
    mutations
})
```
src\store\mutation.js
```
export default{
        changeCity(state,city){
            state.city=city
            try{
                localStorage.city=city
            }catch(e){}
    }
}
```
src\store\state.js

```
let  defaultCity  ='北京'
try{
    if(localStorage.city){
        defaultStatus=localStorage.city
    }
}catch(e){}
export  default{
        city: defaultCity

}
```

src\pages\city\components\List.vue使用部分代码其他页面修改同理

```
    <div class="button">{{ this.currentCity }}</div>
      <div
            class="item  border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>


<div class="button">{{ this.$store.state.city }}</div>
  methods: {
    handleCityClick(city) {
      this.$store.commit("changeCity", city); 
      //页面跳转--编程式导航push
      this.$router.push("/");
    }
  },
```

###  localStorage

刚开始在实现首页右上角城市定位显示的时候，src 目录下新建了一个 store 目录，存储了 Vuex 中的默认数据，city 直接设置成了“北京”，但是其实这样去写，是有问题的，点击城市，会改变这个 city，但是当页面刷新了，就又变回了北京。      

考虑到在真实的项目中，如果你这次选中了一个城市，下次再打开这个网页的时候，上次选的城市还应该在的，怎么解决这个问题呢？         

这时可以借助 HTML5 中提供了一个新的 api，叫做 localStorage，它可以实现本地存储，在这里也就是实现保存城市的功能。         

store/index.js中，这样去写代码，当用户尝试去改变城市的时候，我不但把 state 中的 city 改了，同时还去存一个 localStorage，直接写 localStorage.city = city 就可以了。然后让 stare 中 city 的默认值是 localStorage.city || "北京"，就可以了。也就是 city 的值我默认先去 localStorage 中取，如果取不到，才用默认的 “北京”。


store/index.js中，这样去写代码，当用户尝试去改变城市的时候，我不但把 state 中的 city 改了，同时还去存一个 localStorage，直接写 localStorage.city = city 就可以了。然后让 stare 中 city 的默认值是 localStorage.city || "北京"，就可以了。也就是 city 的值我默认先去 localStorage 中取，如果取不到，才用默认的 “北京”。

store/index.js
```
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        city: localStorage.city || "北京"
    },
    mutations: {
        changeCity(state, city) {
            state.city = city;
            localStorage.city = city;
        }
    }
})
```

这个时候打开页面，当用户选择一个城市，然后刷新页面，可以看到上次选择的城市还在。但是当使用 localStorage 的时候，建议在外层包裹一个 try{ }catch(e){ }，因为在某些浏览器，如果用户关闭了本地存储这样的功能，或者使用隐身模式，使用 localStorage 可能导致浏览器直接抛出异常，代码就运行不了了，为了避免这种问题，建议在外层加一个 try{ }catch(e){ }，怎么加呢？
       
先定义一个默认的 defaultCity 等于“北京”，然后写一个 try{ }catch(e){ }，这样写：如果有 localStorage.city，default.city 就等于 localStorage.city，下边 state 中的 city 就可以等于 defaultCity 了，同样在 mutations 的 changeCity 中也要写一个 try{ }catch(e)：

store/index.js
```
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let defaultCity = "北京"
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (e) { }

export default new Vuex.Store({
    state: {
        city: defaultCity
    },
    mutations: {
        changeCity(state, city) {
            state.city = city;
            try {
                localStorage.city = city;
            } catch (e) { }
        }
    }
})
```
现在我们看到 store/index.js 这个文件慢慢的变得复杂起来了，实际上，在真正的项目开发和之中，会做进一步的拆分，也就是把这个文件拆分为 State、Actions、Mutations，在 store 中创建一个文件叫 state.js（只存储公用数据），然后把设置默认数据的这块代码放进去，并通过 export 导出，内容就是在 index.js 中定义的 state 对象里的内容：代
码见上面方法二中：
      
这样，我们就将 vuex 的代码拆分成了 State、Actions、Mutations 这几个部分，未来它的维护性也会得到比较大的提高。

### keep-alive
使用 keep-alive 优化网页性能

当写完城市列表响应代码，启动服务，打开页面，这样看不存在什么问题，基本的一些业务逻辑都已经实现了，但是在控制台中打开 Network 网络这个选项，选择 XHR，当初次进入首页的时候，请求了一个 index.json 的文件，然后切换到列表页，又请求了一个 city.json，然后再回到首页，index.json 又请求了一次，再次去列表页，city.json 又请求了一次，也就是，每一次路由发生变化的时候，Ajax 都会重新的被发送。

![ajax](/image1/29.png)

思考是什么原因导致这样的问题呢，打开 Home.vue 首页这个组件，每一次打开这个首页的时候，都会被重新的渲染，所以 mounted 这个钩子就会被重新的执行，那么这个 Ajax 数据就会被重新获取，那么这么能让它只获取一次呢？

打开 main.js，可以看到入口组件是 App 这个组件，再打开 App.vue，router-view 显示的是当前地址所对应的内容，我们可以在外层包裹一个 keep-alive 的一个标签，他是 Vue 自带的一个标签，他的意思就是我的路由的内容被加载一次后，我就把路由中的内容放到内存之中，下一次再进入这个路由的时候，不需要重新渲染这个组件，去重新执行钩子函数，只要去内存里把以前的内容拿出来就可以。

![keep-alive](/image1/30.png)

这个时候，回到页面上，再打开 Network，进入到列表页，选择城市再返回首页，就不会再去加载 index.json 了，同样再进入列表页，也不会再去加载 city.json 了，他直接会从内存中调数据，而不会重新去法 Ajax 请求了。

![keep-alive](/image1/31.png)


这样还是存在逻辑上的问题的，当我在“北京”的时候，首页显示的是“北京”的内容，当切换为“上海”时，首页就应该显示“上海”的内容，所以城市发生改变的时候，首页还需要重新发一次 Ajax 请求，来获取不同城市的数据信息，我们对这一块做一个调整。

打开 Home.vue 组件，改一下 axios 请求地址这里，在他的后面带一个参数，让他等于 Vuex 中存的当前的城市，所以还需要在 Home.vue 组件中引用 Vuex，import { mapState } from "vuex"，然后再加一个计算属性：
```
computed:{
    ...mapState(['city'])
}
```

获取到城市对应的内容，然后就可以在发 Ajax 的时候，把 city 放在请求的参数里面：
```
axios.get("/api/index.json?city=" + this.city)
.then(this.getHomeInfoSucc);
```

这个时候，我们打开页面，可以看到请求参数里已经携带了当前的城市：

但是，例如当你切换了城市“桂林”，回到首页，并没有重新发 Ajax 请求，虽然上面的城市变成了“桂林”，但是底下的内容还是“北京”的内容，我们希望底下的内容跟着变，该怎么做呢？

当我们在 App.vue 中用了 keep-alive 的时候，这块的内容已经被缓存起来了，他直接取得是缓存里的数据，那如何去改变缓存里的数据呢？当你使用 keep-alive 的时候，组件中会多出一个生命周期函数 activted，

![active](/image1/32.png)

可以在 mounted 和 activated 两个生命周期函数下打印一些内容，到浏览器上看一下他俩的执行：
```
mounted() {
    console.log("mounted");
    this.getHomeInfo();
},
activated(){
    console.log("activted");
}
```
打开页面，可以看到，mounted 和 activated 都会执行，当切换了城市，再回到首页的时候，组件的 mounted 就不会执行了，就只有 activated 会被执行，那么我们借助 activated 这个生命周期函数就可以实现我们想要的功能了。

首先在页面被挂载的时候，也就是 mounted 中一定会去发一个 Ajax 请求，当页面重新被显示的时候，activated 一定会被重新的执行，那么我们就可以在页面每次重新显示的时候，可以判断当前页面上的城市和上次页面上显示的城市是否是相同的，如果不相同的，就再发一次 Ajax 请求。

先在 data 中设置一个数据 lastCity，默认值是空，接着当页面被挂载的时候，让它等于 this.city，对上一次的城市做一个保存：
```
mounted() {
    this.lastCity = this.city
    this.getHomeInfo();
}
```
当页面被重新激活的时候，我们在 activted 中这样写：

```
activated() {
    if(this.lastCity != this.city){
        this.lastCity = this.city
        this.getHomeInfo();
    }
}
```
如果上一次的城市 lastCity 不等于当前城市的时候，就重新发一个 Ajax 请求，直接调用上面 getHomeInfo 方法就可以了。当上次的 city 和这次的 city 不一样时，还需要让他等于这次的 city。回到页面上，可以看到当切换的城市和上次的城市一样时，Ajax 就不会请求 city.json 了，当不一样时，才会去请求 city.json。

回到代码里面，通过 activted 这样一个 keep-alive 新增的生命周期函数，结合 lastCity 这样一个临时缓存变量，就实现了首页代码性能优化的调整。

---
title: 详情页&对全局事件解绑&递归组件实现详情页
index_img: /image/21.1.png
date: 2021-05-08 21:15:58
tags: 
- Vue
- 前端基础
categories:
- Vue项目实战
---

[项目地址](https://gitee.com/Pengzhenglong/Travel)



---
###  详情页动态路由及banner布局

实现点击以下能够进入详情页

![点击进入详情页](/image1/34.png)

src\pages\home\components\Recommend.vue中router-link

```
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="/detail/ + item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="" />

        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
```

src\router\index.js路由配置

```
import  Detail  from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/city',
      name:'City',
      component:City
    },{
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ]
}) 

```

src\pages\detail\Detail.vue

```
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>
```

![实现效果](/image1/35.png)


#### 详情页对全局事件解绑
全局事件
详情页绑定了一个全局事件，当我在详情页面中滚动，这个样写没有问题，但是当我去到其他页面，在滚动时，你就会发现，刚刚你绑定在详情页中的滚动事件，在这个页面也被执行了，这肯定是有问题的。
       
其实在我们使用了keep-alive标签后，会有两个生命周期函数分别是：activated、deactivated

activated：页面展示的时候被执行        

deactivated：页面被隐藏或者页面即将被替换成新的页面时被执行           
```
activated () {
    window.addEventListener('scroll', this.handleScroll)
},
deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
}
```
这段代码是页面被展示的执行scroll，页面被隐藏的时候移除scroll事件


src\pages\detail\components\Header.vue部分代码
```
<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: 0
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    //绑定了一个scroll事件，一旦它被执行，this.handleScroll方法会被执行
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

```

### 递归组件实现详情页

递归组件的意思就是在组件自身调用组件自身。

数据 detail.json
```
{
  "ret": true,
  "data": {
    "sightName": "大连圣亚海洋世界(AAAA景区)",
    "bannerImg": "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg",
    "gallaryImgs": ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],
    "categoryList": [{
        "title": "成人票",
        "children": [{
          "title": "成人三馆联票",
          "children": [{
            "title": "成人三馆联票 - 某一连锁店销售"
          }]
        },{
          "title": "成人五馆联票"
        }]
      }, {
        "title": "学生票"
      }, {
        "title": "儿童票"
      }, {
        "title": "特惠票"
      }]
  }
}
```

src\pages\detail\components\List.vue

```
<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title  border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        //使用递归组件
        <detail-list :list="item.children"> </detail-list>
      </div>
    </div>
  </div>
</template>

<script>
import Detail from "../Detail.vue";
export default {
  components: { Detail },
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
.item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
.item-title
    line-height :.8rem
    font-size: 0.32rem
    padding : 0 .2rem
.item-children
    padding:0 .2rem
</style>

```

上面代码中，在 list-children 这个元素下，先做了一个判断，当 item.children 下有值的时候，调用一下自身，也就是 detail-list 这个组件，这个组件也是通过属性的形式，传一个 list，因为在 list.vue 中已经通过 props 接收到 list 了，而且外层已经循环过 list 了，现在要获取 list 下的 children 中的数据，所以直接让这个 list 属性等于 item.children 就可以了。因为数据存在层级关系，可以通过添加样式呈现出来，效果如下图：


![效果](/image1/36.png)


#### keep-alive不缓存
在Detail.vue页面中，当我点击了其他景点后，它也是不会发送请求的，那么Detail页面就不会重新渲染了。



可以使用keep-alive的exclude属性，给它默认设置为Detail，用途是每次进入Detail页面都会发送请求
```
<keep-alive exclude="Detail">   //使用 exclude 属性，可以设置不需要缓存的页面
   <router-view/>
</keep-alive>
```

#### 页面路由切换回到最顶部

![代码添加](/image1/37.png)

让页面切换后始终回到页面最顶部

```
scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
```

### 在项目中加入基础动画


让图片点击时有若影若现的效果

新建一个组件，通过插槽的方式传递
src\common\fade\FadeAnimation.vue

```
<template>
  <transition>
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: "FadeAnimation"
};
</script>
<style lang="stylus" scoped>
.v-enter, .v-leave-to
    opacity :0
.v-enter-activate, .v-leave-activate
  transition :opacity  .5s
</style>

```

src\pages\detail\components\Banner.vue中使用,部分代码

```
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary
    ></fade-animation>

    <script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/fade/FadeAnimation";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    FadeAnimation
  }
};
</script>
```

至此，项目基本完结...