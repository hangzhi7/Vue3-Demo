<template>
  <h1>登录页</h1>

  <el-form :model="form" label-width="80px">
    <el-form-item>
      <template #label>
        <span>*</span> 用户名
      </template>
      <el-input v-model="form.username" @blur="v$.username.$touch" />
      <div class="error" >{{ v$.username.$errors[0]?.$message }}</div>
    </el-form-item>
    <el-form-item>
      <template #label>
        <span>*</span> 密码
      </template>
      <el-input v-model="form.password" @blur="v$.password.$touch"/>
      <div class="error">{{ v$.password.$errors[0]?.$message }}</div>
    </el-form-item>
    <el-button type="primary" @click="onSubmit" :disabled="v$.$invalid">登录</el-button>
  </el-form>

</template>

<script setup>

import { useVuelidate } from '@vuelidate/core'
import { required,helpers } from '@vuelidate/validators'
import AuthAPI from "@/api/auth.js";

const form = reactive({
  username: '',
  password: ''
});

const rules = {
  username: { required: helpers.withMessage('用户名不能为空', required)},
  password: { required: helpers.withMessage('密码不能为空', required) }
}

const v$ = useVuelidate(rules, form)


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

.error {
  color: @error-color;
}
.el-form-item span {
  color: @error-color;
}

</style>