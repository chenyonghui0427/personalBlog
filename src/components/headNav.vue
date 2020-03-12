<template>
    <div class="nav-container">
        <div class="nav-content">
            <div class="nav-logo"></div>
            <div class="nav">
                <el-menu :default-active="currentNav" class="el-menu-demo" mode="horizontal">
                    <!-- <el-menu-item index="1">首页</el-menu-item> -->
                    <el-menu-item
                        v-for="item in menu"
                        :key="item.id"
                        :index="item.id"
                        @click="selectNav(item)"
                    >{{item.name}}</el-menu-item>
                </el-menu>
            </div>
            <div class="nav-right">
                <el-button size="mini" type="primary" @click="login">登陆</el-button>
                <el-button size="mini" type="danger" @click="collapsed=!collapsed">注册</el-button>
            </div>
        </div>

        <!-- <div class="website-name">陈永辉的个人博客</div>
        <ul class="menu">
            <li class="menu-item" v-for="item in menu" :key="item.id" @click="selectNav(item)">
                {{item.name}}{{currentNav}}
                <div class="ename">{{item.ename}}</div>
            </li>
            <div @click="login">登陆</div>
        </ul>-->
        <el-dialog title="登陆" :visible.sync="dialogVisible" center>
            <el-form label-width="80px" :model="form" size="mini">
                <el-form-item label="用户名:">
                    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-input v-model="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="验证码:">
                    <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button>取消</el-button>
                    <el-button @click="login">登陆</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            collapsed: true,
            currentNav: "1",
            menu: [
                { id: "1", name: "首页", ename: "Home", link: "/" },
                { id: "2", name: "文章", ename: "Article", link: "/article" },
                // { id: "3", name: "旅程", ename: "Trip", link: "/learn" },
                {
                    id: "4",
                    name: "人生历程",
                    ename: "About",
                    link: "/timeline"
                },
                { id: "5", name: "关于", ename: "About", link: "/about" }
                // { id: "6", name: "学无止境", ename: "Learn", link: "/learn" }
            ],
            dialogVisible: false,
            form: {}
        };
    },
    props: {
        msg: String
    },

    created() {
        this.currentNav = this.$store.state.currentNav;
    },
    methods: {
        selectNav(item) {
            // this.currentNav = item.id;
            this.$store.commit("SELECT_NAV", {
                currentNav: item.id
            });
            this.$router.push(item.link);
        },
        login() {
            // this.dialogVisible = true;
            this.$router.push("/login");
        }
    }
};
</script>
<style scoped>
.el-menu-item,
.el-menu.el-menu--horizontal {
    /* border: none !important; */
}
.el-menu.el-menu--horizontal {
    border: none !important;
}
.nav-container {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 99;
    border-bottom: 1px solid #eee;
    background: #fff;
}
.nav-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
.nav-logo {
    width: 50px;
    height: 50px;
    background: url("../assets/avatar.jpg") no-repeat 100% 100%;
    background-size: cover;
    margin-right: 100px;
    /* background: red; */
    border-radius: 50%;
}
.nav {
    flex: 1;
}

/*  */
.website-name {
    font-size: 28px;
    margin: 20px 0 20px 90px;
}
ul li {
    list-style: none;
}
.menu {
    display: flex;
    font-size: 18px;
}
.menu-item {
    margin-left: 50px;
    cursor: pointer;
}
.menu-item:hover .ename {
    opacity: 1;
}
.ename {
    font-size: 12px;
    opacity: 0;
    transition: all 0.5s ease-in;
}
</style>
