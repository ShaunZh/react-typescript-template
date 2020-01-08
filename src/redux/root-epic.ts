import { combineEpics } from 'redux-observable'

import * as authEpics from './modules/auth/epic'

export default combineEpics(...Object.values(authEpics))
