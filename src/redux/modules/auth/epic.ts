import { Epic } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, mergeMap, filter, map } from 'rxjs/operators'
import { isActionOf, RootAction, RootState } from 'typesafe-actions'
import WxAuth from '@/utils/wxAuth'
import authApi from '@/api/auth'
import { authAsync } from './action'
import locationSearch from '@/utils/locationSearch'

const WxInstance = WxAuth.getInstance()

const authHttp = () => {
  const searchParams = locationSearch(window.location.search)
  return WxInstance.wxAuth(authApi.authWxJssdk, authApi.auth, {
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
}
export const authEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(authAsync.request)),
    mergeMap(() =>
      from(authHttp()).pipe(
        map(() => {
          let authInfo = WxInstance.getAuthFromSession()
          return authAsync.success(authInfo?.result?.Authorization)
        }),
        catchError((message: string) => of(authAsync.failure(message)))
      )
    )
  )
