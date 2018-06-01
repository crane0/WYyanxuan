<template>
  <div class="interLayer-wrap">
    <div class="layer-top">
      <img src="./images/top1.jpg" alt="">
      <img src="./images/top2.jpg" alt="">
    </div>
    <div class="layer-bottom">
      <img src="./images/bottom.jpg" alt="">
      <a href="" id="down-btn"></a>
      <a href="" id="backwap-btn"></a>
      <router-link to="/msite" id="backwap-btn"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "inter-layer"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .interLayer-wrap
    max-width 10rem
    background #eee
    position absolute
    top 0
    bottom 0
    .layer-top,.layer-bottom
      width 10rem
      margin 0 auto
      img
        vertical-align top
        width 100%
    .layer-bottom
      position relative
      #down-btn
        display block
        position absolute
        top (96/$rem)
        left (160/$rem)
        width (432/$rem)
        height (98/$rem)
      #backwap-btn
        display block
        position absolute
        top (230/$rem)
        left (246/$rem)
        width (254/$rem)
        height (30/$rem)
</style>
