<template>
  <ul>
    <li @click="goto('/home')" :class="{active:$route.path==='/home'}">首页</li>
    <li @click="goto('/todolist')" :class="{active:$route.path==='/todolist'}">todolist</li>
  </ul>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped>
  ul {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #d9d9d9;
  }

  ul li {
    float: left;
    width: 50%;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
  }

  .active {
    color: green;
    background-color: #eaeaea;
  }
</style>
