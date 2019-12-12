import { UPDATE_USER, UserState, UserActionTypes } from './types'
// action creator
export function updateUser(userInfo: UserState): UserActionTypes {
  return {
    type: UPDATE_USER,
    payload: userInfo
  }
}
