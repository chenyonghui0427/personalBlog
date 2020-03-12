<template>
    <div>
        <headNav />
        <div class="back">
            <div class="content display">
                <router-view class="router-view" />
                <rightSlider v-if="showSlider" class="rightSlider" />
            </div>
            <bottomFooter />
        </div>
    </div>
</template>
<script>
import headNav from "@/components/headNav.vue";
import rightSlider from "@/components/slider.vue";
import bottomFooter from "@/components/bottomFooter.vue";

export default {
    name: "home",
    components: {
        headNav,
        bottomFooter,
        rightSlider
    },
    data() {
        return {
            showSlider: true
        };
    },
    created() {
        console.log(this.$route);
        if (this.$route.path === "/about" || this.$route.path === "/detail") {
            this.showSlider = false;
        } else {
            this.showSlider = true;
        }
    },
    watch: {
        $route(to, from) {
            console.log(to.path);
            if (to.path === "/about" || to.path === "/detail") {
                this.showSlider = false;
            } else {
                this.showSlider = true;
            }
        }
    }
};
</script>
<style scoped>
.display {
    display: flex;
    padding-top: 80px;
    background: #fff;
}
.router-view {
    flex: 1;
    /* display: flex;
    justify-content: space-between; */
}
.rightSlider {
    margin-left: 40px;
}
.back {
    /* width: 100vw;
    height: 100%;
    background: url("../assets/background.jpg") no-repeat 100% 100%;
    background-size: cover; */
}
</style>