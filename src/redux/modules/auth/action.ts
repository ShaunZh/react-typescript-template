// eslint-disable-next-line
import { AuthActionType } from './types'
import { createAsyncAction } from 'typesafe-actions'

export const authAsync = createAsyncAction(
  AuthActionType.FETCH_REQUEST,
  AuthActionType.FETCH_SUCCESS,
  AuthActionType.FETCH_FAILURE
)<undefined, string, string>()

// 通用授权登录： 用户名 + 密码
// export function comAuthLogin(params: Login): ThunkAction<Promise<void>, {}, {}, AnyAction> {
//   return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
//     return new Promise<void>((resolve, reject) => {
//       authApi
//         .login(params)
//         .then((res: HttpResponseAuth) => {
//           const {
//             result: { Authorization }
//           } = res
//           // 设置token到session中
//           setToken(Authorization || 'temp authorization')
//           // 更新redux中的token
//           dispatch({
//             type: AUTH_UPDATE,
//             payload: {
//               token: Authorization || 'temp authorization'
//             }
//           })
//           resolve()
//         })
//         .catch((e) => {
//           reject(e)
//         })
//     })
//   }
// }
