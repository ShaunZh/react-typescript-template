import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import ActivityPhoto from '@containers/activity-photo'
import TodayStatus from '@containers/today-status'
import More from '@containers/more'
import DailyFood from '@containers/daily-food'

export default class RouteConfig extends Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/activity-photo" exact component={ActivityPhoto} />
          <Route path="/today-status" exact component={TodayStatus} />
          <Route path="/daily-food" exact component={DailyFood} />
          <Route path="/more" exact component={More} />
          <Redirect exact from="/" to="/activity-photo" />
        </Switch>
      </HashRouter>
    )
  }
}
