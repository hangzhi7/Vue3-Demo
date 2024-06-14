<script setup>

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div>
    <el-button type="success"><i-ep-SuccessFilled/>Success</el-button>
    <el-button type="info"><i-ep-InfoFilled/>Info</el-button>
    <el-button type="warning"><i-ep-WarningFilled/>Warning</el-button>
    <el-button type="danger"><i-ep-WarnTriangleFilled/>Danger</el-button>

    <!-- svg本地图标   -->
    <el-button type="info"><svg-icon icon-class="account" size="1.2em"/>本地图标</el-button>
  </div>
</template>

