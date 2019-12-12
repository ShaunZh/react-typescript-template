import { UPDATE_USER, UserState, UserActionTypes, UPDATE_DATE } from './types'

const initialState: UserState = {
  name: '', // 名称
  headImg: '', // 头像
  class: '', // 班级
  queryDate: '' // 查询日期
}

export default function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_DATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
