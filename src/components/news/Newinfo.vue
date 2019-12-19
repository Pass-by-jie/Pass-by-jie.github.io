<template>
    <div class="newinfo-contatiner">
        <!-- 大标题 -->
        <h3 class="title">{{ newinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <samp>发表时间：{{ newinfo.add_time }}</samp>
            <samp>点击：{{ newinfo.click }}次</samp>
        </p>

        <hr>
        <!-- 内容区 -->
        <div class="content" v-html="newinfo.content">
        </div>
        <!-- 评论子组件区 -->
        <comment-box :id='this.id'></comment-box>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import comment from "../subcompponents/comment.vue"
export default {
    data(){
        return {
            // 将 URL 地址传递过来的 ID 值挂载到 data 上，方便以后调用
            id:this.$route.params.id,
            newinfo:{} // 新闻对象
        }
    },
    created(){
        this.getNewInfo();
    },
    methods:{
        getNewInfo(){
            this.$http.get("api/getnew/" + this.id).then(result => {
                if(result.body.status === 0){
                    this.newinfo = result.body.message[0];
                }else{
                    Toast("获取新闻失败！！！")
                }
            })
        }
    },
    components:{
        // 用来注册子组件的节点
        "comment-box":comment
    }
}
</script>
<style lang="scss">
.newinfo-contatiner{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        width: 100%;
    }
}
</style>