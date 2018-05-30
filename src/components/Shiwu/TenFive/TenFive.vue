<template>
  <div class="tenfive-wrap">
    <div class="inner">
      <div class="title">十点一刻</div>
      <div class="swiper-container">
        <ul class="list swiper-wrapper">
          <a href="/" class="item swiper-slide" v-for="(tenfifteen, index) in tenfifteens" :key="index">
            <div class="line-title">
              <span class="line-title-content">今日话题</span>
            </div>
            <div class="item-title">{{tenfifteen.title}}</div>
            <div class="desc">{{tenfifteen.desc}}</div>
            <div class="join-info">
              <div class="join-inner">
                <div class="avatars">
                  <div class="avatar" v-for="(partic, index) in tenfifteen.participantAvatar" :key="index">
                    <img class="avatar-img" :src="partic ? partic : '/images/01.png'" alt="">
                  </div>
                  <div class="avatar">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </div>
                </div>
                <div class="join">
                  <span>{{tenfifteen.participantNum}}</span>
                  <span>人参与话题</span>
                </div>
              </div>
            </div>
          </a>
          <a href="/" class="item swiper-slide">
            <div class="last-inner">
              <span class="txt">查看全部话题</span>
              <i class="icon-right"></i>
            </div>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: "tenfive",
    computed: {
      ...mapState(['tenfifteens'])
    },
    mounted () {
      this.$store.dispatch('getTenfifteens', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            initialSlide: 0,
            autoheight: true,   //自动填充高度
            slidesPerView: 'auto',  //保证在一页中，slide有空余时，下一个slide填补一部分
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .tenfive-wrap
    padding (0 30/$rem 40/$rem)
    margin-bottom (20/$rem)
    //height (531/$rem)
    background-color #fff
    .inner
      .title
        background-color #fff
        text-align center
        font-size (32/$rem)
        height (120/$rem)
        line-height (120/$rem)
      .swiper-container
        .list
          display flex
          .item
            position relative
            background-image url("./images/bg.png")
            text-align center
            color #333
            padding (38/$rem 40/$rem 79/$rem)
            margin-right (30/$rem)
            width (580/$rem)
            height (411/$rem)
            .line-title
              display flex
              align-items center
              justify-content center
              padding (0 8/$rem)
              color #7f7f7f
              line-height (30/$rem)
              font-size (20/$rem)
              margin-bottom (40/$rem)
              &::before, &::after
                content ''
                display block
                width (24/$rem)
                height 1px
                background-color #7f7f7f
              .line-title-content
                margin (0 8/$rem)
            .item-title
              font-weight 700
              margin-bottom (14/$rem)
              font-size (36/$rem)
            .desc
              line-height 1.5
              font-size (28/$rem)
            .join-info
              position absolute
              bottom (76/$rem)
              text-align center
              width (500/$rem)
              .join-inner
                display inline-block
                overflow hidden
                .avatars
                  float left
                  margin-right (16/$rem)
                  .avatar
                    border 1px solid #fff
                    float left
                    border-radius 50%
                    overflow hidden
                    height (48/$rem)
                    width (48/$rem)
                    .avatar-img
                      display inline-block
                      height 100%
                      width 100%
                      vertical-align top
                    &:last-child
                      border 2px solid #fff
                      background-color #d9d9d9
                      margin-left (-6/$rem)
                      display flex
                      justify-content center
                      align-items center
                      .dot
                        display inline-block
                        border-radius 50%
                        width (6/$rem)
                        height (6/$rem)
                        margin-right (4/$rem)
                        background-color #fff

                .join
                  float left
                  color #7f7f7f
                  line-height (48/$rem)
                  font-size (24/$rem)

            &:last-child
              position relative
              height (384/$rem)
              padding 0
              margin-right 0
              background-color #fafafa
              .last-inner
                position absolute
                top 0
                bottom 0
                left 0
                right 0
                margin auto
                width (240/$rem)
                height (38/$rem)
                align-items center
                display flex
                font-size 0
                .txt
                  line-height (38/$rem)
                  font-size (32/$rem)
                  margin-right (18/$rem)
                  color #7f7f7f
                .icon-right
                  display inline-block
                  background-image url("./images/right.png")
                  background-repeat no-repeat
                  background-size 100% 100%
                  width (30/$rem)
                  height (30/$rem)
                  vertical-align middle

</style>
