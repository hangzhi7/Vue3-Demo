import { createRouter, createWebHashHistory } from "vue-router";

// const routes = [
//     {
//         path: '/',
//         name: 'index',
//         component: () => import('../views/index.vue'),
//         meta: {
//             title: '首页',
//             menuOrder: 1
//         }
//     },
//     {
//         path: '/about',
//         name: 'about-index',
//         component: () => import('../views/about/index.vue'),
//         meta: {
//             title: '关于',
//             menuOrder: 2
//         }
//     },
//     {
//         path: '/content',
//         name: 'content-index',
//         component: () => import('../views/content/index.vue'),
//         meta: {
//             title: '内容',
//             menuOrder: 3
//         }
//     },
// ]

//自动生成routes
const pageModules = import.meta.glob('../views/**/page.js',
    {
        eager: true,
        import: 'default'
    });
const comModules = import.meta.glob('../views/**/index.vue');

const routes = Object.entries(pageModules).map(
    ([pagePath, config]) => {
        let path = pagePath.replace('../views', '').replace('/page.js', '');
        path = path || '/';
        const name = path.split('/').filter(Boolean).join('-') || 'index';
        const comPath = pagePath.replace('page.js', 'index.vue')
        return {
            path,
            name,
            component: comModules[comPath],
            meta: config
        }
    }
)

let router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 全局注册 router
export function setupRouter(app) {
    app.use(router);
}

export function toLogin() {
    router.replace({path: "/login"});
}

export default router;