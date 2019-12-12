import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
// import userApi from '@api/user'
import { NavLink } from 'react-router-dom'
import { AppState } from '@/redux'
import { UPDATE_USER, UserState } from '@/redux/modules/user/types'
import './index.scss'

const mapState = (state: AppState) => ({
  username: state.user.name
})

const mapDispatch = {
  updateUsername: (userInfo: UserState) => ({ type: UPDATE_USER, payload: userInfo })
}

const connector = connect(
  mapState,
  mapDispatch
)

interface State {
  username: string
}

// The inferred type will look like:
// {username: string, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

class ActivityPhoto extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props)
    this.state = { username: '' }
    this.updateMessage = this.updateMessage.bind(this)
  }
  // public readonly state: State = {
  //   username: ''
  // }
  public componentDidMount() {
    console.log('componentDidMount')
    this.setState({
      // username: this.props.username
    })
    // userApi.getInfo({}).then((res: any) => {
    //   console.log('res', res)
    // })
  }
  public updateMessage(e: React.FormEvent<HTMLInputElement>): void {
    console.log('this: ', this)
    // this.setState({ username: e.currentTarget.value })
    this.props.updateUsername({ name: e.currentTarget.value })
    console.log('state: ', this.state)
  }
  public render() {
    return (
      <div className="activity-photo-container">
        <h1>活动照片: {this.props.username}</h1>
        <input
          value={this.props.username}
          onChange={this.updateMessage}
          className="chat-input"
          placeholder="请输入用户名"
        />
        <NavLink to="/test">go to test</NavLink>
      </div>
    )
  }
}

export default connect(
  mapState,
  mapDispatch
)(ActivityPhoto)
