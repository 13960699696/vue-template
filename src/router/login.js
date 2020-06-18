export default [{
    path: "/",
    redirect: "/home",
    component: () => import("components/Layout"),
    children: [{
        path: '/home',
        component: () => import("@/views/home"),
        meta: {
            title: '首页'
        }
    }]
}, {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
    meta: {
        title: '登入页'
    }
}]