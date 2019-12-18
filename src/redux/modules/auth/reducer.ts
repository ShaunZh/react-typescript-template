import { AuthState, AuthActions, AUTH_DELETE, AUTH_UPDATE } from './types'

const initialState: AuthState = {
  token: ''
}

export default function authReduecer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AUTH_UPDATE:
      return {
        ...state,
        ...action.payload
      }

    case AUTH_DELETE:
      return {
        ...state,
        token: ''
      }
    default:
      return state
  }
}
