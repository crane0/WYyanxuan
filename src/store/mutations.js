
import Vue from 'vue'

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
  } from "./mutation_types";

export default {
  [RECEIVE_HEADCATES] (state, {headCates}) {
    state.headCates = headCates
  },
  [RECEIVE_FOCUSLISTS] (state, {focusLists}) {
    state.focusLists = focusLists
  },
  [RECEIVE_TAGLISTS] (state, {tagLists}) {
    state.tagLists = tagLists
  },
  [RECEIVE_NEWITEMLISTS] (state, {newItemLists}) {
    state.newItemLists = newItemLists
  },
  [RECEIVE_POPULARITEMLISTS] (state, {popularItemLists}) {
    state.popularItemLists = popularItemLists
  },
  [RECEIVE_FLASHSALEINDEXVO] (state, {flashSaleIndexVO}) {
    state.flashSaleIndexVO = flashSaleIndexVO
  },
  [RECEIVE_TOPICLISTS] (state, {topicLists}) {
    state.topicLists = topicLists
  },
  [RECEIVE_CATELISTS] (state, {cateLists}) {
    state.cateLists = cateLists
  },



  [RECEIVE_BANNERS] (state, {banners}) {
    state.banners = banners
  },

  [RECEIVE_COLUMNS] (state, {columns}) {
    state.columns = columns
  },

  [RECEIVE_RECOMMEND] (state, {recommend}) {
    state.recommend = recommend
  },

  [RECEIVE_TENFIFTEENS] (state, {tenfifteens}) {
    state.tenfifteens = tenfifteens
  },

  [RECEIVE_ZHENPIN] (state, {zhenpin}) {
    state.zhenpin = zhenpin
  },

  [RECEIVE_YXLOOK] (state, {yxLook}) {
    state.yxLook = yxLook
  },

  [RECEIVE_FINDMORES] (state, {findMores}) {
    state.findMores = findMores
  },



  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  }
}
