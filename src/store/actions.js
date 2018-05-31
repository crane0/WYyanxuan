
import {RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_BANNERS,
  RECEIVE_COLUMNS,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEENS,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_FINDMORES,
  RECEIVE_CATEGORYS
  } from './mutation_types'

import {reqHeadCateList,
  reqFocusList,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqZhenpin,
  reqYxLook,
  reqFindMore,
  reqCategoryData
  } from '../api'

export default {
  async getHeadCateList({commit}) {
    const result = await reqHeadCateList()
    if (result.code === 0) {
      const headCates = result.data
      commit(RECEIVE_HEADCATES, {headCates})
    }
  },

  async getFocusList({commit}, callBack) {
    const result = await reqFocusList()
    if (result.code === 0) {
      const focusLists = result.data
      commit(RECEIVE_FOCUSLISTS, {focusLists})
    }
    callBack && callBack()
  },

  async getTagList({commit}) {
    const result = await reqTagList()
    if (result.code === 0) {
      const tagLists = result.data
      commit(RECEIVE_TAGLISTS, {tagLists})
    }
  },

  async getNewItemList({commit}, callBack) {
    const result = await reqNewItemList()
    if (result.code === 0) {
      const newItemLists = result.data
      commit(RECEIVE_NEWITEMLISTS, {newItemLists})
    }
    callBack && callBack()
  },

  async getPopularItemLists({commit}, callBack) {
    const result = await reqPopularItemList()
    if (result.code === 0) {
      const popularItemLists = result.data
      commit(RECEIVE_POPULARITEMLISTS, {popularItemLists})
    }
    callBack && callBack()
  },

  async getFlashSaleIndexVO({commit}) {
    const result = await reqFlashSaleIndexVO()
    if (result.code === 0) {
      const flashSaleIndexVO = result.data
      commit(RECEIVE_FLASHSALEINDEXVO, {flashSaleIndexVO})
    }
  },

  async getTopicLists({commit}, callBack) {
    const result = await reqTopicList()
    if (result.code === 0) {
      const topicLists = result.data
      commit(RECEIVE_TOPICLISTS, {topicLists})
    }
    callBack && callBack()
  },

  async getCateLists({commit}) {
    const result = await reqCateList()
    if (result.code === 0) {
      const cateLists = result.data
      commit(RECEIVE_CATELISTS, {cateLists})
    }
  },



  async getBanners({commit}, callBack) {
    const result = await reqBanner()
    if (result.code === 0) {
      const banners = result.data
      commit(RECEIVE_BANNERS, {banners})
    }
    callBack && callBack()
  },

  async getColumns({commit}, callBack) {
    const result = await reqColumn()
    if (result.code === 0) {
      const columns = result.data
      commit(RECEIVE_COLUMNS, {columns})
    }
    callBack && callBack()
  },

  async getRecommend({commit}) {
    const result = await reqRecommend()
    if (result.code === 0) {
      const recommend = result.data
      commit(RECEIVE_RECOMMEND, {recommend})
    }
  },

  async getTenfifteens({commit}, callBack) {
    const result = await reqTenfifteen()
    if (result.code === 0) {
      const tenfifteens = result.data
      commit(RECEIVE_TENFIFTEENS, {tenfifteens})
    }
    callBack && callBack()
  },

  async getZhenpin({commit}) {
    const result = await reqZhenpin()
    if (result.code === 0) {
      const zhenpin = result.data
      commit(RECEIVE_ZHENPIN, {zhenpin})
    }
  },

  async getYxLook({commit}, callBack) {
    const result = await reqYxLook()
    if (result.code === 0) {
      const yxLook = result.data
      commit(RECEIVE_YXLOOK, {yxLook})
    }
    callBack && callBack()
  },

  async getFindMores({commit}) {
    const result = await reqFindMore()
    if (result.code === 0) {
      const findMores = result.data
      commit(RECEIVE_FINDMORES, {findMores})
    }
  },



  async getCategorys({commit}, callBack) {
    const result = await reqCategoryData()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
    callBack && callBack()
  }
}
