<template>
    <el-main>
        <el-button class="add" size="mini" type="primary" @click="addCourse">添加历程</el-button>
        <el-table :data="articleList" border style="width: 100%" size="mini">
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="content" label="内容"></el-table-column>
            <el-table-column prop="time" label="时间"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini">编辑</el-button>
                    <el-button @click="handleDelete(scope.row)" type="danger" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
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
                    <el-button type="primary" @click="handleAdd">保存</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </el-main>
</template>
<script>
export default {
    mounted() {
        this.loadCourseList();
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
        loadCourseList() {
            this.$post("/course/list").then(res => {
                if (res.code === 1) {
                    this.articleList = res.list;
                    this.totals = res.totals;
                }
            });
        },
        handleAdd() {
            this.$post("/course/addCourse", this.form).then(res => {
                if (res.code === 1) {
                    this.dialogVisible = false;
                    this.$message.success(res.msg);
                    this.loadCourseList();
                } else {
                    this.$message.error(res.msg);
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
            this.$post("/course/delete", {
                id: item.course_id
            }).then(res => {
                if (res.code === 1) {
                    this.loadCourseList(1);
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
