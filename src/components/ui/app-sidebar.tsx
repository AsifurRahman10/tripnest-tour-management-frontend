import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'
import { Logo } from '@/assets/logo/Logo'
import { getSidebarItem } from '@/utils/getSidebarItem'
import { useGetMeQuery } from '@/redux/features/auth/auth.api'
import type { IRole } from '@/types'

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: getMe } = useGetMeQuery(undefined)
  const data = getSidebarItem(getMe?.data?.role as IRole)
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className='flex items-center gap-2 ml-2 mt-2'>
          <Logo /> <span className='font-semibold text-primary'>TripNest</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.route}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
