/*
 * @Description: 主要布局组件
 * @Author: Hexon
 * @Date: 2019-10-28 17:26:29
 * @LastEditors: Hexon
 * @LastEditTime: 2019-12-18 11:41:03
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
import { AppState } from '@/redux/'
import { setToken } from '@/utils/auth'

const WxInstance = WxAuth.getInstance()

export enum eMenu {
  activityPhoto = 'activityPhoto',
  todayStatus = 'today-status',
  dailyFood = 'daily-food',
  more = 'more',
  empty = ''
}

const mapState = (state: AppState) => ({
  user: state.user,
  token: state.auth.token
})

const mapDispatch = {
  updateToken: (token: AuthState) => ({ type: AUTH_UPDATE, payload: token }),
  updateUser: (userInfo: UserState) => ({ type: USER_UPDATE, payload: userInfo })
}

const connector = connect(
  mapState,
  mapDispatch
)

interface State {
  hidden: boolean
  currentTab: eMenu
}
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

class MainLayout extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = {
      currentTab: eMenu.activityPhoto,
      hidden: false
    }
  }

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
            console.log('authed')
          }
          break
        case 'noAuth':
          this.props.updateToken({
            token: 'ttttt'
          })
          this.props.updateUser({
            ...this.props.user,
            role: 'user'
          })
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

  public render() {
    return (
      <div className="layout">
        <div className="main-container">{this.props.token.length ? this.props.children : '暂无授权'}</div>
        <div className="nav-tab-container" style={{ position: 'fixed', height: '50px', width: '100%', bottom: 0 }}>
          <TabBar
            tabBarPosition="bottom"
            noRenderContent={true}
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
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
              selected={this.state.currentTab === eMenu.activityPhoto}
              badge={1}
              onPress={() => {
                this.setState({
                  currentTab: eMenu.activityPhoto
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
              selected={this.state.currentTab === eMenu.todayStatus}
              onPress={() => {
                this.setState({
                  currentTab: eMenu.todayStatus
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
              selected={this.state.currentTab === eMenu.dailyFood}
              onPress={() => {
                this.setState({
                  currentTab: eMenu.dailyFood
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
              selected={this.state.currentTab === eMenu.more}
              onPress={() => {
                this.setState({
                  currentTab: eMenu.more
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
