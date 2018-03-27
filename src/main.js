// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

import moment from 'moment'
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;

// 导入 MUI 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件   
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

import VuePreview from 'vue-preview'
Vue.use(VuePreview)
    // 1.3 导入自己的 router.js 路由模块
import router from './router'

// 导入 App 根组件
import App from './App.vue'

new Vue({
    el: '#app',
    // router,
    render: c => c(App),
    router // 1.4 挂载路由对象到 VM 实例上
})