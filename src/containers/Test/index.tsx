import * as React from 'react'

interface Props {
  isAuthed?: boolean
}

export default class Test extends React.Component<Props, object> {
  public componentDidMount() {
    const { isAuthed } = this.props
    console.log('ttttt', isAuthed)
  }
  public render() {
    return <div>测试页面</div>
  }
}
