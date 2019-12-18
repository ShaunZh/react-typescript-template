import { AuthActions, AUTH_UPDATE, AUTH_DELETE, AuthState } from './types'
export function authUpdate(auth: AuthState): AuthActions {
  return {
    type: AUTH_UPDATE,
    payload: auth
  }
}

export function authDelete(): AuthActions {
  return {
    type: AUTH_DELETE
  }
}
