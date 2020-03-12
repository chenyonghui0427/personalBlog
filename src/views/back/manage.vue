<template>
    <div class="container">
        <sideNav />
        <div class="router-view">
            <headTop />
            <el-main>
                <router-view />
            </el-main>
        </div>
        <!-- <el-main class="router-view"></el-main> -->
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
    }
};
</script>
<style scoped>
.container {
    display: flex;
}

.router-view {
    flex: 1;
    box-sizing: border-box;
    background: #f2f2f2;
    /* margin: 10px; */
}
</style>