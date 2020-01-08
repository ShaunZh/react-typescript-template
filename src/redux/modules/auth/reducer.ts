import { combineReducers } from 'redux'
import { AuthActionType } from './types'
import { authAsync } from './action'
import { createReducer } from 'typesafe-actions'

export const status = createReducer('')
  .handleAction(authAsync.request, () => AuthActionType.FETCH_REQUEST)
  .handleAction(authAsync.success, () => AuthActionType.FETCH_SUCCESS)
  .handleAction(authAsync.failure, () => AuthActionType.FETCH_FAILURE)

export const auth = createReducer({
  token: ''
}).handleAction(authAsync.success, (state, action) => ({ ...state, token: action.payload }))

const authReducer = combineReducers({ status, auth })

export default authReducer
export type AuthState = ReturnType<typeof authReducer>
