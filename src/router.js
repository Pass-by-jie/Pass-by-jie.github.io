import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemvberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContaoner.vue'
import ShopacrContainer from './components/tabbar/ShopacrContainer.vue'
import Newlist from './components/news/Newlist.vue'
import Newinfo from './components/news/Newinfo.vue'
// 3、创建路由对象
var router = new VueRouter({
    routes:[ // 配置路由规则
        { path: '/', redirect: '/home' },
        { path: '/home',component: HomeContainer },
        { path: '/member',component: MemvberContainer },
        { path: '/shopcar',component: SearchContainer },
        { path: '/search',component: ShopacrContainer },
        { path: '/home/newlist', component: Newlist },
        { path: '/home/newinfo/:id', component: Newinfo },
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router
