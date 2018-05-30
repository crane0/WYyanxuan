
import Vue from 'vue'

import {RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS
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
  }
}
