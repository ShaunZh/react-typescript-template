import { combineReducers, createStore } from 'redux'

import userReducer from './modules/user/reducer'

// combineReducers返回值是一个function，该函数的返回值是state
const rootReducer = combineReducers({
  user: userReducer
})

// <typeof rootReducer> === combineReducers的返回值，也就是一个function
// ReturnType <typeof rootReducer>: 获取<type rootReducer>（注：此处的type rootReducer是一个function）的返回值类型
export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(rootReducer)
  return store
}
