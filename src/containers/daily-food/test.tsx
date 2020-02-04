import * as React from 'react'

import { List } from 'antd-mobile'

const Item = List.Item

const Test = () => {
  return (
    <div className="g-test">
      <List renderHeader={() => 'Subtitle'} className="my-list">
        <Item arrow="horizontal" multipleLine onClick={() => {}} platform="android">
          ListItem （Android）
        </Item>
      </List>
    </div>
  )
}

export default Test
