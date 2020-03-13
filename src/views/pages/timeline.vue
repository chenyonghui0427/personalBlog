<template>
    <div>
        <el-timeline>
            <el-timeline-item placement="top" color="green" v-for="item in list" :key="item">
                <el-card style="width:100%;">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                    <p>
                        {{item.time}}
                        <!-- <span>2014-01-24</span>
                        <span>--</span>
                        <span>2020-02-15</span>-->
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
    },
    data() {
        return {
            list: []
        };
    },
    methods: {
        loadArticle(page) {
            this.pages = page;
            this.$post("/course/list").then(res => {
                if (res.code === 1) {
                    this.list = res.list;
                }
            });
        }
    },
    mounted() {
        this.loadArticle(1);
    }
};
</script>
