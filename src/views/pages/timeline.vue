<template>
    <div>
        <el-timeline>
            <el-timeline-item placement="top" color="green" v-for="item in 5" :key="item">
                <el-card style="width:100%;">
                    <h3>Vue 版的网站</h3>
                    <p>利用业余时间用 vue + typescript + element-ui 做了一个 vue 版的网站，历时差不多 1 个星期，之所以那么做，就是想学一下 typescript ，等 Vue3.0 出来的时候，可以更快的上手，其中踩了不少坑，不过后面都解决了。 对于使用 TypeScript : 一时用一时爽，一直用一直爽</p>
                    <p>
                        <span>2014-01-24</span>
                        <span>--</span>
                        <span>2020-02-15</span>
                    </p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
// @ is an alias to /src
import item from "@/components/item.vue";

export default {
    name: "home",
    components: {
        item
    }
};
</script>
