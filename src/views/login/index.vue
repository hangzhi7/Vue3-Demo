<template>
  <h1>登录页</h1>

  <el-form :model="form" label-width="80px">
    <el-form-item>
      <template #label>
        <span>*</span> 用户名
      </template>
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item>
      <template #label>
        <span>*</span> 密码
      </template>
      <el-input v-model="form.password" />
    </el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </el-form>

</template>

<script setup>
import AuthAPI from "@/api/auth.js";

const form = reactive({
  username: '',
  password: ''
});


function handleLoginData() {
  //处理数据
  console.log("处理数据")
}
//登录
function onSubmit() {
  AuthAPI.login(form)
      .then(handleLoginData)
      .catch((error) => {
        ElMessage.error(error || "系统出错");
      })
}
</script>

<style lang="less" scoped>


.el-form-item span {
  color: @error-color;
}

</style>