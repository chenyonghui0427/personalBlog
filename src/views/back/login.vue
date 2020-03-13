<template>
    <div class="login-contanier">
        <div class="login-form">
            <h1 class="title">欢迎使用博客智能后台管理系统</h1>
            <div class="input">
                <div class="label">
                    <img src="../../assets/user-login.png" alt />
                </div>
                <input v-model="loginForm.username" type="text" placeholder="请输入账号" />
            </div>
            <div class="input">
                <div class="label">
                    <img src="../../assets/password-login.png" alt />
                </div>
                <input v-model="loginForm.password" type="password" placeholder="请输入密码" />
            </div>
            <!-- <div class="submit"> -->
            <button class="submit" @click="login">登陆</button>
            <!-- </div> -->
        </div>
    </div>
</template>
<script>
/*eslint-disable */
export default {
    data() {
        return {
            fullscreenLoading: false,
            inputType: "password",
            loginForm: {}
        };
    },
    methods: {
        login() {
            this.$post("/login/login", this.loginForm).then(res => {
                if (res.code === 1) {
                    this.$message.success(res.msg);
                    this.$router.push("/manage/addArticle");
                } else {
                    this.$message.error(res.msg);
                }
            });
        }
    },
    mounted() {}
};
</script>
<style scoped>
.login-contanier {
    width: 100vw;
    height: 100vh;
    background: url("../../assets/login-bg.jpg") no-repeat 100% 100%;
    background-size: cover;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.login-form {
    width: 600px;
    padding: 30px 50px;
    /* height: 200px; */
    background: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
}
.title {
    color: #fff;
    text-align: center;
    padding: 20px 0;
}
.input {
    margin: 0 30px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    color: #383838;
    border-bottom: 1px #fff solid;
    color: #fff;
}
input {
    flex: 1;
    height: 50px;
    border-radius: 5px;
    padding-left: 5px;
    margin-right: 50px;
    font-size: 18px;
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
}
input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #ccc;
    /* placeholder字体大小  */
    font-size: 18px;
    /* placeholder位置  */
    /* text-align: right; */
}
.label {
    width: 30px;
    margin: 0 10px 0 30px;
}
.label img {
    width: 100%;
    height: 100%;
}

.submit {
    width: 200px;
    margin: 70px auto 30px auto;
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    background: #409eff;
    border: none;
    border-radius: 5px;
}
</style>