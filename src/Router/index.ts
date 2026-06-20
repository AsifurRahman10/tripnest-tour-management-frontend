import { createBrowserRouter } from 'react-router'
import LoginPage from '../pages/login/LoginPage'
import RegisterPage from '../pages/Register/RegisterPage'
import { VerifyPage } from '../pages/VerifyPage/VerifyPage'
import App from '@/App'
import { DashboardLayout } from '@/layout/DashboardLayout'
import { generateRoutes } from '@/utils/genrateRoutes'
import { adminSidebarItem } from '@/Router/adminSidebarItem'

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
    Component: DashboardLayout,
    children: [...generateRoutes(adminSidebarItem)]
  },
  {
    path: '/user',
    Component: DashboardLayout,
    children: [
      {
        // Component: App,
        path: 'bookings'
      }
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
  }
])
