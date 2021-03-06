_Vue Cli_

## 项目

- vue-shopping-online 前端项目
- vue-online-shop-backend 后端项目

##### 安装配置

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

## Vue 和 Express 实现迷你全栈电商应用(vue-shopping-online)

**技术栈**

- vue
- Express
- MongoDB

## 项目目录

- [第一章](第一章)
  - [项目准备](###项目准备)
    - [安装依赖](####安装依赖)
    - [初始化项目](####初始化项目)
  - [脚手架代码](###脚手架代码)
    - [src/main.js](####src/main.js)
    - [初始化项目](####初始化项目)
- [第二章](##第二章)

## 第一章

### 项目准备

#### 安装依赖

通过安装包安装 Node.js 包管理工具 Npm，用于创建项目和下载第三方依赖包

打开终端，输入命令测试是否安装成功：

```
node -v v10.15.0
npm -v 6.9.0

```

安装 vue-cli 并且测试是否安装成功（涉及降级处理）

```
 npm uninstall -g @vue/cli   卸载4.2版本
 npm install -g vue-cli     降级2.9.6版本
 vue -V 2.9.6    测试安装成功(因为github报漏洞)
 目前使用 @vue/cli 4.0.5
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
cd vue-shopping && yarn start (可以自己修改package.json命令)
```

打开浏览器，访问 http://localhost:8080/ 查看我们初始好的项目效果。

#### 脚手架创建的文件夹

- **eslint **: 代码校验，校验代码的格式是否正确，规范，控制缩进
- gitignore : git 忽略
- babel.config.js : 配置 es6
- package.json : 项目配置文件
- **readme.md **: 对当前项目进行一个解释
- vue.config.js : 这个是该项目的配置文件；比如配置 webpack，配置跨域都在这里配置
- **yarn.lock **: 和 package.json 有点类似
- eslintrc.js : eslint 配置文件
- src : 资源文件，咱们代码都是写在这个里面的
  - assets : 静态资源文件，一般放图片和一些 css
  - components : 组件，页面的一部分
  - router : 配置的路由
  - store : vuex 仓库
- **views **: 页面级组件
- **App.vue **: 只有一个，所有的组件的入口文件
- main.js : 是 webpack 打包的入口文件（可以在 main.js 配置一些全局的组件，filter 过滤器，或指令，全局的路由钩子函数）
- public : webpack 打包之后最后要插入到这个 HTML 文件中
- node_moduless : 安装的依赖模块
  **dist **: 文件夹是在 yarn build 产生的，是上线之前需要把当前整个项目进行打包之后的文件

#### 脚手架代码

- src/main.js
- index.html
- src.App.vue
- src/router/index.js
- src/components/HelloWorld.vue

#### src/main.js

`src/main.js`是 Vue 应用的入口，通过导入`vue`类，`App`组件，`router`路由，加上`el`,将这些参数传给`Vue`类，生成一个 Vue 实例

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

当我们启动项目之后，Vue 所使用的 webpack 将会

- 根据入口文件`src/main.js`里面声明的 el 属性#app，找到 index.html 中 id 为 app 的 DOM 节点
- 把编译好的视图模板代码挂载到 DOM 节点下面
- 把项目涉及到的 JavaScript 和 css 代码以及 script 和 link 方式插入到 index.html 中
- 开启开发服务器，打开浏览器，进而浏览器将 index.html 渲染，然后看到 Vue 页面效果

#### src/App.vue

src/App.vue 是 Vue 为我们提供的组件文件，使得我们可以是使用组件形式组织代码，并通过组件的组合构建任意规模的代码

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

App 组件包括了三个部分的代码

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

Vue 提供的路由文件

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

导出 Vue 类、Router 类，已经 HelloWorld 组件
使用 Vue.use(Router) 告诉 Vue，我们应用接入了路由，在导出的路由实例中，通过 routes 数组定义了项目所有的页面，每个页面是类似{path， name, component}的对象，比如初始化生成的 HelloWorld.vue 是网站的首页(浏览器打开的第一个页面),
因为它的路径(path)定义为`/`,此外一个页面定义还需要 name，代表此页面在 vue-router 中的标识符，component 则代表此页面渲染时的所用到组件

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

当我们打开浏览器地址为：`http://localhost:8080/`,此时路径为/,激活 HelloWorld.vue 组件，整个项目渲染 App.vue 内容
显示的解构为

- 一张 Vue logo 图
- HelloWorld.vue 组件内容

### 编写第一个 Vue 页面

编写电商应用首页

#### 编写页面组件

在 src/components 下创建 Home.vue 文件，编写代码

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

- 后续使用 Element UI 组件库
- 在 script 中引入的 data，在 template 引入了插值语法{{var}},其中 data 是声明此组件的初始化数据，而{{var}}，插值语法是方便将数据渲染到视图模板中，这里将 script 中定义的 data 的 msg 插值到视图模板中，最终会渲染一个 h1 标签，标签内容为 msg 的内容

**插入路由**
src/router/index.js 路由中将主页路由/所绑定的组件从默认的 HelloWorld 修改为刚才写的 Home 组件

```
import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]

})
```

### 使用路由进行多页面跳转

- 商品展示列表 Home.vue
- 商品详情 Detail.vue
- 购物车 Cart.vue
- 商品的后台管理页面 Admin.vue

现在我们先来实现商品展示列表、购物车和后台管理页面的模板内容。因为商品详情页后面将会使用组件进行复用，所以这里我们暂时先不创建。

#### 添加首页导航

```
// 修改App.vue
<template>
<div id="app">
    <nav>
        <div class="container">
            <ul class="nav__left">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/admin">Admin</router-link>
                </li>
                <li>
                    <router-link to="/cart">Cart</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <router-view />
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

#### 创建后台管理页面

`src/views/Admin.vue`

```
<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    <div>
  </div>
</template>
<script>
  export default {
      new: 'Admin',
      data () {
        return {
          msg: 'welcome to your Admin.vue'
        }
      }
  }
</script>
```

#### 创建购物车页面

`src/views/Cart.vue`

```
<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    <div>
  </div>
</template>
<script>
  export default {
      new: 'Admin',
      data () {
        return {
          msg: 'welcome to your Cart.vue'
        }
      }
  }
</script>
```

#### 将新页面导入路由

```
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Admin from '@/views/Admin'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})

```

### 使用嵌套路由和动态路由合理组织页面

#### 升级路由

- /create 创建新的商品
- /edit 编辑商品信息

```
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Cart from '@/views/Cart'

// Admin components
import Index from '@/views/admin/Index'
import New from '@/views/admin/New'
import Edit from '@/views/admin/Edit'
import Products from '@/views/admin/Products'

Vue.use(Router)

export default New Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name:  'Admin',
      component: Index,
      children: [
        {
          path: 'edit/:id',
          name: 'Edit',
          component： Edit
        },
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        }
      ],
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      }
    }
  ]
})

