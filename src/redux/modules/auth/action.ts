import { AuthActions, AUTH_UPDATE, AUTH_DELETE, AuthState } from './types'
import { AnyAction } from 'redux'
import { USER_UPDATE_ROLE } from '../user/types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import authApi from '@/api/auth'
import locationSearch from '@/utils/locationSearch'
import WxAuth from '@/utils/wxAuth'
import { setToken } from '@/utils/auth'

interface HttpResponseAuth extends HttpResponse {
  result: {
    Authorization: string
  }
}

const WxInstance = WxAuth.getInstance()

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

// 以下是ThunkAction的声明，也就是说ThunkAction是一个函数，该函数返回值是R
// 对应到wxAuthLogin中，R = Promise<void>((resolve, reject) => {.....}
// export type ThunkAction<R, S, E, A extends Action> = (
//   dispatch: ThunkDispatch<S, E, A>,
//   getState: () => S,
//   extraArgument: E
// ) => R;
// 授权登录
export function wxAuthLogin(): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      const searchParams = locationSearch(window.location.search)
      WxInstance.wxAuth(authApi.authWxJssdk, authApi.auth, {
        auth: {
          code: searchParams.code,
          type: 'parent',
          clientKey: searchParams.clientKey || ''
        },
        signature: {
          clientKey: searchParams.clientKey || '',
          url: window.location.href.split('#')[0]
        }
      })
        .then((resp) => {
          let authInfo: HttpResponseAuth = WxInstance.getAuthFromSession()
          switch (resp.authStatus) {
            // case 'authSuccess':
            //   setToken(resp.authInfo.result.Authorization)
            //   console.log('authSuccess')
            //   break
            case 'authed':
              if (authInfo && authInfo.result && authInfo.result.Authorization) {
                setToken(authInfo.result.Authorization || 'temp authorization')
                // 更新token
                dispatch({
                  type: AUTH_UPDATE,
                  payload: {
                    token: authInfo.result.Authorization || 'temp authorization'
                  }
                })
                // 更新用户角色
                dispatch({
                  type: USER_UPDATE_ROLE,
                  payload: {
                    role: 'user'
                  }
                })
              }
              console.log('authed')
              break
            case 'noAuth':
              if (process.env.NODE_ENV === 'development') {
                setToken('temp authorization')
                dispatch({
                  type: AUTH_UPDATE,
                  payload: {
                    token: 'temp authorization'
                  }
                })
                dispatch({
                  type: USER_UPDATE_ROLE,
                  payload: {
                    role: 'user'
                  }
                })
              }
              console.log('noAuth: ' + process.env.NODE_ENV)
              break
            default:
              break
          }
          resolve(resp.authStatus)
        })
        .catch((e) => {
          // if (process.env.NODE_ENV === 'development') {
          //   this.login({
          //     token: 'temp authorization',
          //     role: 'user'
          //   })
          //   console.log('noAuth: development')
          // }
          // 授权失败的跳转到白板页面
          console.log('err: ', e.message)
          reject(e)
        })
    })
  }
}
