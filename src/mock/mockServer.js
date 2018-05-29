/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './msite.json'


Mock.mock('/headCateList', {code:0, data: data.headCateList})

