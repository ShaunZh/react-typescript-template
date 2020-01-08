import React, { ReactElement } from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import Authorized from './authorized'

interface PropsFromParent {
  key: string
  path: string
  auth?: Array<string> | string
  redirectPath?: string
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  render: (props: RouteComponentProps<any>) => React.ReactNode
}

type Props = PropsFromParent

function AuthorizedRoute(props: Props) {
  const { component: Component, render, auth = '', redirectPath, ...rest } = props
  return (
    <Authorized auth={auth} noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}>
      <Route {...rest} render={(props) => (Component ? <Component {...props} /> : render(props))} />
    </Authorized>
  ) as ReactElement<any>
}

export default AuthorizedRoute
