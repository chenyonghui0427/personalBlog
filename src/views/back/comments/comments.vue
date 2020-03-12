<template>
    <div>
        <el-table :data="articleList" border style="width: 100%" size="mini">
            <el-table-column prop="comment_content" label="评论内容"></el-table-column>
            <el-table-column prop="comment_people" label="评论人姓名"></el-table-column>
            <el-table-column prop="comment_date" label="评论时间"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="small">编辑</el-button>
                    <el-button @click="handleDelete(scope.row)" type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="totals"
            :page-size="num"
            @current-change="handleChange"
        ></el-pagination>
    </div>
</template>
<script>
export default {
    mounted() {
        this.loadArticleList(1);
    },
    data() {
        return {
            loading: false,
            pages: 1,
            articleList: [],
            num: 8,
            totals: 0
        };
    },
    methods: {
        handleChange(page) {
            this.loadArticleList(page);
        },
        loadArticleList(page) {
            this.pages = page;
            console.log(this.num);
            this.$post("/comment/list", {
                pages: this.pages,
                nums: this.num
            }).then(res => {
                if (res.code === 1) {
                    this.articleList = res.list;
                    this.totals = res.totals;
                }
            });
        },
        tableChange(pagination, filters, sorter) {
            this.$post("/article/list", {
                pages: pagination.current,
                nums: pagination.defaultPageSize
            }).then(res => {
                if (res.code === 1) {
                    this.articleList = res.list;
                    this.pagination = {
                        total: res.totals
                    };
                }
            });
        },
        handleDelete(item) {
            console.log(item);
            this.$post("/c/delete_article", {
                id: item.article_id
            }).then(res => {
                if (res.code === 1) {
                    this.loadArticleList(1);
                }
            });
        }
    }
};
</script>
