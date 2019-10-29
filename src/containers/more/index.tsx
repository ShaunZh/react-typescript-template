/*
 * @Description: 了解更多
 * @Author: Hexon
 * @Date: 2019-10-29 10:20:45
 * @LastEditors: Hexon
 * @LastEditTime: 2019-10-29 10:26:29
 */
import * as React from 'react'
import MainLayout, { eMenu } from '@layouts/main-layout'

export default class More extends React.Component<{}, object> {
  public render() {
    return (
      <MainLayout currentTab={eMenu.more}>
        <div className="more-container">了解更多</div>
      </MainLayout>
    )
  }
}
