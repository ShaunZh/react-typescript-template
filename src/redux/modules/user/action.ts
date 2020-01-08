import { createAction } from 'typesafe-actions'
import { UPDATE_QUERY_DATE, UPDATE_USER_INFO, UserInfo } from './types'

export const updateDate = createAction(UPDATE_QUERY_DATE)<string>()
export const updateUserInfo = createAction(UPDATE_USER_INFO)<UserInfo>()
