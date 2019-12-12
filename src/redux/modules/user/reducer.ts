import { UPDATE_USER, UserState, UserActionTypes } from './types'

const initialState: UserState = {
  name: 'hexon'
}

export default function userReducer(state = initialState, action: UserActionTypes): UserState {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
