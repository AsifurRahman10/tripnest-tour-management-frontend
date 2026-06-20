import type { ISidebarItem } from '@/types'
import { lazy } from 'react'

const Analytics = lazy(() => import('@/pages/Admin/Analytics/AnalyticsPage'))
const AddTourType = lazy(
  () => import('@/pages/Admin/AddTourType/AddTourTypePage')
)

export const adminSidebarItem: ISidebarItem[] = [
  {
    title: 'DashBoard',
    items: [
      {
        title: 'Analytics',
        route: '/admin/analytics',
        component: Analytics
      }
    ]
  },
  {
    title: 'Tour Management',
    items: [
      {
        title: 'Add Tour Type',
        route: '/admin/tour-types',
        component: AddTourType
      }
    ]
  }
]
