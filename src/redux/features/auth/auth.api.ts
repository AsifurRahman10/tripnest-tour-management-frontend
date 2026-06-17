import type {
  ILoginInfo,
  ILoginResponse,
  IRegisterInfo,
  IRegisterResponse,
  ISendResponse
} from '@/types'
import { baseApi } from '../../baseApi'

export const authApi = baseApi.injectEndpoints({
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
    logout: build.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      }),
      invalidatesTags: ['USER']
    }),
    sendOtp: build.mutation<ISendResponse<null>, { email: string }>({
      query: (userInfo) => ({
        url: '/otp/send',
        method: 'POST',
        data: userInfo
      })
    }),
    verifyOTP: build.mutation<
      ISendResponse<null>,
      { email: string; otp: string }
    >({
      query: (userInfo) => ({
        url: '/otp/verify',
        method: 'POST',
        data: userInfo
      })
    }),
    getMe: build.query({
      query: () => ({
        url: '/user/me',
        method: 'GET'
      }),
      providesTags: ['USER']
    })
  })
})

export const {
  useLogoutMutation,
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOTPMutation,
  useGetMeQuery
} = authApi
