<template>
  <div class="header">
    <a href="#/">
      <img class="logo" src="@/assets/images/logo.png" />
      <span class="company">xxxxx系统</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        项羽
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-s-fold" command="a">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          // 退出系统
          this.handleLogout();
          break;
        default:
          break;
      }
    },
    // 退出系统
    handleLogout() {
      this.$message({
        message: "已退出请重新登入",
        type: "success",
        duration: 1000 // 弹出停留时间
      });
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  .logo {
    vertical-align: middle;
    padding: 0px 10px 0 40px;
    height: 25px;
  }
  .company {
    position: absolute;
    color: white;
  }
  /* 下拉菜单  */
  .el-dropdown {
    float: right;
    margin-right: 40px;
    .el-dropdown-link {
      color: white;
      cursor: pointer;
    }
  }
}
</style>