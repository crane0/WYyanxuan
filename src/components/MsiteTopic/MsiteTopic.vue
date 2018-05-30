<template>
  <div class="topic-wrap">
    <header class="hd">
      <a href="/" class="more">
        <span>专题精选</span>
        <i class="icon"></i>
      </a>
    </header>

    <div class="topic-slide">
      <div class="topic-inner swiper-container">
        <ul class="list swiper-wrapper">
          <li class="item swiper-slide" v-for="(topicList, index) in topicLists" :key="index">
            <a href="/" class="img-wrap">
              <img :src="topicList.itemPicUrl" alt="">
            </a>
            <div class="content">
              <h4 class="title">{{topicList.title}}</h4>
              <!--这个不一定有-->
              <span class="price">
                  <span>{{topicList.priceInfo}}</span>
                  <span>元起</span>
                </span>
            </div>
            <div class="desc">{{topicList.subtitle}}</div>
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
    name: "msite-topic",
    computed: {
      ...mapState(['topicLists'])
    },

    mounted () {
      this.$store.dispatch('getTopicLists', () => {
        this.$nextTick(() => {
          new Swiper('.topic-inner', {
            autoheight: true,   //自动填充高度
            slidesPerView: 'auto',  //保证在一页中，slide有空余时，下一个slide填补一部分
          })
        })
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .topic-wrap
    margin-bottom (20/$rem)
    background-color #fff
    .hd
      display flex
      justify-content center
      height (110/$rem)
      font-size (32/$rem)
      .more
        color #333
        display flex
        align-items center
        .icon
          display inline-block
          width (30/$rem)
          height (30/$rem)
          background-image url("./images/right.png")
          background-repeat no-repeat
          background-size (100% 100%)
          margin-left (10/$rem)
          margin-top (5/$rem)
    .topic-slide
      padding (0 30/$rem 36/$rem)
      overflow hidden
      .list
        width (575/$rem)
        .item
          margin-right (20/$rem)
          .img-wrap
            display block
            height (322/$rem)
            width (575/$rem)
            margin-bottom (16/$rem)
            border-radius (8/$rem)
            overflow hidden
            img
              width 100%
              position relative
              left 50%
              transform translateX(-50%)
              border 0
          .content
            height (41/$rem)
            margin-bottom (2/$rem)
            width (575/$rem)
            .title
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              width (410/$rem)
              float left
              font-size (28/$rem)
            .price
              float right
              font-size (28/$rem)
              color #b4282d
          .desc
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-size (24/$rem)
            color #7F7F7F

</style>
