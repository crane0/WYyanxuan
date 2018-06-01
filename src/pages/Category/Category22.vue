<template>
  <div class="category-wrap">
    <div class="header-wrap">
      <div class="header">
        <div class="category-hd">
          <div class="search">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共9723款好物</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cate-nav">
      <div class="scroll-container">
        <ul class="list">
          <li class="item" :class="{active: category.id === currentIndex}" v-for="(category, index) in categorys"
              :key="index" @click="goto(category)">
            <a href="javascript:;" class="txt">{{category.name}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="catelist-wrap">
      <div class="banner" :style="{backgroundImage:'url('+imgCategory.bannerUrl+')'}"></div>
      <div class="catelist">
        <div class="hd">
          <span class="txt">
            <span class="txt1">{{imgCategory.name}}</span>
            <span class="txt2">分类</span>
          </span>
        </div>
        <div class="content">
          <li class="content-item" v-for="(cate, index) in currentCategory" :key="index">
            <a href="/">
              <div class="lazy-img">
                <img :src="cate.wapBannerUrl" alt="">
              </div>
              <div class="name">{{cate.name}}</div>
            </a>
          </li>
          <!--<li class="content-item">-->
            <!--<a href="/">-->
              <!--<div class="lazy-img">-->
                <!--<img src="./images/item.png" alt="">-->
              <!--</div>-->
              <!--<div class="name">床品件套</div>-->
            <!--</a>-->
          <!--</li>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name: "category",
    data () {
      return {
        currentCategory: [],
        imgCategory: [],
        categoryId: 1005000
      }
    },
    computed: {
      ...mapState(['categorys']),

      currentIndex () {
        return this.categoryId
      }
    },
    mounted () {
      this.$store.dispatch('getCategorys', () => {
        this.currentCategory = this.findId().subCateList
        this.imgCategory = this.findId()
        this.$nextTick(() => {
          new BScroll('.scroll-container', {
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
          })
        })
      })

    },
    methods: {
      goto (category) {
        this.currentCategory = category.subCateList
        this.categoryId = category.id
        this.imgCategory = category
      },
      findId () {
        return this.categorys.find((category, index) => {
          return category.id === this.categoryId
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .category-wrap
    .header-wrap
      height (88/$rem)    //包一层，为了不使固定定位下的元素，钻进去
      .header
        position fixed
        left 0
        top 0
        z-index 1
        width 10rem
        background-color #fff
        .category-hd
          bottom-border-1px(gray)
          padding (0 30/$rem)
          height (88/$rem)
          display flex
          align-items center
          .search
            display flex
            justify-content center
            align-items center
            background-color #ededed
            width 100%
            height (56/$rem)
            border-radius (8/$rem)
            font-size (28/$rem)
            .icon
              display inline-block
              margin-right (10/$rem)
              width (28/$rem)
              height (28/$rem)
              background-image url("./images/search.png")
              background-size 100% 100%
              background-repeat no-repeat
    .cate-nav
      position fixed
      left 0
      top (88/$rem)
      width (162/$rem)
      background-color #fff
      height 100%
      .scroll-container
        position absolute   //加这个，是为了实现高度不使内容撑开。副作用是，要一层层的根据包含块找height的百分比
        width 100%
        height 95%
        .list
          right-border-1px(gray)
          padding (40/$rem 0 138/$rem)
          .item
            margin-top (40/$rem)
            height (50/$rem)
            width 100%
            text-align center
            &:first-child
              margin-top 0
            &.active
              position relative
              &:before
                content ''
                position absolute
                top 0
                left 0
                bottom 0
                width (6/$rem)
                background-color #ab2b2b
              .txt
                font-size (36/$rem)
                color #ab2b2b
            .txt
              display block
              font-size (28/$rem)
              line-height (50/$rem)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #333
    .catelist-wrap
      margin-left (162/$rem)
      padding (30/$rem 30/$rem 21/$rem)
      .banner
        background center no-repeat #f4f4f4
        background-image url("./images/banner.jpg")
        width 100%
        height (192/$rem)
        background-size cover
        border-radius (4/$rem)
      .catelist
        .hd
          font-size (24/$rem)
          height (108/$rem)
          color #333
          display flex
          align-items center
          justify-content center
          .txt
            display flex
            align-items center
            justify-content center
            padding (0 8/$rem)
            color #7f7f7f
            line-height (30/$rem)
            font-size (24/$rem)
            &::before, &::after
              content ''
              display inline-block
              width (24/$rem)
              height 1px
              background-color #7f7f7f
            .txt1
              margin-left (8/$rem)
            .txt2
              margin-right (8/$rem)

        .content
          .content-item
            display inline-block
            margin-right (34/$rem)
            width (144/$rem)
            vertical-align top    //为了lazy-img
            &:nth-child(3n)
              margin-right (-10/$rem)
            a
              .lazy-img
                width (144/$rem)
                height (144/$rem)
                /*background url("./images/lazy.png") center no-repeat*/
                img
                  width 100%
                  height 100%
              .name
                height (72/$rem)
                text-align center
                color #333
                line-height (34/$rem)
                font-size (24/$rem)
</style>
