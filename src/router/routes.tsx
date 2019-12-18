import ActivityPhoto from '@containers/activity-photo'
import TodayStatus from '@containers/today-status'
import More from '@containers/more'
import DailyFood from '@containers/daily-food'
import NoAuth from '@/containers/noAuth'

const routes = [
  {
    path: '/activity-photo',
    component: ActivityPhoto
  },
  {
    path: '/today-status',
    auth: ['user'],
    component: TodayStatus
  },
  {
    path: '/daily-food',
    auth: ['user'],
    redirectPath: '/no-auth',
    component: DailyFood
  },
  {
    path: '/more',
    auth: ['user'],
    component: More
  },
  // 无权限页面
  {
    path: '/no-auth',
    component: NoAuth
  }
]

export default routes
