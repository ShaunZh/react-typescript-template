/*
 * @Description: 主要布局组件
 * @Author: Hexon
 * @Date: 2019-10-28 17:26:29
 * @LastEditors  : Hexon
 * @LastEditTime : 2020-01-08 15:38:41
 */

import * as React from 'react'
import { TabBar } from 'antd-mobile'
import { createHashHistory } from 'history'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { connect, ConnectedProps } from 'react-redux'
import statusImg from '../assets/images/status.svg'
import statusActiveImg from '../assets/images/status-active.svg'
import payImg from '../assets/images/pay.svg'
import payActiveImg from '../assets/images/pay-active.svg'

import { authAsync } from '@/redux/modules/auth/action'
import { updateMenu } from '@/redux/modules/common/action'
import { AuthActionType } from '@/redux/modules/auth/types'

import { RootState } from 'typesafe-actions'
const mapState = (state: RootState) => ({
  role: state.user.role,
  authStatus: state.auth.status,
  curTab: state.common.menu
})

// const mapDispatch = (dispatch: ThunkDispatch<{}, {}, any>) => {
//   return {
//     wxAuthLogin: async () => {
//       const resp = await dispatch(wxAuthLogin())
//       console.log('wx auth login: ', resp)
//       // 可以通过返回Promise.resolve来进行授权后的操作
//       return Promise.resolve(resp)
//     },
//     updateCurTab: (curTab: CommonUpdateMenuTabState) => dispatch({ type: COMMON_UPDATE_MENU_TAB, payload: curTab })
//   }
// }

const mapDispatch = {
  wxAuthLogin: authAsync.request,
  updateCurTab: (curTab: string) => updateMenu(curTab)
}

const connector = connect(mapState, mapDispatch)
interface PropsParent {
  children: React.ReactNode // 子组件
}

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsParent & PropsFromRedux & RouteComponentProps

class MainLayout extends React.Component<Props> {
  public componentDidUpdate(prevProps: Props) {
    // 设置底部菜单当前激活的tab
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setMenuCurTab(this.props.location.pathname)
    }
    // console.log('prevProps: ', prevProps)
    // console.log('cur Props: ', this.props)
  }

  public componentDidMount() {
    // 解决刷新页面时，底部菜单无激活的tab
    if (this.props.location.pathname) {
      this.setMenuCurTab(this.props.location.pathname)
    }
    this.props.wxAuthLogin()
    // this.wxAuthLogin()
  }

  public setMenuCurTab(pathname: string) {
    const href = pathname
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
    this.props.updateCurTab(curTab)
  }

  public render() {
    return (
      <div className="layout">
        <div className="main-container">
          {/* 注： 此处必须要同时判断token和role，因为token和role所处于两个不同的redux module，其更新有先后顺序，因此要同时判断 */}
          {this.props.authStatus === AuthActionType.FETCH_SUCCESS ? this.props.children : ''}
        </div>
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
                // this.props.updateCurTab({
                //   curTab: 'activity-photo'
                // })
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
                // this.props.updateCurTab({
                //   curTab: 'today-status'
                // })
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
                // this.props.updateCurTab({
                //   curTab: 'daily-food'
                // })
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
                // this.props.updateCurTab({
                //   curTab: 'more'
                // })
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

export default withRouter(connector(MainLayout))