```

嵌套路由的用法是给需要归为一类的页面设置一个入口页面，然后把这一类页面都放到这个路由页面定义的`children`字段数组中。

Admin 类别下有四个组件

- 入口组件 Index， /admin
- 新建 New, /admin/new
- Products,
- 编辑 Edit， /admin/edit/:id (动态路由)

`edit:id` ----`动态路由`，即:id 会匹配任意字符串，用户访问`/admin/edit/<any-string>`都会激活 Edit 路由，从而渲染

#### 创建 Admin 子页面

- `src/pages/admin/Index.vue`

  ```
  <template>
    <div>
      <div class="admin-new">
        <div class="container">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <ul>
              <li>
                <router-link to="/admin"></router-link>
              </li>
              <li>
                <router-link to="/admin/new">New Products</router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  ```

  Index.vue 作为嵌套路由的入口文件，在其中会有`router-link`
  导向更深层次的路由

  `router-view`用渲染子路由组件，比如访问/admin/new 页面，，那么 router-view 部分会被替换成 New.vue 内容

- 创建 src/pages/admin/Edit.vue

  ```
  <template>
    <div>
      <div class="title">
        <h1>This is Admin/Edit/{{$route.params.id}}</h1>
      </div>
    </div>
  </template>
  ```

  用户访问/admin/edit/:id,渲染 Edit.vue 组件
  通过$route.params.id 方式获取到用户输入的：id 部分

  ```
  /admin/edit/123

  This is Admin/Edit/123
  ```

- 创建 src/pages/admin/New.vue
- 创建 src/pages/admin/Products.vue

## 第二章

### 项目准备

#### 初始化项目

使用 express-generator 脚手架来初始化我们的 Express 项目

```
npm install -g express-generator (全局安装)
```

打开终端，输入如下命令测试是否安装成功

```
express --version
4.16.1
```

初始化我们的 Express 项目

```
express vue-online-shop-backend
```

以下命令开启项目

```
cd vue-online-shop-backend && yarn
yarn start
```

通过打开浏览器 `http://localhost:3000/`看到初始化效果证明安装成功

