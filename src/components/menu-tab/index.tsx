import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

const MenuTab = () => {
  return (
    <div className="nav-tab-container">
      <NavLink className="item" to="/activity-photo" activeClassName="active">
        活动照片
      </NavLink>
      <NavLink className="item" to="/today-status" activeClassName="active">
        今日状态
      </NavLink>
      <NavLink className="item" to="/daily-food" activeClassName="active">
        每日食谱
      </NavLink>
      <NavLink className="item" to="/more" activeClassName="active">
        了解更多
      </NavLink>
    </div>
  )
}

export default MenuTab
