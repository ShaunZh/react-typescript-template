import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom'

import MainLayout, { eMenu } from '@layouts/main-layout'
import routes from './routes'
import AuthorizedRoute from '@/components/authWrapper/authorizedRoute'

export default class RouteConfig extends Component<{}> {
  public render() {
    return (
      <HashRouter>
        <MainLayout>
          <Switch>
            {routes.map((rc) => {
              const { path, component, auth = '', redirectPath = '/no-auth', ...rest } = rc
              return (
                <AuthorizedRoute
                  render={() => {
                    return <div>无渲染内容</div>
                  }}
                  key={path}
                  path={path}
                  component={component}
                  auth={auth}
                  redirectPath={redirectPath}
                  {...rest}
                />
              )
            })}
            <Redirect from="/" to="/activity-photo" exact></Redirect>
          </Switch>
        </MainLayout>
      </HashRouter>
    )
  }
}
