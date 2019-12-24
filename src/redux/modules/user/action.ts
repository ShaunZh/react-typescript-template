import {
  USER_UPDATE,
  USER_UPDATE_QUERY_DATE,
  USER_UPDATE_ROLE,
  UserState,
  UserActionTypes,
  QueryDateState,
  UpdateRoleState
} from './types'
// action creator
export function updateUser(userInfo: UserState): UserActionTypes {
  return {
    type: USER_UPDATE,
    payload: userInfo
  }
}

export function updateDate(queryDate: QueryDateState): UserActionTypes {
  return {
    type: USER_UPDATE_QUERY_DATE,
    payload: queryDate
  }
}

export function updateRole(roleInfo: UpdateRoleState): UserActionTypes {
  return {
    type: USER_UPDATE_ROLE,
    payload: roleInfo
  }
}
