<template>
  <div>
    <h3 v-if="!isSuccess">请求中</h3>
    <div v-else>
      <ul v-if="todos.length">
        <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"/>
      </ul>
      <p v-else>暂无数据</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import TodoItem from '../TodoItem/TodoItem'
  import storageUtil from '../../utils/storageUtil'

  export default {
    computed: {
      ...mapState(['todos', 'isSuccess'])
    },
    watch: {
      todos: {
        deep: true,
        handler: storageUtil.saveData
      }
    },
    components: {
      TodoItem
    }
  }
</script>

<style scoped>

</style>
