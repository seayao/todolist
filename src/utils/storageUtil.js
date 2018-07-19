const TODOLIST_KEY = 'TODOLIST_KEY'

export default {
  fetchData() {
    //获取数据
    return JSON.parse(window.localStorage.getItem(TODOLIST_KEY) || '[]')
  },
  saveData(val) {
    //保存数据
    window.localStorage.setItem(TODOLIST_KEY, JSON.stringify(val))
  }
}
