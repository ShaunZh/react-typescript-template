import { USER_UPDATE, UserState, UserActionTypes, USER_UPDATE_QUERY_DATE } from './types'

const initialState: UserState = {
  name: '', // 名称
  headImg: '', // 头像
  class: '', // 班级
  queryDate: '', // 查询日期
  role: '' // 角色
}

export default function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case USER_UPDATE:
    case USER_UPDATE_QUERY_DATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
