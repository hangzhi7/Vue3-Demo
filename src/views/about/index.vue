<template>
  <div>
    <h1>关于页面</h1>
    <h3>姓名：{{userStore.user.name}}</h3>
    <h3>年龄：{{userStore.user.age}}</h3>
    <h3>性别：{{userStore.user.sex}}</h3>
    ---
    <h3>改变后年龄：{{userStore.changeAge}}</h3>
    <el-button @click="change">改变姓名</el-button>

  </div>
</template>

<script setup>
import {useUserStore} from "@/stores";

const userStore = useUserStore();

function change() {
  userStore.changeName('李四')
}

</script>
