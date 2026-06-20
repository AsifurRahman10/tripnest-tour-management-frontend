import { adminSidebarItem } from '@/Router/adminSidebarItem'
import { userSidebarItem } from '@/Router/userSidebarItem'
import type { IRole } from '@/types'

export const getSidebarItem = (role: IRole) => {
  switch (role) {
    case 'SUPER_ADMIN':
      return [...adminSidebarItem]
    case 'ADMIN':
      return [...adminSidebarItem]
    case 'USER':
      return [...userSidebarItem]
    default:
      return []
  }
}
