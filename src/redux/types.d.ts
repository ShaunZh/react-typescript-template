import { StateType, ActionType } from 'typesafe-actions'

// declare module属于typescript模块扩展语法
// TODO: 尝试将 Store, RootState, RootAction放入一个独立的module中，而不是放入typesafe-actions中声明，但是下面的声明方式无效
// declare namespace MyType {
//   export type Store = StateType<typeof import('./index').default>

//   export type RootState = StateType<typeof import('./root-reducer').default>

//   export type RootAction = ActionType<typeof import('./root-action').default>
// }

// declare module 'typesafe-actions' {
//   interface Types {
//     RootAction: ActionType<typeof import('./root-action').default>
//   }
// }

// 扩展typesafe-actions的类型
declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./index').default>

  export type RootState = StateType<typeof import('./root-reducer').default>

  export type RootAction = ActionType<typeof import('./root-action').default>

  interface Types {
    RootAction: RootAction
  }
}
