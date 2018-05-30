<template>
  <div class="recommend-wrap">
    <div class="container">
      <div class="title">为你推荐</div>
      <a href="/" class="post-item">
        <div class="img-container" v-if="recommend.recommendBanner" :style="{backgroundImage:'url('+recommend.recommendBanner.picUrl+')'}">
          <div class="tag">
            <div class="content">{{recommend.recommendBanner.nickname}}</div>
          </div>
        </div>
        <div class="topic-info">
          <div class="line1">
            <div class="line1-title" v-if="recommend.recommendBanner">{{recommend.recommendBanner.title}}</div>
            <div class="price">
              <span class="num" v-if="recommend.recommendBanner">{{recommend.recommendBanner.priceInfo}}</span>
              <span class="unit">元起</span>
            </div>
          </div>
          <div class="line2" v-if="recommend.recommendBanner">{{recommend.recommendBanner.subtitle}}</div>
        </div>
      </a>
      <a href="/" class="minor-item" v-for="(rec, index) in recommend.recommends" :key="index">
        <div class="minor-topic">
          <div class="author">
            <div class="avatar">
              <img :src="rec.avatar" alt="">
            </div>
            <div class="nickname">{{rec.nickname}}</div>
          </div>
          <div class="line1">{{rec.title}}</div>
          <div class="line2">{{rec.subtitle}}</div>
        </div>
        <div class="minor-pic">
          <div class="img-container" :style="{backgroundImage:'url('+rec.picUrl+')'}">
            <div class="tag">
              <div class="content">{{rec.typeName}}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "recommend",
    computed: {
      ...mapState(['recommend'])
    },
    mounted () {
      this.$store.dispatch('getRecommend')
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .recommend-wrap
    padding (0 30/$rem 40/$rem)
    margin-bottom (20/$rem)
    background-color #fff
    font-size 0
    .container
      >.title
        text-align center
        font-size (32/$rem)
        line-height (120/$rem)
        height (120/$rem)
      .post-item
        display block
        color #333
        border 1px solid #d9d9d9
        border-radius (8/$rem)
        margin-bottom (30/$rem)
        .img-container
          position relative
          height (386/$rem)
          border-radius (8/$rem 8/$rem 0 0)
          -webkit-background-size cover
          background-repeat no-repeat
          background-position center
          .tag
            position absolute
            top (20/$rem)
            left (20/$rem)
            .content
              display inline-block
              padding (0 16/$rem)
              height (36/$rem)
              line-height (36/$rem)
              background-color rgba(255,255,255,.9)
              border 1px solid #d9d9d9
              border-radius (20/$rem)
              color #333
              font-size (24/$rem)


        .topic-info
          padding (24/$rem 20/$rem 67/$rem)
          .line1
            display flex
            justify-content space-between
            align-items center
            line-height 1.2
            margin-bottom (19/$rem)
            .line1-title
              flex 1
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin-right (30/$rem)
              font-size (36/$rem)
            .price
              min-width (115/$rem)
              text-align center
              font-size (36/$rem)
          .line2
            font-size (28/$rem)
            line-height 1.2
            color #7f7f7f
            white-space nowrap
            overflow hidden
            text-overflow ellipsis


      .minor-item
        display flex
        border 1px solid #d9d9d9
        border-radius (4/$rem)
        margin-bottom (30/$rem)
        color #333
        background-color #fff
        .minor-topic
          flex 1
          display flex
          flex-direction column
          justify-content center
          padding-left (20/$rem)
          padding-right (30/$rem)
          .author
            display flex
            align-items center
            height (48/$rem)
            font-size (20/$rem)
            margin-bottom (25/$rem)
            .avatar
              border 1px solid #d9d9d9
              margin-right (8/$rem)
              border-radius 50%
              overflow hidden
              width (48/$rem)
              height (48/$rem)
              img
                border 0
                display block
                height 100%
                width 100%
            .nickname
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #333
              line-height (24/$rem)
              font-size (20/$rem)
          .line1
            font-size (32/$rem)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin-bottom (14/$rem)
            margin-right (40/$rem)
            line-height 1.2
          .line2
            line-height 1.5
            overflow hidden
            text-overflow ellipsis
            color #7f7f7f
            font-size (24/$rem)
        .minor-pic
          width (280/$rem)
          height (272/$rem)
          .img-container
            position relative
            width 100%
            height 100%
            background-color #f4f4f4
            background-position center
            background-repeat no-repeat
            .tag
              position absolute
              top (10/$rem)
              left (10/$rem)
              .content
                display inline-block
                padding (0 16/$rem)
                height (36/$rem)
                line-height (36/$rem)
                background-color rgba(255,255,255,.9)
                border 1px solid #d9d9d9
                border-radius (20/$rem)
                color #333
                font-size (24/$rem)
</style>
