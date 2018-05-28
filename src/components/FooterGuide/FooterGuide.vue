<template>
  <footer>
    <span class="guide_item" @click="goto('/msite')">
      <i class="tabBar msite" :class="{on: isCurrent('/msite')}"></i>
      <span class="txt" :class="{on: isCurrent('/msite')}">首页</span>
    </span>
    <span class="guide_item" @click="goto('/shiwu')">
      <i class="tabBar shiwu" :class="{on: isCurrent('/shiwu')}"></i>
      <span class="txt" :class="{on: isCurrent('/shiwu')}">识物</span>
    </span>
    <span class="guide_item" @click="goto('/category')">
      <i class="tabBar category" :class="{on: isCurrent('/category')}"></i>
      <span class="txt" :class="{on: isCurrent('/category')}">分类</span>
    </span>
    <span class="guide_item shop" @click="goto('/shopCart')">
      <i class="tabBar shopCart" :class="{on: isCurrent('/shopCart')}"></i>
      <span class="txt" :class="{on: isCurrent('/shopCart')}">购物车</span>
    </span>
    <span class="guide_item" @click="goto('/personal')">
      <i class="tabBar personal" :class="{on: isCurrent('/personal')}"></i>
      <span class="txt" :class="{on: isCurrent('/personal')}">个人</span>
    </span>
  </footer>
</template>

<script>
  export default {
    name: "footer-guide",
    methods: {
      isCurrent (path) {
        return this.$route.path === path
      },
      goto (path) {
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  footer
    font-size 0rem
    display flex
    align-items center
    justify-content space-around
    flex-flow row nowrap
    position fixed
    z-index 5
    left 0
    bottom 0
    width 100%
    height (98/$rem)
    background-color #fafafa
    border-top 1px solid #d9d9d9
    .guide_item
      text-align center
      display inline-block
      width (48/$rem)
      position relative
      &.shop
        width (72/$rem)
      .tabBar
        display inline-block
        background-image url("./images/footer.png")
        background-repeat no-repeat
        background-size (40/$rem 490/$rem)
        width (40/$rem)
        height (40/$rem)
        vertical-align middle
        &.msite
          background-position (0 -250/$rem)
          &.on
            background-position (0 -200/$rem)
        &.shiwu
          background-position (0 -350/$rem)
          &.on
            background-position (0 -300/$rem)
        &.category
          background-position (0 -150/$rem)
          &.on
            background-position (0 -100/$rem)
        &.shopCart
          background-position (0 -50/$rem)
          &.on
            background-position (0 0)
        &.personal
          background-position (0 -450/$rem)
          &.on
            background-position (0 -400/$rem)
      .txt
        font-size (24/$rem)
        text-align center
        display block
        color #666
        margin-top (7/$rem)
        line-height 1
        &.on
          color #DA989B
</style>
