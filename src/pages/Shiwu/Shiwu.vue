<template>
  <div class="shiwu-wrap">
    <header class="hd">
      <div class="top-bar">
        <a href="/" class="icon-home"></a>
        <a href="/" class="icon-logo-wrap">
          <i class="icon-logo"></i>
        </a>
        <div class="right">
          <a href="/" class="search">
            <i class="icon-search"></i>
          </a>
          <a href="/" class="cart">
            <i class="icon-cart"></i>
          </a>
        </div>
      </div>
    </header>
    <div class="content-wrap">
      <Banner/>
      <Channel/>
      <Recommend/>
      <TenFive/>
      <ZhenP/>
      <LOOK/>
      <FindMore/>
    </div>
  </div>
</template>

<script>
  import Banner from '../../components/Shiwu/Banner/Banner'
  import Channel from '../../components/Shiwu/Channel/Channel'
  import Recommend from '../../components/Shiwu/Recommend/Recommend'
  import TenFive from '../../components/Shiwu/TenFive/TenFive'
  import ZhenP from '../../components/Shiwu/ZhenP/ZhenP'
  import LOOK from '../../components/Shiwu/LOOK/LOOK'
  import FindMore from '../../components/Shiwu/FindMore/FindMore'

  export default {
    name: "msite",
    components: {
      Banner,
      Channel,
      Recommend,
      TenFive,
      ZhenP,
      LOOK,
      FindMore
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .shiwu-wrap
    padding-bottom (98/$rem)
    background-color #F4F4F4
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

    .content-wrap
      margin-top (88/$rem)  //因为头部固定定位了
</style>
