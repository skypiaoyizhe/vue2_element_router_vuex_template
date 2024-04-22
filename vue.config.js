const { defineConfig } = require('@vue/cli-service')
console.log("KEY：",process.env.VUE_APP_TOKEN);
console.log("环境：",process.env.NODE_ENV);
console.log("接口：",process.env.VUE_APP_API_URL);
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:"/",
  lintOnSave:false,
  devServer:{
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css:{
    sourceMap:process.env.NODE_ENV === 'production'
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = process.env.VUE_APP_TITLE
      return args;
    });
  }
})
