<template>
    <el-main>
        <el-button class="add" size="mini" type="primary" @click="addCourse">添加历程</el-button>
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
        <el-dialog :visible.sync="dialogVisible" center>
            <el-form label-width="80px" :model="form" size="mini">
                <el-form-item label="标题:">
                    <el-input v-model="form.title" placeholder="请输入历程标题"></el-input>
                </el-form-item>
                <el-form-item label="内容:">
                    <el-input v-model="form.content" type="textarea" placeholder="请输入历程详情"></el-input>
                </el-form-item>
                <el-form-item label="时间:">
                    <el-input v-model="form.time" placeholder="请输入历程时间"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">保存</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </el-main>
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
            totals: 0,
            dialogVisible: false,
            form: {}
        };
    },
    methods: {
        addCourse() {
            this.dialogVisible = true;
        },
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
<style  scoped>
.add {
    margin-bottom: 20px;
}
</style>
