<template>
  <div v-if="isSuccess">
    <div v-if="allSize">
      <input type="checkbox" v-model="isAllSelect">
      <span>{{completeSize}}/{{allSize}}</span>
      <button v-if="completeSize" @click="delComplete">删除已经完成的</button>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState(['isSuccess']),
      ...mapGetters(['completeSize', 'allSize']),
      isAllSelect: {
        get() {
          return this.$store.getters.isAllSelect
        },
        set(val) {
          this.$store.dispatch('selectAllTodos', val)
        }
      }
    },
    methods: {
      ...mapActions(['delComplete'])
    }
  }
</script>

<style scoped>

</style>
