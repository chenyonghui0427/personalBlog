import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () => import("../views/pages/home.vue")
    },

    {
        path: '/article',
        name: 'index',
        component: () => import( /* webpackChunkName: "about" */ '../views/index.vue'),
        children: [{
                path: '/article',
                name: 'article',
                component: () => import( /* webpackChunkName: "about" */ '../views/pages/article.vue'),
            },
            {
                path: '/detail',
                name: 'detail',
                component: () => import( /* webpackChunkName: "about" */ '../views/pages/detail.vue'),
            },
            {
                path: '/life',
                name: 'life',
                component: () => import( /* webpackChunkName: "about" */ '../views/pages/life.vue'),
            },
            {
                path: '/learn',
                name: 'learn',
                component: () => import( /* webpackChunkName: "about" */ '../views/pages/learn.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import( /* webpackChunkName: "about" */ '../views/pages/about.vue'),
            }, , {
                path: '/timeline',
                name: 'timeline',
                component: () => import( /* webpackChunkName: "about" */ '../views/pages/timeline.vue'),
            }
        ]
    }, {
        path: '/manage',
        name: 'manage',
        component: () => import("../views/back/manage.vue"),
        children: [{
            path: '/manage/addArticle',
            name: 'manage-addArticle',
            component: () => import( /* webpackChunkName: "about" */ '../views/back/addArticle/addArticle.vue'),
        }, {
            path: '/manage/article',
            name: 'manage-article',
            component: () => import( /* webpackChunkName: "about" */ '../views/back/article/article.vue'),
        }, {
            path: '/manage/comments',
            name: 'manage-comments',
            component: () => import( /* webpackChunkName: "about" */ '../views/back/comments/comments.vue'),
        }, {
            path: '/manage/record',
            name: 'manage-record',
            component: () => import( /* webpackChunkName: "about" */ '../views/back/record/record.vue'),
        }]
    }, {
        path: '/login',
        name: 'login',
        component: () => import("../views/back/login.vue")
    }, {
        path: '/about/about',
        name: 'about-about',
        component: () => import("../views/About.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router