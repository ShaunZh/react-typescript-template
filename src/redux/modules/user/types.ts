// action type
export const USER_UPDATE = 'USER_UPDATE'
export const USER_UPDATE_QUERY_DATE = 'USER_UPDATE_QUERY_DATE'

// state  interface
export interface UserState {
  name: string // 姓名
  class: string // 班级
  headImg: string // 头像
  queryDate: string // 查询日期
  role: string // 角色
}

export interface QueryDate {
  queryDate: string
}

// action interface
interface UserUpdateAction {
  type: typeof USER_UPDATE
  payload: UserState
}

interface UserUpdateQueryDateAction {
  type: typeof USER_UPDATE_QUERY_DATE
  payload: QueryDate
}

export type UserActionTypes = UserUpdateAction | UserUpdateQueryDateAction
