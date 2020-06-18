/**
 * 权限校验：
 *  Vue Router中的 前置钩子函数 beforeEach(to, from, next)
 * 当进行路由跳转之前，进行判断 是否已经登录 过，登录过则允许访问非登录页面，否则 回到登录页
 * 
 * to:  即将要进入的目标路由对象
 * from: 即将要离开的路由对象
 * next: 是一个方法，可以指定路由地址，进行路由跳转
 */

// import router from './router'
// import VueCookies from 'vue-cookies'

// router.beforeEach((to, from, next) => {
//     // 1. 获取token
//     const token = VueCookies.get('token')

//     if (!token) {
//         // 1.1 如果没有获取到，
//         // 要访问非登录页面，则不让访问，加到登录页面 /login
//         if (to.path !== '/login') {
//             next({
//                 path: '/login'
//             })
//         } else {
//             // 请求登录页面 /login
//             next()
//         }
//     } else {
//         next()
//     }
// })