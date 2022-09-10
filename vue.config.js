const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8010,
    allowedHosts: ['localhost:8000'],
  },
})
