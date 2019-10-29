import * as React from 'react'

export default class EmptyLayout extends React.Component<{}, object> {
  public render() {
    return <div className="empty-layout">{this.props.children}</div>
  }
}
