<template>
  <div id="wrap-container">
    <!--头部导航-->
    <MsiteHeader/>

    <!--轮播图-->
    <MsiteSlide/>

    <!--品牌厂商-->
    <MsiteBrandProduce/>

    <!--新品首发-->
    <MsiteNewProduct/>

    <!--好物精选-->
    <MsiteBetterGood/>

    <!--限时购-->
    <!--福利社-->
    <MsiteLimitTime/>

    <!--专题精选-->
    <MsiteTopic/>

    <!--居家好物-->
    <MsiteJujia/>
  </div>
</template>

<script>

  import MsiteHeader from '../../components/MsiteHeader/MsiteHeader'
  import MsiteSlide from '../../components/MsiteSlide/MsiteSlide'
  import MsiteBrandProduce from '../../components/MsiteBrandProduce/MsiteBrandProduce'
  import MsiteNewProduct from '../../components/MsiteNewProduct/MsiteNewProduct'
  import MsiteBetterGood from '../../components/MsiteBetterGood/MsiteBetterGood'
  import MsiteLimitTime from '../../components/MsiteLimitTime/MsiteLimitTime'
  import MsiteTopic from '../../components/MsiteTopic/MsiteTopic'
  import MsiteJujia from '../../components/MsiteJujia/MsiteJujia'

  export default {
    name: "msite",


    components: {
      MsiteHeader,
      MsiteSlide,
      MsiteBrandProduce,
      MsiteNewProduct,
      MsiteBetterGood,
      MsiteLimitTime,
      MsiteTopic,
      MsiteJujia
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #wrap-container
    padding-bottom (98/$rem)
    background-color #F4F4F4

</style>
