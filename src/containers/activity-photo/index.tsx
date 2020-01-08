import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
// import userApi from '@api/user'
import { NavLink } from 'react-router-dom'
import { RootState } from 'typesafe-actions'
import { updateDate, updateUserInfo } from '@/redux/modules/user/action'
import { UserInfo } from '@/redux/modules/user/types'

import HeadImg from './components/headImg'
import './index.scss'

const mapState = (state: RootState) => ({
  user: state.user
})

const mapDispatch = {
  updateUsername: (userInfo: UserInfo) => updateUserInfo(userInfo),
  updateQueryDate: (date: string) => updateDate(date)
}

const connector = connect(mapState, mapDispatch)

interface State {
  username: string
  queryDate: string
}

// Infers the type of props that a connector will inject into a component.
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

class ActivityPhoto extends React.Component<Props, State> {
  private inputRef = React.createRef<HTMLInputElement>()
  public constructor(props: Props) {
    super(props)
    this.state = { username: '', queryDate: '' }
    this.updateMessage = this.updateMessage.bind(this)
    this.updateQueryDate = this.updateQueryDate.bind(this)
  }

  public componentDidMount() {
    console.log('componentDidMount')
    this.focus()
  }
  public updateMessage(e: React.FormEvent<HTMLInputElement>): void {
    console.log('this: ', this)
    // this.setState({ username: e.currentTarget.value })
    this.props.updateUsername({ ...this.props.user, name: e.currentTarget.value })
    console.log('state: ', this.state)
  }

  public updateQueryDate(e: React.FormEvent<HTMLInputElement>): void {
    this.props.updateQueryDate(e.currentTarget.value)
  }
  public focus() {
    this.inputRef.current!.focus()
  }
  public render() {
    return (
      <div className="activity-photo-container">
        <div className="header">
          <HeadImg src={this.props.user.headImg} />
        </div>
        <h1>活动照片: {this.props.user.name}</h1>
        <h1>查询人气：{this.props.user.queryDate}</h1>
        <input
          value={this.props.user.name}
          onChange={this.updateMessage}
          className="chat-input"
          placeholder="请输入用户名"
          ref={this.inputRef}
        />
        <br />
        <input value={this.props.user.queryDate} onChange={this.updateQueryDate} placeholder="请输入查询日期" />
        <NavLink to="/test">go to test</NavLink>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(ActivityPhoto)
