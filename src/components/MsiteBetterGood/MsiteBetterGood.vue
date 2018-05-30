<template>
  <div class="better-good">
    <div class="header">
      <a href="/" class="more">
        <span>人气推荐 · 好物精选</span>
        <div class="all">
            <span class="wrap">
              <span>查看全部</span>
              <i class="arrow-right"></i>
            </span>
        </div>
      </a>
    </div>

    <div class="product-container">
      <div class="swiper-inner3 swiper-container">
        <ul class="list swiper-wrapper">
          <li class="item swiper-slide" v-for="(popularItemList, index) in popularItemLists" :key="index">
            <a href="">
              <div class="img-wrap">
                <img :src="popularItemList.listPicUrl" alt="">
              </div>
              <span class="name">{{popularItemList.name}}</span>
              <span class="name-desc">{{popularItemList.simpleDesc}}</span>
              <div class="name-price">
                <span>￥</span>
                <span>{{popularItemList.retailPrice}}</span>
              </div>
            </a>
          </li>
          <li class="item more swiper-slide">
            <a href="">
              <span class="txt">查看全部</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {
    name: "msite-better-good",
    computed: {
      ...mapState(['popularItemLists'])
    },
    mounted () {
      this.$store.dispatch('getPopularItemLists', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-inner3', {
            autoheight: true,   //自动填充高度
            width: 280
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .better-good
    margin-bottom (20/$rem)
    background-color #fff
    .header
      background-image url("./images/newProduct/bg.png")
      background-size (10rem 260/$rem)
      height (260/$rem)
      margin-bottom (32/$rem)
      display flex
      align-items center
      justify-content center
      .more
        display block
        text-align center
        font-size (36/$rem)
        color #B4A078
        .all
          margin (16/$rem auto 0)
          width (240/$rem)
          height (56/$rem)
          font-size (28/$rem)
          line-height (56/$rem)
          background #F4E9CB
          position relative
          .wrap
            display inline-block
            width (128/$rem)
            .arrow-right
              background-image url("./images/newProduct/right.png")
              position absolute
              top (20/$rem)
              background-size (10/$rem 22/$rem)
              display inline-block
              height (22/$rem)
              width (10/$rem)
              margin-left (6/$rem)

    .product-container
      height (480/$rem)
      background-color #fff
      .swiper-inner3
        display flex
        overflow hidden
        .list
          display flex
          .item
            margin-left (30/$rem)
            width (280/$rem)
            &.more
              font-size 0
              height (280/$rem)
              line-height (280/$rem)
              text-align center
              border (10/$rem) solid #F4F4F4
              .txt
                font-size (28/$rem)
            a
              display block
              height 100%
              .img-wrap
                position relative
                border-radius (40/$rem)
                background-color #f4f4f4
                margin-bottom (20/$rem)
                height (280/$rem)
                img
                  display block
                  position absolute
                  top 0
                  left 0
                  width 100%
                  height 100%
              .name
                display block
                font-size (28/$rem)
                line-height (34/$rem)
                padding (0 10/$rem)
                margin (10/$rem 0)
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                color #333
              .name-desc
                display block
                font-size (24/$rem)
                line-height (30/$rem)
                padding (0 10/$rem)
                margin-bottom (14/$rem)
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                color #7f7f7f
              .name-price
                padding (0 10/$rem)
                font-size (28/$rem)
                color #b4282d


</style>
