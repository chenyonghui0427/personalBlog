<template>
    <div class="background">
        <div class="intro">
            <h1>
                I’m Chen Yonghui
                <br />And I love coding
            </h1>
            <div class="more" @click="jump">
                <div class="more-text">Learn More</div>
                <div class="circle">
                    <a-icon type="right" />
                </div>
            </div>
        </div>
        <div class="website-info">
            <p>Copyright © 2019-2020 Chen Yonghui, All Rights Reserved</p>
            <a href="http://www.beian.miit.gov.cn/" target="_blank">皖ICP备20000278号</a>
            <!-- <p @click="jump"></p> -->
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
            articleList: [],
            page: 1,
            num: 10
        };
    },
    methods: {
        jump() {
            this.$store.commit("SELECT_NAV", {
                currentNav: "2"
            });
            this.$router.push("/article");
        },
        loadArticle(page) {
            this.pages = page;
            this.$post("/article_list", {
                pages: this.pages,
                nums: this.num
            }).then(res => {
                if (res.code === 1) {
                    this.articleList = res.list;
                }
            });
        }
    },
    mounted() {
        let ob = {
            name: 1,
            as: 1212
        };
        const { name, age, as } = ob;
        // this.loadArticle(1);
    }
};
</script>
<style  scoped>
.background {
    width: 100vw;
    height: 100vh;
    background: url("../../assets/background.jpg") no-repeat 100% 100%;
    background-size: cover;
}
.intro {
    width: 700px;
    /* height: 200px; */
    text-align: center;
    margin: auto;
    font-size: 38px;
    color: #fff;
    position: absolute;
    top: 30%;
    left: 0;
    bottom: 0;
    right: 0;
}
.intro h1 {
    color: #fff;
}
.more {
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 28px;
    cursor: pointer;
    font-weight: 200;
    /* text-align: center;
    position: relative;
    font-family: "Poppins", sans-serif;
    
    font-size: 28px; */
}
.circle {
    width: 60px;
    height: 60px;
    border: 3px solid #fff;
    border-radius: 50%;
    font-size: 22px;
    /* text-align: center; */
}
.circle i {
    font-size: 18px;
    align-items: center;
    line-height: 60px;
    transition: 0.2s;
}
.more p {
    padding: 0;
}
.more:hover .circle i {
    margin-left: 20px;
}
.website-info {
    width: 100vw;
    text-align: center;
    position: fixed;
    bottom: 10px;
    color: #fff;
    cursor: pointer;
}
.website-info p,
a {
    margin-bottom: 5px;
    color: #fff;
    text-decoration: none;
}
</style>
