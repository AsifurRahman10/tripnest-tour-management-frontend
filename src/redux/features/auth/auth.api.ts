import type {
  ILoginInfo,
  ILoginResponse,
  IRegisterInfo,
  IRegisterResponse,
  ISendResponse
} from '@/types'
import { baseApi } from '../../baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<ISendResponse<IRegisterResponse>, IRegisterInfo>({
      query: (userInfo) => ({
        url: '/user/register',
        method: 'POST',
        data: userInfo
      })
    }),
    login: build.mutation<ISendResponse<ILoginResponse>, ILoginInfo>({
      query: (loginInfo) => ({
        url: '/auth/login',
        method: 'POST',
        data: loginInfo
      })
    }),
    sendOtp: build.mutation<ISendResponse<null>, { email: string }>({
      query: (userInfo) => ({
        url: '/otp/send',
        method: 'POST',
        data: userInfo
      })
    })
  })
})

export const { useRegisterMutation, useLoginMutation, useSendOtpMutation } =
  authApi
