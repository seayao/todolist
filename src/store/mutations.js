import * as types from './mutation-types'

export default {
  // 添加todo
  [types.ADD_TODO](state, {todo}) {
    state.todos.unshift(todo)
  },
  // 删除指定todo
  [types.DEL_TODO](state, {index}) {
    state.todos.splice(index, 1)
  },
  // 选中所有todos
  [types.SELECT_ALL_TODOS](state, {isAllSelect}) {
    state.todos.forEach(v => v.isComplete = isAllSelect)
  },
  // 删除已经完成的todo
  [types.DEL_COMPLETE](state) {
    state.todos = state.todos.filter(todo => !todo.isComplete)
  },
  //请求数据
  [types.GET_TODOS](state, {todos,isSuccess}) {
    state.todos = todos
    state.isSuccess = isSuccess
  }
}
