<template>
  <div>
    <div class="limit-time">
      <a href="/">
        <div class="time-wrap">
          <div class="left-item">
            <div class="title">严选限时购</div>
            <span class="count-down">
              <span class="hours">01</span>
              <span class="colon">:</span>
              <span class="mins">04</span>
              <span class="colon">:</span>
              <span class="secs">19</span>
            </span>
            <div class="next-title">
              <span>
                <span>下一场</span>
                <span>{{flashSaleIndexVO.nextStartTime | data-format}}</span>
                <span>开始</span>
              </span>
            </div>
          </div>
          <div class="right-item">
            <img :src="flashSaleIndexVO.primaryPicUrl" alt="">
            <div class="price">
              <div class="price-now">
                <span class="rmb1">￥</span>
                <span>{{flashSaleIndexVO.activityPrice}}</span>
              </div>
              <div class="price-before">
                <span class="rmb2">￥</span>
                <span>{{flashSaleIndexVO.originPrice}}</span>
              </div>
            </div>
          </div>

        </div>
      </a>
    </div>
    <div class="welfare">
      <a href="/" :style="{backgroundImage: 'url('+flashSaleIndexVO.saleIndexVO.picUrl+')' }"></a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "msite-limit-time",
    computed: {
      ...mapState(['flashSaleIndexVO'])
    },
    mounted () {
      this.$store.dispatch('getFlashSaleIndexVO')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .limit-time
    .time-wrap
      display flex
      background-color #fff
      padding (30/$rem 40/$rem 30/$rem 56/$rem)
      height (380/$rem)
      margin-bottom (20/$rem)
      .left-item
        display flex
        flex-direction column
        padding-top (80/$rem)
        flex 1
        .title
          font-size (36/$rem)
          line-height (36/$rem)
          margin-bottom (24/$rem)
          color #333
          letter-spacing (12/$rem)
        .count-down
          font-size 0
          .hours, .mins, .secs
            display inline-block
            line-height (56/$rem)
            text-align center
            width (62/$rem)
            height (56/$rem)
            font-size (32/$rem)
            color #fff
            background-color #444
            border-radius (40/$rem)
          .colon
            display inline-block
            text-align center
            color #333
            font-size (30/$rem)
            font-weight 700
            width (20/$rem)
        .next-title
          margin-top (40/$rem)
          color #333
          font-size (24/$rem)
          line-height (24/$rem)
          height (24/$rem)
      .right-item
        width (320/$rem)
        height (320/$rem)
        position relative
        img
          width 100%
          height 100%
        .price
          height (96/$rem)
          width (96/$rem)
          background-color #F59524
          color #fff
          position absolute
          right (20/$rem)
          bottom (36/$rem)
          border-radius 100%
          text-align center
          display flex
          flex-direction column
          justify-content center
          .price-now
            font-size (28/$rem)
            line-height (28/$rem)
            height (28/$rem)
            .rmb1
              font-size (24/$rem)
          .price-before
            font-size (28/$rem)
            line-height (28/$rem)
            height (28/$rem)
            .rmb1
              font-size (20/$rem)


  .welfare
    width 10rem
    height 4rem
    margin-bottom (20/$rem)
    a
      display block
      width 100%
      height 100%
      background-image url("./images/welfare/01.jpg")
      background-position center
      background-repeat no-repeat

</style>
