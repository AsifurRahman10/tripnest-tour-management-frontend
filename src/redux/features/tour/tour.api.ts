import { baseApi } from '../../baseApi'

export const tourApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTourType: build.mutation({
      query: (tourInfo) => ({
        url: '/tour/create-tour-type',
        method: 'POST',
        data: tourInfo
      })
    }),
    getAllTourType: build.query({
      query: () => ({
        url: '/tour/tour-types',
        method: 'GET'
      }),
      providesTags: ['TOUR']
    }),
    deleteTourType: build.mutation({
      query: (tourTypeId) => ({
        url: `/tour/tour-types/${tourTypeId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['TOUR']
    })
  })
})

export const {
  useCreateTourTypeMutation,
  useGetAllTourTypeQuery,
  useDeleteTourTypeMutation
} = tourApi
