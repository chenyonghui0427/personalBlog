import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//ant
import ant from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
Vue.use(ant)
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

import VueQuillEditor from 'vue-quill-editor'
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
Vue.use(VueQuillEditor)

import {
    post,
    get
} from './axios/index'
Vue.prototype.$post = post;
Vue.prototype.$get = get;

//相同路径报错
import Router from 'vue-router'
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

import axios from 'axios'
axios.interceptors.response.use(response => {
    if (response.data.code === -1) {
        router.replace({
            path: '/login',
        })
    }
    return response
});
//时间转时间戳
Vue.filter('dateFormat', function (originVal) {
    var date = originVal * 1000
    const dt = new Date(date)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')