import { USER_UPDATE, USER_UPDATE_QUERY_DATE, UserState, UserActionTypes, QueryDate } from './types'
// action creator
export function updateUser(userInfo: UserState): UserActionTypes {
  return {
    type: USER_UPDATE,
    payload: userInfo
  }
}

export function updateDate(queryDate: QueryDate): UserActionTypes {
  return {
    type: USER_UPDATE_QUERY_DATE,
    payload: queryDate
  }
}
