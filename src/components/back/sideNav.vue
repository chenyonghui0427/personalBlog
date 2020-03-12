<template>
    <div class="side-nav">
        <div class="logo">
            <h1>博客后台</h1>
        </div>
        <a-menu
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['sub1']"
            mode="inline"
            theme="dark"
            :inlineCollapsed="collapsed"
            @click="handleClick"
        >
            <a-sub-menu key="sub1">
                <span slot="title">
                    <a-icon type="mail" />
                    <span>文章管理</span>
                </span>
                <a-menu-item key="/manage/article">文章列表</a-menu-item>
                <a-menu-item key="/manage/addArticle">添加文章</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
                <span slot="title">
                    <a-icon type="appstore" />
                    <span>评论管理</span>
                </span>
                <a-menu-item key="/manage/comments">评论列表</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
                <span slot="title">
                    <a-icon type="appstore" />
                    <span>人生历程</span>
                </span>
                <a-menu-item key="/manage/course">列表</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub4">
                <span slot="title">
                    <a-icon type="appstore" />
                    <span>个人中心</span>
                </span>
                <a-menu-item key="9">账号管理</a-menu-item>
                <a-menu-item key="10">添加账号</a-menu-item>
            </a-sub-menu>
        </a-menu>
        <div class="tips">Design By Chenyonghui</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: ["mail"],
            openKeys: ["sub1"],
            rootSubmenuKeys: ["sub1", "sub2", "sub3"],
            collapsed: false,
            test: "12"
        };
    },
    methods: {
        handleClick(e) {
            this.$router.push(e.key);
        },
        titleClick(e) {
            console.log("titleClick", e);
        }
    },
    //计算属性
    computed: {
        collapsedData() {
            console.log("===>", this.$store.state.collapsed);
            return this.$store.state.collapsed;
        }
    },
    watch: {
        openKeys(val) {
            console.log("openKeys", val);
        },
        //监听执行
        collapsedData: function(newValue, oldValue) {
            this.collapsed = newValue;
        }
    }
};
</script>
<style scoped>
.side-nav {
    height: 100vh;
    border-right: 1px #ccc solid;
    position: relative;
    background: #001529;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    transition: 0.5s;
}
.logo {
    height: 90px;
    background: #001529;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    /* margin-bottom: 20px; */
}
.logo h1 {
    color: #fff;
    margin: 0;
}
.tips {
    position: absolute;
    bottom: 5px;
    color: #ccc;
    left: 0;
    right: 0;
    font-size: 12px;
    text-align: center;
}
</style>