import type { ISidebarItem } from '@/types'
import { lazy } from 'react'

const Booking = lazy(() => import('@/pages/User/Booking/BookingPage'))

export const userSidebarItem: ISidebarItem[] = [
  {
    title: 'Bookings',
    items: [
      {
        title: 'Bookings',
        route: '/user/bookings',
        component: Booking
      }
    ]
  }
]
