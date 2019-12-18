/*
 * @Description: 每日食谱
 * @Author: Hexon
 * @Date: 2019-10-29 10:17:33
 * @LastEditors: Hexon
 * @LastEditTime: 2019-12-18 18:43:41
 */
import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from '@/redux'

const mapState = (state: AppState) => ({})
const mapDispatch = {}

const connector = connect(
  mapState,
  mapDispatch
)
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
export default connect(
  mapState,
  mapDispatch
)(DailyFood)
