
import {RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS
  } from './mutation_types'

import {reqHeadCateList,
  reqFocusList,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList
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
  }
}
