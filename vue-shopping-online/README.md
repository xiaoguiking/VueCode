# vue-shopping-online

## (三) dev-action

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
