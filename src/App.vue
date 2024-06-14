<template>
  <!-- 路由列表 -->
  <ul class="list-container">
    <li v-for="route in routesList" :key="route.path">
      <router-link :to="route.path">{{ route.meta.title }}</router-link>
    </li>
  </ul>

  <!-- 渲染路由组件 -->
  <router-view/>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {ref} from "vue";

const routesList = ref([])

const router = useRouter();

routesList.value = router.getRoutes();
</script>

<style >

.list-container {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 25px;
}

li {
  margin-right: 20px;
}

li a{
  color: #000;
  text-decoration: underline;
}

li .router-link-active {
  color: #409eff;
  font-size: 25px;
  text-decoration: inherit;
}
</style>