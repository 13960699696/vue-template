<template>
<body id="poster">
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button
        type="primary"
        style="width: 100%;background: #505458;border: none"
        @click="login"
      >登录</el-button>
    </el-form-item>
  </el-form>
</body>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({
      updateExpires: "updateExpires"
    }),
    login() {
      this.$axios
        .post(this.$api.Authentication.GetToken, this.loginForm)
        .then(res => {
          //存储token
          localStorage.setItem("TokenStr", res.TokenStr);
          localStorage.setItem("user", JSON.stringify(this.loginForm));
          //存储token过期时间
          this.updateExpires({Expires:new Date(res.Expires)})
        })
        .catch(failres => {});
    }
  }
};
</script>

<style scoped lang="less">
#poster {
  background: url("../../assets/images/eva.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .login_title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
  }
}
</style>
