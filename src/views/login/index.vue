<template>
  <div class="login-page">
    <div class="login-title">
      <h2>汽车租凭后台管理系统</h2>
    </div>
    <div class="login-content">
      <h3>欢迎登录</h3>
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script setup>
import LoginForm from './cnps/login-form.vue';
</script>
<style scoped lang="scss">
.login-page {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/bg1.jpg");
  background-size: 100% 100%;

  .login-title {
    position: absolute;
    top: 2vw;
    left: 10vw;
    color: #fff;
  }

  .login-content {
    padding: 30px;
    margin-left: 20vw;
    margin-top: 10vw;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;

    h3 {
      margin-bottom: 20px;
    }
  }
}
</style>