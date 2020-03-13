<template>
    <div>
        <div v-for="item in list" :key="item.id" @click="goDetail(item)">
            <div class="info-item">
                <div class="info-content">
                    <h4 class="title">{{item.title}}</h4>
                    <p class="abstract">{{item.subtitle}}</p>
                    <div class="meta">
                        <span>查看 {{item.view}}</span>
                        <span>评论 55</span>
                        <span>赞 55</span>
                        <span>{{item.create_time|dateFormat}}</span>
                    </div>
                </div>
                <!-- <div class="info-img"></div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentList: this.list // 重新定义数据
        };
    },
    props: {
        list: {
            type: Array,
            default() {
                return false;
            }
        }
    },
    computed: {
        reloadList: function() {
            return this.list; // 直接监听props里的status状态
        }
    },
    methods: {
        goDetail(item) {
            this.$router.push({
                path: "/detail",
                query: { id: item.article_id }
            });
        }
    },
    mounted() {}
};
</script>
<style scoped>
.info-item {
    /* max-width: 800px; */
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    padding: 15px 0;
    align-items: center;
}
.info-img {
    width: 125px;
    height: 100px;
    background: red;
    margin-left: 5px;
}
.info-content {
    flex: 1;
}
.title {
    color: #333;
    margin: 7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    /* word-wrap: break-word; */
}
.abstract {
    min-height: 30px;
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #555;
}
.meta {
    font-size: 12px;
}
span {
    color: #666;
    margin-right: 10px;
}
</style>