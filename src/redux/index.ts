import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import userReducer from './modules/user/reducer'
import tokenReducer from './modules//auth/reducer'

// combineReducers返回值是一个function，该函数的返回值是state
const rootReducer = combineReducers({
  user: userReducer,
  auth: tokenReducer
})

// <typeof rootReducer> === combineReducers的返回值，也就是一个function
// ReturnType <typeof rootReducer>: 获取<type rootReducer>（注：此处的type rootReducer是一个function）的返回值类型
export type AppState = ReturnType<typeof rootReducer>

const middlewares = [thunkMiddleware]
const middleWareEnhancer = applyMiddleware(...middlewares)

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer))
  /* eslint-enable */
  return store
}
