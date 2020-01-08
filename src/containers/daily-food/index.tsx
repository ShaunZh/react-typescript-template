/*
 * @Description: 每日食谱
 * @Author: Hexon
 * @Date: 2019-10-29 10:17:33
 * @LastEditors  : Hexon
 * @LastEditTime : 2020-01-07 13:49:39
 */
import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'typesafe-actions'

const mapState = (state: RootState) => ({})
const mapDispatch = {}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

class DailyFood extends React.Component<Props, object> {
  public componentDidMount() {
    console.log('DailyFood componentDidMount')
  }
  public render() {
    return <div className="daily-food-container">每日食谱</div>
  }
}
export default connect(mapState, mapDispatch)(DailyFood)
