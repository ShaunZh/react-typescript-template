/*
 * @Description: 主要布局组件
 * @Author: Hexon
 * @Date: 2019-10-28 17:26:29
 * @LastEditors: Hexon
 * @LastEditTime: 2019-12-18 17:22:32
 */

import * as React from 'react'
import { TabBar } from 'antd-mobile'
import { createHashHistory } from 'history'
import { connect, ConnectedProps } from 'react-redux'
import statusImg from '../assets/images/status.svg'
import statusActiveImg from '../assets/images/status-active.svg'
import payImg from '../assets/images/pay.svg'
import payActiveImg from '../assets/images/pay-active.svg'

import authApi from '@/api/auth'
import locationSearch from '@/utils/locationSearch'
import WxAuth from '@/utils/wxAuth'
import { UserState, USER_UPDATE } from '@/redux/modules/user/types'
import { AuthState, AUTH_UPDATE } from '@/redux/modules/auth/types'
import { COMMON_UPDATE_MENU_TAB, CommonUpdateMenuTabState } from '@/redux/modules/common/types'

import { AppState } from '@/redux/'
import { setToken } from '@/utils/auth'

const WxInstance = WxAuth.getInstance()

const mapState = (state: AppState) => ({
  user: state.user,
  token: state.auth.token,
  curTab: state.common.curTab
})

const mapDispatch = {
  updateCurTab: (curTab: CommonUpdateMenuTabState) => ({ type: COMMON_UPDATE_MENU_TAB, payload: curTab }),
  updateToken: (token: AuthState) => ({ type: AUTH_UPDATE, payload: token }),
  updateUser: (userInfo: UserState) => ({ type: USER_UPDATE, payload: userInfo })
}

const connector = connect(
  mapState,
  mapDispatch
)
interface PropsParent {
  children: React.ReactNode // 子组件
}

interface HttpResponseAuth extends HttpResponse {
  result: {
    Authorization: string
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsParent & PropsFromRedux

class MainLayout extends React.Component<Props> {
  public async componentDidMount() {
    // 根据window.location.hash来设置state.currentTab以便初始化激活的底部talocation.hash来设置state.currentTab以便初始化激活的底部tabb
    console.log('props', window.location.hash)
    const searchParams = locationSearch(window.location.search)
    try {
      const resp = await WxInstance.wxAuth(authApi.authWxJssdk, authApi.auth, {
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
      // 微信授权过会将token信息存放到sessionStorage中，此时，从session中取得授权信息
      let authInfo: HttpResponseAuth = WxInstance.getAuthFromSession()
      switch (resp.authStatus) {
        // case 'authSuccess':
        //   setToken(resp.authInfo.result.Authorization)
        //   console.log('authSuccess')
        //   break
        case 'authed':
          if (authInfo && authInfo.result && authInfo.result.Authorization) {
            setToken(authInfo.result.Authorization)
            // 已经授权过的，无操作
            this.props.updateToken({
              token: authInfo.result.Authorization
            })

            this.props.updateUser({
              ...this.props.user,
              role: 'user'
            })
            // 更新当前激活的菜单tab
            this.setMenuCurTab()
            console.log('authed')
          }
          break
        case 'noAuth':
          if (process.env.NODE_ENV === 'development') {
            this.props.updateToken({
              token: 'ttttt'
            })
            this.props.updateUser({
              ...this.props.user,
              role: 'user'
            })

            console.log('noAuth: development')
          }
          console.log('noAuth')
          break
        default:
          break
      }
    } catch (e) {
      // 授权失败的跳转到白板页面
      console.log('err: ', e.message)
    }
  }

  public setMenuCurTab() {
    const href = window.location.hash
    let curTab = ''
    if (href.includes('/activity-photo')) {
      curTab = 'activity-photo'
    } else if (href.includes('/today-status')) {
      curTab = 'today-status'
    } else if (href.includes('/daily-food')) {
      curTab = 'daily-food'
    } else if (href.includes('/more')) {
      curTab = 'more'
    }
    this.props.updateCurTab({
      curTab
    })
  }

  public render() {
    return (
      <div className="layout">
        <div className="main-container">{this.props.token.length ? this.props.children : ''}</div>
        <div className="nav-tab-container" style={{ position: 'fixed', height: '50px', width: '100%', bottom: 0 }}>
          <TabBar
            tabBarPosition="bottom"
            noRenderContent={true}
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            <TabBar.Item
              title="活动照片"
              key="activity-photo"
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${payImg}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${payActiveImg}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selected={this.props.curTab === 'activity-photo'}
              badge={1}
              onPress={() => {
                this.props.updateCurTab({
                  curTab: 'activity-photo'
                })
                createHashHistory().push('/activity-photo')
              }}
              data-seed="logId"
            >
              blue
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              title="今日状态"
              key="today-status"
              badge="new"
              selected={this.props.curTab === 'today-status'}
              onPress={() => {
                this.props.updateCurTab({
                  curTab: 'today-status'
                })
                createHashHistory().push('/today-status')
              }}
              data-seed="logId1"
            >
              red tab
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${statusImg}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${statusActiveImg}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              title="每日食谱"
              key="daily-food"
              dot
              selected={this.props.curTab === 'daily-food'}
              onPress={() => {
                this.props.updateCurTab({
                  curTab: 'daily-food'
                })
                createHashHistory().push('/daily-food')
              }}
            >
              greenTab
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="了解更多"
              key="more"
              selected={this.props.curTab === 'more'}
              onPress={() => {
                this.props.updateCurTab({
                  curTab: 'more'
                })
                createHashHistory().push('/more')
              }}
            >
              yellowTab
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

export default connector(MainLayout)
