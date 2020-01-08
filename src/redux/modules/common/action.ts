import { createAction } from 'typesafe-actions'

import { UPDATE_MENU } from './types'

export const updateMenu = createAction(UPDATE_MENU)<string>()
