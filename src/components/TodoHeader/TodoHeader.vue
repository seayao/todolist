<template>
  <div>
    <input type="text" v-model="title" placeholder="输入后按回车键添加" @keyup.enter="addTodo">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addTodo() {
        if (!this.title) {
          return
        }
        const todo = {
          title: this.title,
          isComplete: false
        }
        //添加到todos
        this.$store.dispatch('addTodo',todo)
        //清空输入
        this.title = ''
      }
    }
  }
</script>

<style scoped>

</style>
