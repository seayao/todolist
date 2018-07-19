<template>
  <div>
    <slot name="left"></slot>
    <span>{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style scoped>

</style>
