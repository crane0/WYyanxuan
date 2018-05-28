<template>
  <section>
    <header>
      <a href="/" class="logo"></a>
      <div class="search">
        <i class="icon"></i>
        <span class="serach-content">搜索商品，共97565款好物</span>
      </div>
    </header>
    <div class="scroll">
      <div class="scroll-container">
        <div class="list">
          <div class="tab active">
            <span class="txt">推荐</span>
          </div>
          <div class="tab">
            <span class="txt">居家</span>
          </div>
          <div class="tab">
            <span class="txt">配件</span>
          </div>
          <div class="tab">
            <span class="txt">服装</span>
          </div>
          <div class="tab">
            <span class="txt">电器</span>
          </div>
          <div class="tab">
            <span class="txt">洗护</span>
          </div>
          <div class="tab">
            <span class="txt">饮食</span>
          </div>
          <div class="tab">
            <span class="txt">餐厨</span>
          </div>
          <div class="tab">
            <span class="txt">婴童</span>
          </div>
          <div class="tab">
            <span class="txt">文体</span>
          </div>
          <div class="tab">
            <span class="txt">特色区</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "msite",

    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll('.scroll-container', {
          probeType: 2,  // 因为惯性滑动不会触发
          click: true,   //默认是禁止点击的
          scrollX: true
        })
        console.log(this.scroll)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  section
    header
      display flex
      align-items center
      padding (16/$rem 30/$rem)
      .logo
        width (138/$rem)
        height (40/$rem)
        background-image url("./images/logo.png")
        display inline-block
        margin-right (20/$rem)
        background-position center
        background-size cover
      .search
        display flex
        flex-grow 1
        align-items center
        justify-content center
        height: (56/$rem)
        font-size: (28/$rem)
        background-color: #ededed;
        border-radius: (8/$rem)
        .icon
          display inline-block
          vertical-align middle
          background-image url("./images/search.png")
          background-repeat no-repeat
          background-size (100% 100%)
          width (28/$rem)
          height (28/$rem)
          margin-right (10/$rem)
        .serach-content
          color #666
          display block
    .scroll
      background #fff
      .scroll-container
        overflow hidden   //保证头部不跟着动，也就是说，滑动时宽度不会超出屏幕
        display flex  //为了保证list的宽度，一直在一行
        .list
          display flex
          flex-shrink 0 //保证文字不换行
          padding (0 30/$rem)
          background #fff
          margin-top (-26/$rem)
          .tab
            margin-left (48/$rem)
            position relative
            &.active
              color #b4282d
              margin-left 0
              &::after
                content ''
                position absolute
                left 0
                bottom 0
                width 100%
                height (4/$rem)
                background-color #b4282d
            .txt
              padding (0 16/$rem)
              line-height (60/$rem)
              font-size (28/$rem)
              text-align center


</style>
