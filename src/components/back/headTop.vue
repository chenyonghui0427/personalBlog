<template>
    <div class="head">
        <!-- <div> -->
        <div class="trigger" @click="handleCollapsed">
            <a-icon :type="collapsed?'menu-unfold':'menu-fold'" />
        </div>
        <div style="flex:1;"></div>
        <div class="head-bar">
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </div>
        <!-- </div> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            collapsed: false
        };
    },
    methods: {
        handleCollapsed() {
            let collapsed = this.collapsed;
            this.$store.commit("CHANGE_MENU_STATUS", {
                collapsed: !collapsed
            });
            !this.collapsed;
        }
    },
    computed: {
        collapsedData() {
            return this.$store.state.collapsed;
        }
    },
    watch: {
        collapsedData(newValue, oldValue) {
            this.collapsed = newValue;
        }
    }
};
</script>
<style scoped>
.head {
    flex: 1;
    background: #fff;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 60px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.trigger {
    font-size: 20px;
    padding: 0 24px;
    /* width: ; */
    cursor: pointer;
}
.head-bar {
    /* display: flex;
    width: 100%; */
    float: right;
    display: flex;
    padding: 0 20px;
}
.logo {
    height: 90px;
    background: #001529;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    /* margin-bottom: 20px; */
}
.logo h1 {
    color: #fff;
    margin: 0;
}
.tips {
    position: absolute;
    bottom: 5px;
    color: #ccc;
    left: 0;
    right: 0;
    font-size: 12px;
    text-align: center;
}
</style>