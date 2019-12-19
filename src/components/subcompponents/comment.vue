<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要bb的内容（最多120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list" v-for="(item, i) in comments" :key="i">
            <div class="cmt-item">
                <div class="cmt-item">第{{ i + 1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;
                    发表时间：{{ item.add_time | dateFormat }}</div>
                <div class="cmt-body">{{ item.content === 'undefined' ? '这家伙懒的一批，啥都没说': item.content }}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            pageIndex: 1,// 默认展示第一页数据
            comments: [] // 所有的评论数据
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$http
            .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
            .then(result =>{
                if(result.body.status === 0){
                    // 数据的拼接，防止数据产生覆盖或者清空
                    this.comments = this.comments.concat(result.body.message);
                    // console.log(this.comments);
                    
                }else{
                    Toast("获取评论失败！！！")
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComments();
        }
    },
    props: ['id']
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-item{
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }

}
</style>