#### 脚手架代码

通过 express-generator 脚手架初始化的项目代码中，主要的四个文件：

- app.js Express 应用主文件
- bin/www 用来开启服务的脚本
- routes/index.js 路由主文件
- view/index.ejs 主页的模板文件,这里只实现 API 数据接口

`app.js`代码

```
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```

开头是导入相关依赖，然后通过调用 express()初始化 express 实例,设置模板引擎为 ejs,以及模板引擎存放目录，然后是一系列中间件的加载使用，最后导出 express 实例，丢给 bin/www 脚本进行调用并启动服务器。

**routes/index.js 路由部分**
路由是我们 API 服务器的核心，我们对数据进行增删改查都需要访问特定的路由接口。

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

```

上面的代码中，首先导入 express，然后使用其属性方法生成一个 router 实例，接着定义 get 这一 http 方法处理以 GET 方法访问我们服务器地址为/时进行处理，最后导出我们的 index 路由。

API 服务器实际上就是通过 HTTP 的各种方法（POST、DELETE、PUT、GET 等）访问我们定义的路由，进而对数据库进行相应的增删改查操作以获取我们期望的数据。

#### 小结

- express-generator 脚手架为我们生成的上面四个文件
- 在 Express 中，一切皆中间件（Middlewares），我们通过组合中间件来处理复制的后端逻辑。
- 我们的 API 服务器实际上就是通过定义一系列路由，当以不同的 HTTP 方法访问这些路由接口时，对数据进行对应的增删改查操作。
- 虽然 Express 也可以通过模板引擎展示用户界面，但是由于我们的迷你电商应用的前端已经用 Vue 来实现了，所以不需要模板引擎。

### 接入 MongoDB 数据库（window 安装在 c 盘目录）

开启服务器

```
mongod(c盘目录下启动，看安装位置确定) 启动后不要关闭--- 命令行启动数据库命令

另起cmd： mongo         ------命令行操作数据库指令
浏览器打开测试 http://localhost:27017/
输入show dbs 测试

mac下启动(个人配置）
/usr/local/opt/mongodb/bin 
sudo ./mongod


```

> 问题点： 缺少数据库文件 c/data/db, 或者不是内部命令需要设置环境变量

安装 Mongoose 这个 npm 包

```
 yarn add mongoose
```

Mongoose 是 MongoDB 最流行的 ODM（Object Document Mapping，对象文档映射），使用起来要比底层的 MongoDB Node 驱动更方便。

`app.js`

```
const mongoose = require('mongoose');

// view engine setup code

// 连接数据库
mongoose.connect(`mongodb:localhost:27017/test);
```

### 允许资源跨域访问(CORS)

CORS 是用来限制此域名下的资源访问解决方案，当它关闭时候，另外一个域名访问此域名的下的资源会被拒绝，

`app.js`

```
// ...

// Database connection here
mongoose.connect(`mongodb://localhost:27017/test`);

// CORS config here
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

```

### 设计数据库的 Schemas 和 Models

在服务器中通过 mongoose 与 mongoDb 交互，需要定义 Schema 和 Model，通过他们告诉 mongoose 需要的数据结构和和对应的数据类型是什么。
`model/index.js`编写 schema

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name： String,
  image: String,
  price: Number,
  description: String,
  manufacturer: { type: ObjectId, ref: 'Manufacturer'}
})

const manufacturerSchema Schema({
  id: ObjectId,
  name: string,
});

const Product = model('Product', productsSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

model.exports = { Product, Manufacturer}
```

### 完成 API 路由

这里操作 manufacturer 的前五个路由的功能如下：

GET /manufacturers 获取所以的制造商（manufacturers）
GET /manufacturers/:id 获取单个制造商，这里 :id 代表动态路由，用于匹配任意字符串：/manufacturers/<any-string>。
POST /manufacturers 用户创建单个制造商
PUT /manufacturers/:id 用于修改单个制造商
DELETE /manufacturers/:id 用于删除单个制造商

对应的 product 的五个路由功能如下：

GET /products 获取所以的产商品（products）
GET /products/:id 获取单个商品，这里 :id 代表动态路由，用于匹配任意字符串：/products/<any-string>。
POST /products 用户创建单个商品
PUT /products/:id 用于修改单个商品
DELETE /products/:id 用于删除单个商品

###
