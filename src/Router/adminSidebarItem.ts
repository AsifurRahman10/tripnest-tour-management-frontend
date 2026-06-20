import type { ISidebarItem } from '@/types'
import { AnalyticsPage } from '@/pages/Admin/Analytics/AnalyticsPage'
import { AddTourTypePage } from '@/pages/Admin/AddTourType/AddTourTypePage'

export const adminSidebarItem: ISidebarItem[] = [
  {
    title: 'DashBoard',
    items: [
      {
        title: 'Analytics',
        route: '/admin/analytics',
        component: AnalyticsPage
      }
    ]
  },
  {
    title: 'Tour Management',
    items: [
      {
        title: 'Add Tour Type',
        route: '/admin/tour-types',
        component: AddTourTypePage
      }
    ]
  }
]
