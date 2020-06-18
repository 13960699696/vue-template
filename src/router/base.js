export default [{
    path: '/BaseModel',
    component: () => import("components/Layout"),
    children: [{
        path: '/BaseModel/proinfo', // /member/
        component: () => import("@/views/BaseModel/proinfo"),
        meta: {
            title: '产品信息窗口'
        }
    }, {
        path: '/BaseModel/trayinfo', // /member/
        component: () => import("@/views/BaseModel/trayinfo"),
        meta: {
            title: '托盘信息窗口'
        }
    }]
}]