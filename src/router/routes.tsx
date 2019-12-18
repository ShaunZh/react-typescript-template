import ActivityPhoto from '@containers/activity-photo'
import TodayStatus from '@containers/today-status'
import More from '@containers/more'
import DailyFood from '@containers/daily-food'
import NoAuth from '@/containers/noAuth'

const routes = [
  {
    path: '/activity-photo',
    auth: ['user'],
    exact: true,
    component: ActivityPhoto
  },
  {
    path: '/today-status',
    auth: ['user'],
    exact: true,
    component: TodayStatus
  },
  {
    path: '/daily-food',
    auth: ['admin'],
    exact: true,
    redirectPath: '/no-auth',
    component: DailyFood
  },
  {
    path: '/more',
    auth: ['user'],
    exact: true,
    component: More
  },
  // 无权限页面
  {
    path: '/no-auth',
    exact: true,
    component: NoAuth
  }
]

export default routes
