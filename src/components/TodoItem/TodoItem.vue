<template>
  <li>
    <input type="checkbox" v-model="todo.isComplete">
    <span>{{todo.title}}</span>
    <button @click="delTodo">x</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      index: Number
    },
    data() {
      return {
        bgColor: '#fff'
      }
    },
    methods: {
      delTodo() {
        if (window.confirm(`确定删除${this.todo.title}吗？`)) {
          this.$store.dispatch('delTodo', this.index)
        }
      }
    }
  }
</script>

<style scoped>

</style>
