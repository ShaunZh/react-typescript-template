export const AUTH_UPDATE = 'AUTH_UPDATE'
export const AUTH_DELETE = 'AUTH_DELETE'

export interface AuthState {
  token: string
}

export interface AuthUpdateAction {
  type: typeof AUTH_UPDATE
  payload: AuthState
}

export interface AuthDeleteAction {
  type: typeof AUTH_DELETE
}

export type AuthActions = AuthUpdateAction | AuthDeleteAction
