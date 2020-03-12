<template>
    <div class="bottom">
        <div class="code">
            <!-- <img class="code" src="../assets/code.jpg" alt /> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {};
    },
    props: {
        msg: String
    },
    // beforeCreate() {
    //     document
    //         .querySelector("body")
    //         .setAttribute("style", "background:#f2f2f2");
    // },
    // beforeDestroy() {
    //     document.querySelector("body").setAttribute("style", "");
    // },
    methods: {
        selectNav(item) {
            this.currentNav = item.id;
            this.$router.push(item.link);
        }
    }
};
</script>
<style scoped>
.bottom {
    padding: 50px 0;
}
.code {
    width: 200px;
    margin: 0 auto;
    height: auto;
}
img {
    width: 100%;
    height: 100%;
}
</style>
