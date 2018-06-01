<template>
  <header class="hd">
    <div class="top-bar">
      <router-link to="/msite" class="icon-home"></router-link>
      <router-link to="/msite" class="icon-logo-wrap">
        <i class="icon-logo"></i>
      </router-link>
      <div class="right">
        <a href="/" class="search">
          <i class="icon-search"></i>
        </a>
        <router-link to="/shopCart" class="cart">
          <i class="icon-cart"></i>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "slheader"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .hd
    position fixed!important
    left 0
    top 0
    width 100%
    height (87/$rem)
    z-index 2
    .top-bar
      background-color #fafafa
      height 100%
      padding (0 16/$rem 0 24/$rem)
      display flex
      align-items center
      justify-content space-between
      position relative
      .icon-home
        display inline-block
        vertical-align middle
        width (48/$rem)
        height (44/$rem)
        background-position (0 -74/$rem)
        background-size (172/$rem 398/$rem)
        background-repeat no-repeat
        background-image url("./images/xb.png")
      .icon-logo-wrap   //中间logo放在无宽高的容器中，不影响flex其他项目的布局
        display block
        .icon-logo
          display inline-block
          vertical-align middle
          position absolute
          left 0
          right 0
          bottom 0
          top 0
          margin auto
          background-position (0 -128/$rem)
          background-size (172/$rem 398/$rem)
          background-repeat no-repeat
          background-image url("./images/xb.png")
          height (54/$rem)
          width (172/$rem)
      .right
        margin-right (5/$rem)
        font-size 0
        .search
          .icon-search
            display inline-block
            vertical-align middle
            background-position (0 -334/$rem)
            background-size (172/$rem 398/$rem)
            background-repeat no-repeat
            background-image url("./images/xb.png")
            height (64/$rem)
            width (64/$rem)
        .cart
          .icon-cart
            display inline-block
            vertical-align middle
            background-position (0 0)
            background-size (172/$rem 398/$rem)
            background-repeat no-repeat
            background-image url("./images/xb.png")
            height (64/$rem)
            width (64/$rem)

</style>
