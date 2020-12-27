module.exports = {
  devServer: {
    proxy: {
      // 配置跨域
      "/api": {
        target: "http://localhost:3000", // 这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true, // 允许跨域
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  },
  publicPath: "./",
  lintOnSave: false,
  productionSourceMap: false
};
