import ActivityPhoto from '@containers/activity-photo'
import TodayStatus from '@containers/today-status'
import More from '@containers/more'
import DailyFood from '@containers/daily-food'
import NoAuth from '@/containers/noAuth'

const routes = [
  {
    path: '/activity-photo',
    auth: [''],
    component: ActivityPhoto
  },
  {
    path: '/today-status',
    // auth: [''],
    component: TodayStatus
  },
  {
    path: '/daily-food',
    // auth: [''],
    redirectPath: '/no-auth',
    component: DailyFood
  },
  {
    path: '/more',
    // auth: [''],
    component: More
  },
  // 无权限页面
  {
    path: '/no-auth',
    component: NoAuth
  }
]

export default routes
