/*
 * @Description: 今日状态
 * @Author: Hexon
 * @Date: 2019-10-28 17:35:19
 * @LastEditors: Hexon
 * @LastEditTime: 2019-10-29 10:28:33
 */
import * as React from 'react'
import MainLayout, { eMenu } from '@layouts/main-layout'
export default class TodayStatus extends React.Component<{}, object> {
  public render() {
    return (
      <MainLayout currentTab={eMenu.todayStatus}>
        <div className="today-status-container">今日状态</div>
      </MainLayout>
    )
  }
}
