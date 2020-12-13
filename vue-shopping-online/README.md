# vue-shopping-online

## (三)

> 解决跨域

```
根目录创建vue.config.js
module.exports = {
  devServer: {
    proxy: { // 配置跨域
      '/api': {
        target: 'http://localhost:3000', // 这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false
}

axios:
      axios.get('/api/v1/products').then(response => {
        console.log(response, 'response')
        commit('ALL_PRODUCTS_SUCCESS', {
          products: response.data
        })
      })
```

### 用模板语法和双向绑定实现数据的添加

## (四) Vuex 进行状态管理

> yarn add vuex
> vee-validate 表單插件

## (五--1) 使用 Vuex Getters 复用本地数据获取逻辑

```text
Vuex允许我们在 store 中定义“getter”（可以认为是 store的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
```

- 属性访问`this.$store.getter.allProducts`

  ```--js
  allProducts(state) {
    return state.products;
  }

  ```

- 方法访问 `this.$store.getter.productById(id)`

  ```--js
   productById: (state, getters) => id => {
     return state.product
   }
   // state 表示本地数据源
  ```

## (六)

### (1 抽出 Getters 和 Mutations 逻辑)

### (2 抽出 Actions 逻辑)

- 封装展示商品信息的表单组件 ProductForm

### (3 干掉 mutation-types 硬编码

)
