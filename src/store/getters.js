export default {
  allSize(state) {
    return state.todos.length
  },
  completeSize(state) {
    return state.todos.reduce((total, todo) => total + (todo.isComplete ? 1 : 0), 0)
  },
  isAllSelect(state, getters) {
    return getters.completeSize === getters.allSize && getters.allSize
  }
}
