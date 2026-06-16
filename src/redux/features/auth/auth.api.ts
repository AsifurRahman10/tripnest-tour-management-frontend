import { baseApi } from '../../baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (userInfo) => ({
        url: '/user/register',
        method: 'POST',
        data: userInfo
      })
    }),
    login: build.mutation({
      query: (loginInfo) => ({
        url: '/auth/login',
        method: 'POST',
        data: loginInfo
      })
    })
  })
})

export const { useRegisterMutation, useLoginMutation } = authApi
