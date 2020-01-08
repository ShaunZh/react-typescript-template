import React, { ReactElement } from 'react'
import { UserInfo } from '@/redux/modules/user/types'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'typesafe-actions'

const mapState = (state: RootState) => ({
  user: state.user
})
const connector = connect(mapState)
type PropsFromRedux = ConnectedProps<typeof connector>

interface PropsFromParent {
  user: UserInfo
  children: React.ReactNode
  auth?: Array<string> | string // 权限
  noMatch: React.ReactNode // 没有权限时返回的信息
}
type Props = PropsFromRedux & PropsFromParent

// 注意：因为AuthWrapper是作为一个组件被使用的，返回值需要添加 as ReactElement<any> 来避免typescript报错
// 参考：https://stackoverflow.com/questions/54905376/type-error-jsx-element-type-null-undefined-is-not-a-constructor-functi
function Authorized(props: Props) {
  const { children, user, auth = '', noMatch } = props
  const { role = '' } = user
  if (!auth) return children as ReactElement<any>
  const _authority: Array<string> = Array.isArray(auth) ? auth : [auth]
  if (_authority.includes(role)) return children as ReactElement<any>
  return noMatch as ReactElement<any>
}

export default connect(mapState)(Authorized)
