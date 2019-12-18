import { COMMON_UPDATE_MENU_TAB, CommonActions, CommonUpdateMenuTabState } from './types'

export function commonUpdateMenuTab(curTab: CommonUpdateMenuTabState): CommonActions {
  return {
    type: COMMON_UPDATE_MENU_TAB,
    payload: curTab
  }
}
