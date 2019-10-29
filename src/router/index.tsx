import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import ActivityPhoto from '@containers/activity-photo'
import TodayStatus from '@containers/today-status'
import More from '@containers/more'
import DailyFood from '@containers/daily-food'

import Test from '@containers/Test'
import MainLayout, { eMenu } from '@layouts/main-layout'

interface State {
  currentTab?: eMenu
}

export default class RouteConfig extends Component<{}, State> {
  public constructor(props: {}) {
    super(props)
    this.state = {
      currentTab: eMenu.empty
    }
  }

  public componentDidMount() {
    // 根据window.location.hash来设置state.currentTab以便初始化激活的底部tab
    console.log('props', window.location.hash)
  }
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/test" component={Test} />
          <MainLayout currentTab={this.state.currentTab}>
            <Switch>
              <Route path="/activity-photo" component={ActivityPhoto} />
              <Route path="/today-status" component={TodayStatus} />
              <Route path="/daily-food" component={DailyFood} />
              <Route path="/more" component={More} />
              <Redirect from="/" to="/activity-photo" exact></Redirect>
            </Switch>
          </MainLayout>
        </Switch>
        {/* <Redirect exact from="/" to="/activity-photo" /> */}
      </HashRouter>
    )
  }
}
