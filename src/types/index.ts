/* eslint-disable @typescript-eslint/no-explicit-any */
export type {
  IRegisterInfo,
  IRegisterResponse,
  ILoginInfo,
  ILoginResponse,
  IUser
} from '@/types/auth.types'

export interface ISendResponse<T> {
  statusCode: number
  success: boolean
  message: string
  data: T
}

export interface ISendErrorResponse {
  success: boolean
  message: string
  err: any
  errorSource: any[]
  stack: any
}

export interface ISidebarItem {
  title: string
  items: {
    title: string
    route: string
    component: React.ComponentType
  }[]
}
