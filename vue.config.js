let path = require('path')
var SRC_PATH = path.resolve(__dirname, './src');
module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@', SRC_PATH)
        config.resolve.alias.set('images', SRC_PATH + '/assets/images')
        config.resolve.alias.set('styles', SRC_PATH + '/assets/styles')
        config.resolve.alias.set('components', SRC_PATH + '/components')
        config.resolve.alias.set('common', SRC_PATH + '/common')
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'xxxx管理系统'
                return args
            })
    },
    devServer: {
        host: 'localhost',
        port: '8888',
        https: false,
        open: true, //启动服务时自动打开浏览器访问
        proxy: { // 开发环境代理配置
            [process.env.VUE_APP_BASE_API]: {
                // 目标服务器地址，代理访问 http://localhost:8001
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true, // 开启代理服务器，
            }
        },
    },
    parallel: 4, //是否用多线程进行压缩
    lintOnSave: false //不需要eslint校验
}