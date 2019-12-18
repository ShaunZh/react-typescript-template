import React, { ReactElement } from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import Authorized from './authorized'
import { AppState } from '@/redux'
import { connect, ConnectedProps } from 'react-redux'

const mapState = (state: AppState) => ({
  user: state.user
})
const connector = connect(mapState)
type PropsFromRedux = ConnectedProps<typeof connector>

interface PropsDefault {
  key: string
  path: string
  auth: Array<string> | string
  redirectPath?: string
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  render: (props: RouteComponentProps<any>) => React.ReactNode
}

// The inferred type will look like:
// {
//   user: UserState;
//   redirectPath: string;
//   auth: string | Array<string>;
//   component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
//   render: (props: RouteComponentProps<any>) => React.ReactNode
// }
type Props = PropsFromRedux & PropsDefault

function AuthorizedRoute(props: Props) {
  const { component: Component, render, auth, redirectPath, user, ...rest } = props
  return (
    <Authorized
      user={user}
      auth={auth}
      noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}
    >
      <Route {...rest} render={(props) => (Component ? <Component {...props} /> : render(props))} />
    </Authorized>
  ) as ReactElement<any>
}

export default connect(mapState)(AuthorizedRoute)
