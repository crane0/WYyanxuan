<template>
  <div class="catelist-wrap">
    <div class="banner" v-if="categorys[index]" :style="{backgroundImage:'url('+categorys[index].bannerUrl+')'}"></div>
    <div class="catelist">
      <div class="hd">
          <span class="txt">
            <span class="txt1" v-if="categorys[index]">{{categorys[index].name}}</span>
            <span class="txt2">分类</span>
          </span>
      </div>
      <div class="content" v-if="categorys[index]">
        <li class="content-item"  v-for="(cate, i) in categorys[index].subCateList" :key="i">
          <a href="/">
            <div class="lazy-img">
              <img :src="cate.wapBannerUrl" alt="">
            </div>
            <div class="name">{{cate.name}}</div>
          </a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "category-detail",
    props: {
      index: Number,
      categorys: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .catelist-wrap
    margin-left (162/$rem)
    padding (30/$rem 30/$rem 21/$rem)
    .banner
      background center no-repeat #f4f4f4
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
              /*background url("./img/lazy.png") center no-repeat*/
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
