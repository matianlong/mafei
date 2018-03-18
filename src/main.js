import Vue from 'vue'
// import router from './router'

import '../dist/mui/css/mui.min.css'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import App from './App.vue'


new Vue({
    el: '#app',
    // router,
    render: c => c(App)
})