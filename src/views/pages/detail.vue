<template>
    <div>
        <div class="header">
            <div class="title">
                <h1>{{info.title}}</h1>
            </div>
            <div class="author">
                <div class="avatar"></div>
                <div class="info">
                    <div class="author-name">陈永辉</div>
                    <div class="meta">
                        <span>{{info.create_time|dateFormat}}</span>
                        <span>字数:210912</span>
                        <span>阅读:212</span>
                        <span>评论:21</span>
                        <span>喜欢:1</span>
                    </div>
                </div>
                <el-tag type="success" size="mini">随笔</el-tag>
            </div>
        </div>
        <div class="article-content">
            <p v-html="info.content"></p>
        </div>
        <!-- 评论 -->
        <div class="comment-list">
            <div class="comment-item" v-for="(item,index) in commentList" :key="index">
                <div class="comment-header">
                    <div class="comment-avatar">
                        <img class="code" src="../../assets/user.png" alt />
                    </div>
                    <div class="comment-info">
                        <div class="comment-name">{{item.comment_people}}</div>
                        <div class="comment-time">{{item.comment_date|dateFormat}}</div>
                    </div>
                </div>
                <div class="comment-content">{{item.comment_content}}</div>

                <!-- <div class="comment-people">
                    <span>蔡狗屎</span>说:
                </div>
                <div class="comment-content">咿呀！妈呀！真好玩</div>
                <div class="comment-time">{{1450323221|dateFormat}}</div>-->
            </div>
        </div>
        <!-- <div class="title">
            <h1>{{info.title}}</h1>
        </div>
        <div class="auth">作者:陈永辉</div>
        <div class="create_time">{{info.create_time}}</div>
        <div class="title">
            <h1>留言</h1>
        </div>-->

        <div class="add-comment">
            <h2>我要发表看法</h2>
            <div class="comments">
                <h4>您的留言:</h4>
                <textarea cols="100" rows="10" v-model="commentsInfo.content"></textarea>
            </div>
            <div class="people-name">
                <h4>您的大名:</h4>
                <input type="text" placeholder="请输入您的大名" v-model="commentsInfo.people" />
            </div>
            <div class="people-name">
                <h4>电子邮箱:</h4>
                <input type="text" placeholder="请输入电子邮箱" v-model="commentsInfo.email" />
            </div>
            <div class="people-name">
                <h4>个人网站:</h4>
                <input type="text" placeholder="请输入您的个人网站" v-model="commentsInfo.website" />
            </div>
            <div class="submit" @click="submitComments">发表</div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import item from "@/components/item.vue";

export default {
    name: "home",
    components: {
        item
    },
    data() {
        return {
            info: {},
            commentList: [],
            commentsInfo: {
                id: this.$route.query.id
            }
        };
    },
    created() {
        console.log(this.$route.query);
    },
    methods: {
        submitComments() {
            this.$post("/comment/add_comment", this.commentsInfo).then(res => {
                if (res.code === 1) {
                    this.$message.success(res.msg);
                    this.commentList = res.comment_list;
                }
            });
        }
    },
    mounted() {
        this.$post("/article/detail", {
            article_id: this.$route.query.id
        }).then(res => {
            if (res.code === 1) {
                this.info = res.info;
                this.commentList = res.comments;
            }
        });
    }
};
</script>
<style scoped>
h1 {
    color: #2c3e50;
}
.author {
    display: flex;
    align-items: center;
}
.avatar {
    width: 48px;
    height: 48px;
    background: url("../../assets/avatar-one.jpg") no-repeat 100% 100%;
    background-size: cover;
    border-radius: 50%;
    /* background: red; */
}
.info {
    flex: 1;
    padding-left: 15px;
}
.meta {
    margin: 5px 0 0 0;
    font-size: 12px;
    color: #969696;
}
.meta span {
    padding-right: 5px;
}
.article-tag {
    width: 50px;
    padding: 3px 5px;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
    text-align: center;
    font-size: 12px;
    border-radius: ;
}
.article-content {
    padding: 20px 0;
}
.comment-item {
    padding: 20px 15px;
    border-bottom: 1px solid #f0f0f0;
}
.comment-header {
    display: flex;
    align-items: center;
}
.comment-avatar {
    width: 30px;
    height: 30px;
}
.comment-avatar img {
    width: 100%;
    height: 100%;
}
.comment-time {
    font-size: 12px;
    color: #969696;
}
.comment-info {
    margin-left: 15px;
}
.comment-content {
    padding: 5px 0;
}
/*  */

.add-comment {
    margin: 20px;
    box-sizing: border-box;
    padding: 20px;
    background: #f2f2f2;
}
.add-comment h2 {
    padding-bottom: 10px;
    border-bottom: 1px #d3d3d3 solid;
}
textarea {
    border: 1px #d3d3d3 solid;
}
input {
    border: 1px #d3d3d3 solid;
    height: 40px;
    width: 300px;
    padding-left: 5px;
}
.submit {
    width: 200px;
    line-height: 40px;
    background: #6495ed;
    margin: 20px auto;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
}
</style>
