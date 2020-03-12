<template>
    <div class="slider">
        <div class="slider-logo"></div>
        <div class="title">陈永辉</div>
        <div class="slider-content"></div>
        <div class="tags-title">技能点</div>
        <div class="tags">
            <div class="tags-item" v-for="(item,index) in tagsList" :key="index">{{item}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            tagsList: [
                "vue-router",
                "Vue.js",
                "React.js",
                "微信小程序",
                "node.js",
                "Websocket",
                "JavaScript",
                "Vuex",
                "Antd Design",
                "Element-UI"
            ]
        };
    },
    props: {
        msg: String
    },
    methods: {
        selectNav(item) {
            this.currentNav = item.id;
            this.$router.push(item.link);
        }
    }
};
</script>
<style scoped>
.slider {
    width: 350px;
    height: 100px;
    padding-top: 100px;
}
.slider-logo {
    width: 130px;
    height: 130px;
    margin: 0 auto;
    /* background: blue; */

    background: url("../assets/avatar-one.jpg") no-repeat 100% 100%;
    background-size: cover;
    border-radius: 50%;
}
.title {
    font-size: 25px;
    font-weight: 700;
    text-align: center;
}
.slider-content {
    padding: 10px 0 20px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
}
.tags-title {
    font-size: 14px;
    color: #969696;
    text-align: center;
}
.tags {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0 20px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
}
.tags-item {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #eee;
    color: #333;
    margin: 10px 10px 0 0;
    text-decoration: none;
}
.tags-item:hover {
    color: #409eff;
}
</style>
