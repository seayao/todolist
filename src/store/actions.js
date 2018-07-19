import * as types from './mutation-types'
import storageUtil from '../utils/storageUtil'

export default {
  addTodo({commit}, todo) {
    commit(types.ADD_TODO, {todo})
  },
  delTodo({commit}, index) {
    commit(types.DEL_TODO, {index})
  },
  selectAllTodos({commit}, isAllSelect) {
    commit(types.SELECT_ALL_TODOS, {isAllSelect})
  },
  delComplete({commit}) {
    commit(types.DEL_COMPLETE)
  },
  getTodos({commit}) {
    // 获取数据
    setTimeout(() => {
      //模拟ajax
      const todos = storageUtil.fetchData()
      const isSuccess = true
      //提交mutations
      commit(types.GET_TODOS, {todos, isSuccess})
    }, 1000)
  }
}
