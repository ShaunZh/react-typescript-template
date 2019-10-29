/*
 * @Description: 每日食谱
 * @Author: Hexon
 * @Date: 2019-10-29 10:17:33
 * @LastEditors: Hexon
 * @LastEditTime: 2019-10-29 10:28:20
 */
import * as React from 'react'
import MainLayout, { eMenu } from '@layouts/main-layout'

export default class DailyFood extends React.Component<{}, object> {
  public render() {
    return (
      <MainLayout currentTab={eMenu.dailyFood}>
        <div className="daily-food-container">每日食谱</div>
      </MainLayout>
    )
  }
}
