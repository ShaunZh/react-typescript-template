import React, { Component } from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'

import MainLayout from '@layouts/main-layout'
import routes from './routes'
import AuthorizedRoute from '@/components/authWrapper/authorizedRoute'

export default class RouteConfig extends Component<{}> {
  public render() {
    return (
      <HashRouter>
        <MainLayout>
          <Switch>
            <Redirect from="/" to="/activity-photo" exact />
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
          </Switch>
        </MainLayout>
      </HashRouter>
    )
  }
}
