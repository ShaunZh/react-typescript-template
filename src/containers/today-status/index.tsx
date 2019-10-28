import * as React from 'react'

interface Props {
  name: string
  enthusiasmLevel?: number
}

export default class TodayStatus extends React.Component<Props, object> {
  public render() {
    return <h1>今日状态</h1>
  }
}
