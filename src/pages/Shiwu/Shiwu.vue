<template>
  <div class="shiwu-wrap">
    <SLHeader/>
    <div class="content-wrap">
      <Banner/>
      <Channel/>
      <Recommend/>
      <TenFive/>
      <ZhenP/>
      <LOOK/>
      <FindMore/>
    </div>
  </div>
</template>

<script>
  import SLHeader from '../../components/SLHeader/SLHeader'
  import Banner from '../../components/Shiwu/Banner/Banner'
  import Channel from '../../components/Shiwu/Channel/Channel'
  import Recommend from '../../components/Shiwu/Recommend/Recommend'
  import TenFive from '../../components/Shiwu/TenFive/TenFive'
  import ZhenP from '../../components/Shiwu/ZhenP/ZhenP'
  import LOOK from '../../components/Shiwu/LOOK/LOOK'
  import FindMore from '../../components/Shiwu/FindMore/FindMore'

  export default {
    name: "msite",
    components: {
      SLHeader,
      Banner,
      Channel,
      Recommend,
      TenFive,
      ZhenP,
      LOOK,
      FindMore
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .shiwu-wrap
    padding-bottom (98/$rem)
    background-color #F4F4F4
    .content-wrap
      margin-top (88/$rem)  //因为头部固定定位了
</style>
