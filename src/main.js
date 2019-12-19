// 入口文件
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)
// 导入 MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function(dateStr, pattern = "YYYY-MM-DD hh:mm:ss"){
    return moment(dateStr).format(pattern)
})
// 导入 vue-resource
 import VueResource from 'vue-resource'
// 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
// 注意：1、因为设置全局请求根路径是基于 vue-resource 所以要安装之后才能调用
//      2、防止以后更换路径，更改起来很麻烦，所以设置一个全局请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 导入自己的 router.js 路由模块
import router from './router.js'

// 导入 APP 组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router // 挂载路由对象到 vm 实例上
})