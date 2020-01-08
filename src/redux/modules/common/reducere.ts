import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { updateMenu } from './action'

export const menu = createReducer('').handleAction(updateMenu, (state, action) => action.payload)

const commonReducer = combineReducers({
  menu
})

export default commonReducer
export type CommonState = ReturnType<typeof commonReducer>
