<template>
    <div>
        <item :list="articleList" />
    </div>
</template>

<script>
// @ is an alias to /src
import item from "@/components/item.vue";
import axios from "axios";
export default {
    name: "home",
    components: {
        item
    },
    data() {
        return {
            articleList: [],
            page: 1,
            nums: 10
        };
    },
    methods: {
        loadArticle(page) {
            this.pages = page;
            this.$post("/article/list", {
                pages: this.pages,
                nums: this.nums
            }).then(res => {
                if (res.code === 1) {
                    this.articleList = res.list;
                }
            });
        }
    },
    mounted() {
        this.loadArticle(1);
    }
};
</script>
