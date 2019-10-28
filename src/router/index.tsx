import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import ActivityPhoto from '@containers/activity-photo'
import TodayStatus from '@containers/today-status'

export default class RouteConfig extends Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/activity-photo" exact component={ActivityPhoto} />
          <Route path="/today-status" exact component={TodayStatus} />
          <Redirect exact from="/" to="/activity-photo" />
        </Switch>
      </HashRouter>
    )
  }
}
