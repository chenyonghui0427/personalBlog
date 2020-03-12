<template>
    <div class="about">
        <div class="title">
            <span>我的简介</span>
            <p>我的基本信息和一些自我介绍</p>
        </div>
        <div class="container">
            <img class="person-pic" src="../../assets/person-2.jpeg" />
            <div class="person-info">
                <p>基本信息和自我介绍</p>
                <p>
                    我是一名
                    <span>web前端</span>程序猿,目前居住在&nbsp;
                    <span>中国·安徽·合肥</span>
                </p>
                <p
                    class="intro"
                >软件工程专业，现在一家高校请等工作。英语专业4级，能够较为熟练运用Vue.js,React.js等前端主流框架。。在校期间主修了web前端开发、数据库原理、还选修了有机化学。勤奋踏实的我愿用所学与公司共同发展！</p>
                <div class="wrape">
                    <div class="wrape-row">
                        <div class="wrape-item">
                            <span>英文名:</span>
                            <span>Tim</span>
                        </div>
                        <div class="wrape-item">
                            <span>出生日期:</span>
                            <span>1995-04-27</span>
                        </div>
                        <div class="wrape-item">
                            <span>毕业院校:</span>
                            <span>安徽信息工程学院</span>
                        </div>
                        <div class="wrape-item">
                            <span>籍贯:</span>
                            <span>中国·安徽·芜湖</span>
                        </div>
                    </div>
                    <div class="wrape-row">
                        <div class="wrape-item">
                            <span>民族:</span>
                            <span>汉族</span>
                        </div>
                        <div class="wrape-item">
                            <span>手机:</span>
                            <span>15705601876</span>
                        </div>
                        <div class="wrape-item">
                            <span>邮箱:</span>
                            <span>15705601876@163.com</span>
                        </div>
                        <div class="wrape-item">
                            <span>现居城市:</span>
                            <span>中国·安徽·合肥</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="center title">
            <span>求学和工作经验历</span>
        </div>
        <div class="wrape">
            <div class="experience">
                <span class="experience-title">求学经历</span>
                <el-card class="experience-content">
                    <el-timeline>
                        <el-timeline-item
                            placement="top"
                            color="#febd01"
                            v-for="(item,index) in learnList"
                            :key="index"
                        >
                            <h3>{{item.name}}</h3>
                            <p>{{item.learn}}</p>
                        </el-timeline-item>
                    </el-timeline>
                </el-card>
            </div>
            <div class="experience">
                <span class="experience-title">工作经历</span>
                <el-card class="experience-content">
                    <el-timeline>
                        <el-timeline-item
                            placement="top"
                            color="#febd01"
                            v-for="(item,index) in jobList"
                            :key="index"
                        >
                            <h3>{{item.name}}</h3>
                            <p>{{item.job}}</p>
                            <!-- <p>利用业余时间用 vue + typescript + element-ui 做了一个 vue 版的网站，历时差不多 1 个星期，之所以那么做，就是想学一下 typescript ，等 Vue3.0 出来的时候，可以更快的上手，其中踩了不少坑，不过后面都解决了。 对于使用 TypeScript : 一时用一时爽，一直用一直爽</p> -->
                            <p>{{item.workTime}}</p>
                        </el-timeline-item>
                    </el-timeline>
                </el-card>
            </div>
        </div>
        <div class="center title">
            <span>我的作品</span>
        </div>
        <div class="product-content">
            <div
                class="product-item"
                v-for="(item,index) in productList"
                :key="index"
                @click="openLink(item.link)"
            >
                <img class="product-code" :src="item.img" alt />
                <div class="product-info">
                    <div class="intro">
                        <p>{{item.title}}</p>
                        <p>{{item.subtitle}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="expect">敬请期待更多...</div>
    </div>
</template>

<script>
export default {
    name: "home",

    data() {
        return {
            productList: [
                {
                    title: "校派",
                    subtitle: "扫码查看更多",
                    link: null,
                    img: require("../../assets/product/schoolPi.jpg")
                },
                {
                    title: "校派高中",
                    subtitle: "扫码查看更多",
                    link: null,
                    img: require("../../assets/product/highSchool.jpg")
                },
                {
                    title: "校派大学",
                    subtitle: "扫码查看更多",
                    link: null,
                    img: require("../../assets/product/highSchool-2.jpg")
                },
                {
                    title: "校派H5",
                    subtitle: "扫码查看更多",
                    link: null,
                    img: require("../../assets/product/h5.png")
                },
                {
                    title: "校派PC",
                    subtitle: "点击查看更多",
                    link: "https://www.schoolpi.net",
                    img: require("../../assets/product/pc.png")
                }
            ],
            learnList: [
                {
                    name: "安徽信息工程学院",
                    learn: "软件工程",
                    learnTime: "2015.09——2019.06"
                }
            ],
            jobList: [
                {
                    name: "安徽九广全景智慧科技有限公司",
                    job: "web前端",
                    workTime: "2019.04——至今"
                },
                {
                    name: "合肥京尚网络科技有限公司",
                    job: "web前端",
                    workTime: "2018.06——2019.04"
                }
            ]
        };
    },
    methods: {
        loadArticle(page) {},
        openLink(url) {
            if (url != null) {
                window.open(url, "_blank");
            } else {
                this.$message.warning("请使用微信扫码查看哦～");
            }
        }
    },
    mounted() {
        this.loadArticle(1);
    }
};
</script>
<style  scoped>
.center {
    text-align: center;
    margin: 40px 0;
}
.title {
    text-align: center;
    color: #000;
}
.title span {
    border-bottom: 2px #f4e8bf solid;
    font-size: 30px;
}
.title p {
    color: #707070;
}
.container {
    display: flex;
    align-items: center;
}
.person-pic {
    width: 400px;
    /* height: 200px; */
    background: red;
}
.person-info {
    flex: 1;
    width: 500px;
    margin-left: 50px;
}
.person-info p:nth-child(1) {
    font-size: 24px;
    color: #000;
    font-weight: 600;
    margin-bottom: 10px;
}
.person-info p:nth-child(2) {
    font-size: 16px;
    color: #000;
    font-weight: 600;
}
.person-info p:nth-child(2) span {
    color: #409eff;
}
.intro {
    font-size: 16px;
    color: #828282;
}
.wrape {
    display: flex;
}
.wrape-row,
.experience {
    flex: 1;
}
.wrape-row:nth-child(2),
.experience:nth-child(2) {
    margin-left: 20px;
}
.wrape-item {
    padding: 15px 0;
    border-bottom: 1px #f2f2f2 solid;
}
.wrape-item span:nth-child(1) {
    font-weight: 800;
    color: #000;
    font-size: 16px;
    letter-spacing: 2px;
}
.wrape-item span:nth-child(2) {
    font-size: 14px;
    padding-left: 10px;
}
.experience-title {
    font-size: 18px;
    color: #000;
    font-weight: 600;
    border-bottom: 2px #febd01 solid;
}
.experience-content {
    margin-top: 20px;
}
.experience-content p {
    color: #828282;
}
.product-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.product-item {
    width: 180px;
    height: 180px;
    background: #409eff;
    transition: 0.4s;
    margin-bottom: 20px;
    cursor: pointer;
    opacity: 1;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    position: relative;
}
.product-code {
    width: 100%;
    margin: 0;
    padding: 0;
    transition: 0.2s;
}
.product-info {
    transition: 0.6s;
}
.product-info::before,
.product-info::after {
    position: absolute;
    content: "";
    opacity: 1;

    transition: opacity 0.4s, transform 0.4s;
}
.product-info::before {
    top: 8%;
    right: 10%;
    bottom: 8%;
    left: 10%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: scale(0, 1);
    -moz-transform: scale(0, 1);
    -o-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
}
.product-info::after {
    top: 8%;
    right: 10%;
    bottom: 8%;
    left: 10%;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    -webkit-transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: 100% 0;
    -moz-transform-origin: 100% 0;
    -o-transform-origin: 100% 0;
    transform-origin: 100% 0;
}
.product-item:hover .product-info::before,
.product-item:hover .product-info::after {
    opacity: 1;
    transform: scale(1);
}
.product-item:hover .product-code {
    opacity: 0.3;
}
.intro {
    position: absolute;
    text-align: center;
    bottom: 15%;
    left: 0;
    right: 0;
    color: #fff;
    opacity: 0;
    transition: 0.2s;
}
.product-item:hover .intro {
    opacity: 1;
    bottom: 25%;
}
.expect {
    text-align: center;
}
</style>
