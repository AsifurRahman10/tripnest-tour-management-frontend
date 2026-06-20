import { createBrowserRouter, Navigate } from 'react-router'
import LoginPage from '../pages/login/LoginPage'
import RegisterPage from '../pages/Register/RegisterPage'
import { VerifyPage } from '../pages/VerifyPage/VerifyPage'
import App from '@/App'
import { DashboardLayout } from '@/layout/DashboardLayout'
import { generateRoutes } from '@/utils/genrateRoutes'
import { adminSidebarItem } from '@/Router/adminSidebarItem'
import { userSidebarItem } from '@/Router/userSidebarItem'
import { ErrorPage } from '@/pages/Error/ErrorPage'
import { withAuth } from '@/utils/withAuth'
import { role } from '@/constant/role'
import type { IRole } from '@/types'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        // Component: App,
        path: '/about'
      }
    ]
  },
  {
    path: '/admin',
    Component: withAuth(
      DashboardLayout,
      (role.superAdmin || role.admin) as IRole
    ),

    children: [
      {
        index: true,
        element: <Navigate to='/admin/analytics' />
      },

      ...generateRoutes(adminSidebarItem)
    ]
  },
  {
    path: '/user',
    Component: withAuth(DashboardLayout, role.user as IRole),
    children: [
      {
        index: true,
        element: <Navigate to='/user/bookings' />
      },
      ...generateRoutes(userSidebarItem)
    ]
  },
  {
    path: '/login',
    Component: LoginPage
  },
  {
    path: '/register',
    Component: RegisterPage
  },
  {
    path: '/verify',
    Component: VerifyPage
  },
  {
    path: '/error',
    Component: ErrorPage
  },
  {
    path: '*',
    Component: ErrorPage
  }
])
