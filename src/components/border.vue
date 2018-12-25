<template>
  <div id="border">
    <h4>手机端1像素边框</h4>
    <div class="border border-1px">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>

</template>
<script>
  export default {
    name: "border"
  }
</script>
<style lang="stylus">
  /* 貌似只能在这里引用才会调用stylus中定义的方法 */
  @import "../assets/css/func.styl"
  #border
    margin: 20px 2px
  .border
    margin-top: 20px
    border-x(#e9e9e9, 2px, 2px)
    ul
      margin-left: 10px;
      border-left: 3px solid #e6e6e6
    li
      padding-left: 6px
</style>
