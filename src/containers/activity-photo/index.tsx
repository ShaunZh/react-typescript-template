import * as React from 'react'
import userApi from '@api/user'
import MainLayout, { eMenu } from '@layouts/main-layout'

class ActivityPhoto extends React.Component<{}, object> {
  public componentDidMount() {
    console.log('componentDidMount')
    userApi.getInfo({}).then((res: any) => {
      console.log('res', res)
    })
  }
  public render() {
    return (
      // 添加currentTab是为了保证在首次打开当前页面时就选中该tab
      <MainLayout currentTab={eMenu.activityPhoto}>
        <div className="activity-photo-container">活动照片</div>
      </MainLayout>
    )
  }
}

export default ActivityPhoto
