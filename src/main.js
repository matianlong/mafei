// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)


// 导入 MUI 的样式
import '../dist/mui/css/mui.min.css'

// 按需导入 Mint-UI 中的组件   
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

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