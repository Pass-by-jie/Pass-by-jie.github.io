<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用 v-for 循环的化，一定要使用 key -->
            <mt-swipe-item v-for="item in lunbotyList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
		            <span class="mui-icon mui-icon-weibo"></span>
		            <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-image"></span>
		            <div class="mui-media-body">图片分享</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon-extra mui-icon-extra-gift"></span>
		            <div class="mui-media-body">商品购买</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-email"></span>
		            <div class="mui-media-body">留言反馈</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-download"></span>
		            <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <span class="mui-icon mui-icon-list"></span>
		            <div class="mui-media-body">联系我们</div></a></li>
		</ul>
    </div>
</template>

<script> 
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            lunbotyList:[] // 保存轮播图的数组
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            // 获取轮播图数据的方法
            this.$http.get("api/getlunbo").then(result => { // 请求的是一个服务器的端口，因此也可以访问github和码云
                // console.log(result.body)
                if(result.body.status === 0){
                    // 成功了
                    this.lunbotyList = result.body.message;
                } else {
                    Toast('轮播图加载失败……')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;

    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: rosybrown;
        }
        &:nth-child(3){
            background-color: royalblue;
        }
    }
    img{
        width: 100%;
        height: 100%;
    }
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;

    .mui-table-view-cell{
        border: none;
    }
}
.mui-icon-extra{
    margin-top: 12px;
}
</style>