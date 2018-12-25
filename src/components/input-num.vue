<template>
  <div>
    <div>{{num}}</div>
    <num-input v-model="num" style="width: 50%;"></num-input>
  </div>
</template>
<script>
  export default {
    name: "input-num",
    data() {
      return {
        num: 0
      }
    }
  }
</script>
<style lang="stylus">
  .ivu-form .ivu-form-item-label
    font-size: 16px
  .ivu-form-item-content
    font-size: 16px
</style>
