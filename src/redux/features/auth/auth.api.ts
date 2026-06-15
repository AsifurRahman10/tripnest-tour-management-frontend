import { baseApi } from '../../baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (userInfo) => ({
        url: '/user/register',
        method: 'POST',
        data: userInfo
      })
    })
  })
})

export const { useRegisterMutation } = authApi
