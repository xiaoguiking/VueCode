*Vue Cli*

-  安装配置

    ```
    default(babel, eslint)

    Manually select features(选)


    Babel （选）

    TypeScript

    progressive Web App（PWA）Support

    Router （后期自己加）

    Vuex （后期自己加）

    Css Pre-processors-----less

    Linter/Formaterr （选）------ ESLint + Standard config 基础格式化-------- Lint on save----In dedicated config files

    Unit Testing

    E2E Testing
    ```
 

 ##   Vue 和 Express 实现迷你全栈电商应用(vue-shopping)

- [第一章](第一章)
    - [项目准备](###项目准备)
        - [安装依赖](####安装依赖)
        - [初始化项目](####初始化项目)
    - [脚手架代码](###脚手架代码)
        - [src/main.js](####src/main.js)
        - [初始化项目](####初始化项目) 

## 第一章

### 项目准备

#### 安装依赖

通过安装包安装Node.js包管理工具Npm，用于创建项目和下载第三方依赖包

打开终端，输入命令测试是否安装成功： 

```
node -v v10.15.0
npm -v 6.9.0

```

安装vue-cli并且测试是否安装成功（涉及降级处理）

```
 npm uninstall -g @vue/cli   卸载4.2版本
 npm install -g vue-cli     降级2.9.6版本
 vue -V 2.9.6    测试安装成功
```

#### 初始化项目

```
vue init webpack "vue-shopping"
```
```
安装过程一览
$ vue init webpack vue-shopping

? Project name vue-shopping
? Project description
? Author xiaoguiking <king1129371217@163.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) yarn

   vue-cli · Generated "vue-shopping".

```

当项目初始化成功之后，接下来通过如下命令开启项目：

```
cd vue-shopping && yarn start
```

打开浏览器，访问 http://localhost:8080/ 查看我们初始好的项目效果。

#### 脚手架代码

- src/main.js
- index.html
- src.App.vue
- src/router/index.js
- src/components/HelloWorld.vue


#### src/main.js

`src/main.js`是Vue应用的入口，通过导入`vue`类，`App`组件，`router`路由，加上`el`,将这些参数传给`Vue`类，生成一个Vue实例

```
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```


#### index.html

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>vue-shopping</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```

当我们启动项目之后，Vue所使用的webpack将会
- 根据入口文件`src/main.js`里面声明的el属性#app，找到index.html中id为app的DOM节点
- 把编译好的视图模板代码挂载到DOM节点下面
- 把项目涉及到的JavaScript和css代码以及script和link方式插入到index.html中
- 开启开发服务器，打开浏览器，进而浏览器将index.html渲染，然后看到Vue页面效果

#### src/App.vue

src/App.vue是Vue为我们提供的组件文件，使得我们可以是使用组件形式组织代码，并通过组件的组合构建任意规模的代码
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
App组件包括了三个部分的代码
- template (html)
- script (js)
- style (css)

```
后期代码涉及过大
我们需要把 script 和 style 抽成独立的 .js 和 .css 文件
<!-- ./src/App.vue -->
<template>
// other code
</template>
<script src="./app.js"></script>
<style src="./app.css"></style>

```


#### src/router/index.js
Vue提供的路由文件
```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

```
导出Vue类、Router类，已经HelloWorld组件
使用 Vue.use(Router) 告诉 Vue，我们应用接入了路由，在导出的路由实例中，通过routes数组定义了项目所有的页面，每个页面是类似{path， name, component}的对象，比如初始化生成的HelloWorld.vue是网站的首页(浏览器打开的第一个页面),
因为它的路径(path)定义为`/`,此外一个页面定义还需要name，代表此页面在vue-router中的标识符，component则代表此页面渲染时的所用到组件

```
import HelloWorld from '@/components/HelloWorld'
路径前面的"@",在webpack配置@将会映射成`resolve('src')`,
是我们项目目录下src的文件夹路径，
'@/components/HelloWorld'实际效果为'src/components/HelloWorld'
```

#### src/components/HelloWorld.vue
脚手架提供的一个实例组件
```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- 省略其他模板代码 ... -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

```
当我们打开浏览器地址为：`http://localhost:8080/`,此时路径为/,激活HelloWorld.vue组件，整个项目渲染App.vue内容
显示的解构为
- 一张Vue logo 图
- HelloWorld.vue组件内容


### 编写第一个Vue页面

编写电商应用首页

#### 编写页面组件
在src/components下创建Home.vue文件，编写代码
```
//html
<template>
    <div>
        <div class="title">
            <h1>{{msg}}</h1>
        </div>
    <div>
</template>
// js
<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Welcome to my Home.vue'
        }
    }
}
</script>
// style
<style scoped>
</style>
```
- 后续使用Element UI组件库
- 在script中引入的data，在template引入了插值语法{{var}},其中data是声明此组件的初始化数据，而{{var}}，插值语法是方便将数据渲染到视图模板中，这里将script中定义的data的msg插值到视图模板中，最终会渲染一个h1标签，标签内容为msg的内容

**插入路由**
src/router/index.js路由中将主页路由/所绑定的组件从默认的HelloWorld修改为刚才写的Home组件
```
```