import Vue from 'vue'
import Router from 'vue-router'

import HomeContainer from 'components/tabbar/HomeContainer.vue'
import MemberContainer from 'components/tabbar/MemberContainer.vue'
import ShopcarContainer from 'components/tabbar/ShopcarContainer.vue'
import SearchContainer from 'components/tabbar/SearchContainer.vue'

Vue.use(Router)

//  创建路由对象  把路由对象暴露出去
export default new Router({
    routes: [ // 配置路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer }
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})