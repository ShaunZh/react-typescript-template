// action type
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_DATE = 'UPDATE_DATE'

// state  interface
export interface UserState {
  name: string // 姓名
  class: string // 班级
  headImg: string // 头像
  queryDate: string // 查询日期
}

export interface QueryDate {
  queryDate: string
}

// action interface
interface UpdateUserAction {
  type: typeof UPDATE_USER
  payload: UserState
}

interface UpdateQueryDateAction {
  type: typeof UPDATE_DATE
  payload: QueryDate
}

export type UserActionTypes = UpdateUserAction | UpdateQueryDateAction
