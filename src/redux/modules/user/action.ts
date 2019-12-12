import { UPDATE_USER, UPDATE_DATE, UserState, UserActionTypes, QueryDate } from './types'
// action creator
export function updateUser(userInfo: UserState): UserActionTypes {
  return {
    type: UPDATE_USER,
    payload: userInfo
  }
}

export function updateDate(queryDate: QueryDate): UserActionTypes {
  return {
    type: UPDATE_DATE,
    payload: queryDate
  }
}
