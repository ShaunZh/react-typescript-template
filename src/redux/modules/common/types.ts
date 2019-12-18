export const COMMON_UPDATE_MENU_TAB = 'COMMON_UPDATE_MENU_TAB'

export interface CommonState {
  curTab: string
}

export interface CommonUpdateMenuTabState {
  curTab: string
}

export interface CommonUpdateMenuTabAction {
  type: typeof COMMON_UPDATE_MENU_TAB
  payload: CommonUpdateMenuTabState
}

export type CommonActions = CommonUpdateMenuTabAction
