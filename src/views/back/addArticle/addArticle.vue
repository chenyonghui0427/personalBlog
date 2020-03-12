<template>
    <el-main class="add">
        <el-form class="form" ref="form" :model="form" label-width="100px" size="mini">
            <el-form-item label="文章标题:">
                <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
            </el-form-item>
            <el-form-item label="文章副标题:">
                <el-input v-model="form.subtitle" placeholder="请输入文章副标题"></el-input>
            </el-form-item>
            <el-form-item label="文章内容:">
                <quill-editor v-model="form.content"></quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">立即添加</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-main>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        };
    },
    methods: {
        handleFormLayoutChange(e) {
            this.formLayout = e.target.value;
        },
        handleSubmit(e) {
            console.log(this.form);
            this.$post("/article/add_article", this.form).then(res => {
                if (res.code === 1) {
                    // this.articleList = res.list;
                    // this.totals = res.totals;
                }
            });
        }
    }
    // methods: {
    //
    // }
};
</script>
<style  scoped>
.add {
    background: #fff;
}
.form {
    width: 800px;
    margin: 0 auto;
}
</style>
