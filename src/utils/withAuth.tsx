import { useGetMeQuery } from '@/redux/features/auth/auth.api'
import type { IRole } from '@/types'
import { Navigate } from 'react-router'

export const withAuth = (
  WrappedComponent: React.ComponentType,
  role?: IRole
) => {
  return function AuthWarp() {
    const { data, isLoading } = useGetMeQuery(undefined)
    if (!isLoading && !data.data.email) {
      return <Navigate to='/login' />
    }
    if (role && !isLoading && role !== data?.data?.role) {
      return <Navigate to='/error' />
    }
    return <WrappedComponent />
  }
}
