/*
 * @Description: 主要布局组件
 * @Author: Hexon
 * @Date: 2019-10-28 17:26:29
 * @LastEditors  : Hexon
 * @LastEditTime : 2020-01-14 11:09:05
 */

import * as React from 'react'

import { connect, ConnectedProps } from 'react-redux'
import MenuTab from '@/components/menu-tab'

import { authAsync } from '@/redux/modules/auth/action'
// import { updateMenu } from '@/redux/modules/common/action'
import { AuthActionType } from '@/redux/modules/auth/types'

import { RootState } from 'typesafe-actions'
const mapState = (state: RootState) => ({
  role: state.user.role,
  authStatus: state.auth.status,
  curTab: state.common.menu
})

const mapDispatch = {
  wxAuthLogin: authAsync.request
  // updateCurTab: (curTab: string) => updateMenu(curTab)
}

const connector = connect(mapState, mapDispatch)
interface PropsParent {
  children: React.ReactNode // 子组件
}

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsParent & PropsFromRedux

class MainLayout extends React.Component<Props> {
  public componentDidUpdate() {
    console.log('main-layout: update')
  }

  public componentDidMount() {
    this.props.wxAuthLogin()
    console.log('main-layout: mount')
  }

  public render() {
    console.log('main-layout: render')
    return (
      <div className="layout">
        <div className="main-container">
          {/* 注： 此处必须要同时判断token和role，因为token和role所处于两个不同的redux module，其更新有先后顺序，因此要同时判断 */}
          {this.props.authStatus === AuthActionType.FETCH_SUCCESS ? this.props.children : ''}
        </div>
        <MenuTab />
      </div>
    )
  }
}

export default connector(MainLayout)
