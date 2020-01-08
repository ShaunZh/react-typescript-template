export const UPDATE_QUERY_DATE = '@user/updateQueryDate'
export const UPDATE_USER_INFO = '@user/updateUserInfo'

export interface UserInfo {
  name: string // 姓名
  class: string // 班级
  headImg: string // 头像
  queryDate: string // 查询日期
  role: string // 角色
}
