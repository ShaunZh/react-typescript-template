// action type
export const UPDATE_USER = 'UPDATE_USER'

// state  interface
export interface UserState {
  name: string
}

// action interface
interface UpdateUserAction {
  type: typeof UPDATE_USER
  payload: UserState
}

export type UserActionTypes = UpdateUserAction
