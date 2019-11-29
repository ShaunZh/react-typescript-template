import * as React from 'react'
import userApi from '@api/user'
import { NavLink } from 'react-router-dom'

// url地址信息
interface Props {
  location?: Location
}

class ActivityPhoto extends React.Component<Props, object> {
  public componentDidMount() {
    console.log('componentDidMount')
    const { location } = this.props
    console.log('params', location)
    userApi.getInfo({}).then((res: any) => {
      console.log('res', res)
    })
  }
  public render() {
    return (
      <div className="activity-photo-container">
        <h1 style={{ fontSize: '24px' }}>活动照片</h1>
        <NavLink to="/test">go to test</NavLink>
      </div>
    )
  }
}

export default ActivityPhoto
