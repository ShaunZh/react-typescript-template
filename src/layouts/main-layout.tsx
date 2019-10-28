/*
 * @Description: 主要布局组件
 * @Author: Hexon
 * @Date: 2019-10-28 17:26:29
 * @LastEditors: Hexon
 * @LastEditTime: 2019-10-28 19:05:51
 */

import * as React from 'react'
import { TabBar } from 'antd-mobile'
interface State {
  hidden: boolean
  currentTab: string
}
interface Props {
  children: React.ReactChild // 子组件
  // isFooterVisible?: boolean // 是否显示
  currentTab?: string // 当前展示的tab
}

export default class MainLayout extends React.Component<Props, State> {
  // public readonly state = {
  //   hidden: false,
  //   currentTab: '' // 默认tab
  // }
  public constructor(props: Props) {
    super(props)
    this.state = {
      currentTab: props.currentTab || 'blueTab',
      hidden: false
    }
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
              title="Life"
              key="Life"
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              selected={this.state.currentTab === 'blueTab'}
              badge={1}
              onPress={() => {
                this.setState({
                  currentTab: 'blueTab'
                })
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
              title="Koubei"
              key="Koubei"
              badge="new"
              selected={this.state.currentTab === 'redTab'}
              onPress={() => {
                this.setState({
                  currentTab: 'redTab'
                })
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
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                  }}
                />
              }
              title="Friend"
              key="Friend"
              dot
              selected={this.state.currentTab === 'greenTab'}
              onPress={() => {
                this.setState({
                  currentTab: 'greenTab'
                })
              }}
            >
              greenTab
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="My"
              key="my"
              selected={this.state.currentTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  currentTab: 'yellowTab'
                })
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
