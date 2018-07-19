import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import TodoList from '@/pages/TodoList/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/todolist',
      component: TodoList
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
