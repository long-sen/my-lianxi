<template>
  <div id="app">
    <div>
      <router-link to="/home">首页</router-link> 
      <router-link to="/music">音乐</router-link> 
      <router-link to="/nav">导航</router-link> 
      <router-link to="/xuesheng">学生管理系统</router-link>
      <router-link to="/index">qq</router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
a{
  margin-right: 15px;
}
</style>
