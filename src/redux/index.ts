import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import { RootAction, RootState } from 'typesafe-actions'

import rootReducer from './root-reducer'
import rootEpic from './root-epic'

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>()

const middlewares = [thunkMiddleware, epicMiddleware]

const middleWareEnhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer))

epicMiddleware.run(rootEpic)

export default store
