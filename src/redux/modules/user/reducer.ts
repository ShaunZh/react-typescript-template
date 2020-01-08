import { createReducer } from 'typesafe-actions'
import { updateDate, updateUserInfo } from './action'
import { ReactType } from 'react'

const userReducer = createReducer({
  name: '', // 姓名
  class: '', // 班级
  headImg: '', // 头像
  queryDate: '', // 查询日期
  role: '' // 角色
})
  .handleAction(updateDate, (state, action) => ({ ...state, queryDate: action.payload }))
  .handleAction(updateUserInfo, (state, action) => ({ ...state, ...action.payload }))

export default userReducer
export type UserState = ReactType<typeof userReducer>
