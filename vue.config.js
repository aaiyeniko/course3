const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/course3/" : "/",
})
