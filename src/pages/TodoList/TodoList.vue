<template>
  <div>
    <Header title="todolist">
      <i class="iconfont icon-todo_list" slot="left"></i>
    </Header>
    <TodoHeader/>
    <TodoMain/>
    <TodoFooter/>
  </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import TodoHeader from '../../components/TodoHeader/TodoHeader'
  import TodoMain from '../../components/TodoMain/TodoMain'
  import TodoFooter from '../../components/TodoFooter/TodoFooter'

  export default {
    mounted() {
      this.$store.dispatch('getTodos')
    },
    components: {
      Header,
      TodoHeader,
      TodoMain,
      TodoFooter
    }
  }
</script>

<style scoped>

</style>
