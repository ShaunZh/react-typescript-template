/*
 * @Description: 主要布局组件
 * @Author: Hexon
 * @Date: 2019-10-28 17:26:29
 * @LastEditors: Hexon
 * @LastEditTime: 2019-10-29 16:29:12
 */

import * as React from 'react'
import { TabBar } from 'antd-mobile'
import { createHashHistory } from 'history'
import statusImg from '../assets/images/status.svg'
import statusActiveImg from '../assets/images/status-active.svg'

import payImg from '../assets/images/pay.svg'
import payActiveImg from '../assets/images/pay-active.svg'

export enum eMenu {
  activityPhoto = 'activityPhoto',
  todayStatus = 'today-status',
  dailyFood = 'daily-food',
  more = 'more',
  empty = ''
}
interface State {
  hidden: boolean
  currentTab: eMenu
}
interface Props {
  children: React.ReactChild // 子组件
  // isFooterVisible?: boolean // 是否显示
  // location?: Location
  currentTab?: eMenu
}

export default class MainLayout extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = {
      currentTab: this.props.currentTab || eMenu.activityPhoto,
      hidden: false
    }
  }

  public componentDidMount() {
    console.log('main-layout componentDidMount')
  }

  public render() {
    return (
      <div className="layout">
        <div className="main-container">{this.props.children}</div>
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
