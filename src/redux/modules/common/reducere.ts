import { CommonState, CommonActions, COMMON_UPDATE_MENU_TAB } from './types'

const initialState: CommonState = {
  curTab: ''
}

export default function commonReducers(state = initialState, action: CommonActions): CommonState {
  switch (action.type) {
    case COMMON_UPDATE_MENU_TAB:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
