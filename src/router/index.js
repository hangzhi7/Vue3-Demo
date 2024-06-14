import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        name: 'about-index',
        component: () => import('../views/about/index.vue'),
        meta: {
            title: '关于'
        }
    },
    {
        path: '/content',
        name: 'content-index',
        component: () => import('../views/content/index.vue'),
        meta: {
            title: '内容'
        }
    },
]

let router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 全局注册 router
export function setupRouter(app) {
    app.use(router);
}


export default router;