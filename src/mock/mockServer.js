/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './msite.json'


Mock.mock('/headCateList', {code:0, data: data.headCateList})
Mock.mock('/focusList', {code:0, data: data.focusList})
Mock.mock('/tagList', {code:0, data: data.tagList})
Mock.mock('/newItemList', {code:0, data: data.newItemList})
Mock.mock('/popularItemList', {code:0, data: data.popularItemList})
Mock.mock('/flashSaleIndexVO', {code:0, data: data.flashSaleIndexVO})
Mock.mock('/topicList', {code:0, data: data.topicList})
Mock.mock('/cateList', {code:0, data: data.cateList})

