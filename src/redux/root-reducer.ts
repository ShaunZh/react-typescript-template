import { combineReducers } from 'redux'

import user from './modules/user/reducer'
import common from './modules//common/reducere'
import auth from './modules/auth/reducer'

const rootReducer = combineReducers({
  auth,
  user,
  common
})

export default rootReducer
