<template>
  <div class="look-wrap">
    <div class="title">严选LOOK</div>
    <a href="/" class="content">
      <img :src="yxLook.picUrl" alt="" class="scene-pic">
      <div class="topic-info">
        <div class="author-container">
          <div class="avatar">
            <img :src="yxLook.avatar" alt="">
          </div>
          <div class="nickname">{{yxLook.nickname}}</div>
        </div>
        <div class="desc">{{yxLook.content}}</div>
      </div>
      <div class="tag">
        <transition name="fade">
          <div v-show="show" class="center"></div>
        </transition>
      </div>

    </a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "look",
    data () {
      return {
        show: true
      }
    },
    computed: {
      ...mapState(['yxLook'])
    },
    mounted () {
      this.$store.dispatch('getYxLook', () => {
        setInterval(() => {
          this.show = !this.show
        },600)
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .look-wrap
    .title
      background-color #fff
      text-align center
      font-size (32/$rem)
      height (120/$rem)
      line-height (120/$rem)
    .content
      display block
      color #333
      position relative
      .scene-pic
        width 100%
        height 100%
      .topic-info
        padding (24/$rem 30/$rem 46/$rem)
        background-color #fff
        .author-container
          display flex
          align-items center
          margin-bottom (24/$rem)
          height (48/$rem)
          font-size (24/$rem)
          .avatar
            width (48/$rem)
            height (48/$rem)
            border-radius 50%
            overflow hidden
            border 1px solid #d9d9d9
            margin-right (8/$rem)
        .desc
          color #7f7f7f
          line-height 1.6
          font-size (28/$rem)
      .tag
        position absolute
        top (100/$rem)
        left (244/$rem)
        width (16/$rem)
        height (16/$rem)
        border-radius 50%
        background-color #f48f18
        .center
          position absolute
          width (16/$rem)
          height (16/$rem)
          border-radius 50%
          background-color #f48f18
          &.fade-leave-active
            transition all 1s
          &.fade-leave-to
            opacity 0
            transform scale(4)
</style>
