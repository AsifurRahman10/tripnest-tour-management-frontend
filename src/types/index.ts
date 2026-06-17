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
