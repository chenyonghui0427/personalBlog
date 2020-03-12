<template>
    <div class="container">
        <div class="side-nav" :style="collapsed?'width:90px':'width:250px'">
            <sideNav />
        </div>
        <div class="router-view">
            <headTop />
            <el-main>
                <router-view style="background:#fff" />
            </el-main>
        </div>
    </div>
</template>
<script>
import sideNav from "@/components/back/sideNav.vue";
import headTop from "@/components/back/headTop.vue";

export default {
    name: "home",
    components: {
        sideNav,
        headTop
    },
    data() {
        return {
            collapsed: false
        };
    },
    computed: {
        collapsedData() {
            console.log("===>", this.$store.state.collapsed);
            return this.$store.state.collapsed;
        }
    },
    watch: {
        //监听执行
        collapsedData: function(newValue, oldValue) {
            this.collapsed = newValue;
        }
    }
};
</script>
<style scoped>
.container {
    display: flex;
}
.side-nav {
    transition: 0.3s;
}
.router-view {
    flex: 1;
    box-sizing: border-box;
    background: #f2f2f2;
    /* margin: 10px; */
}
</style>