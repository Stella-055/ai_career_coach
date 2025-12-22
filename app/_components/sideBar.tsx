import { Calendar, Home, SquarePlus, Receipt, UserPen } from "lucide-react"
import Image from 'next/image';
import {

  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Workspace",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "AI Tools",
    url: "/dashboard/ai-tools",
    icon: SquarePlus,
  },
  {
    title: "My History",
    url: "/dashboard/History",
    icon: Calendar,
  },
  {
    title: "Billing",
    url: "/dashboard/billing",
    icon: Receipt,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: UserPen,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="
    sticky top-0
    h-screen
    shrink-0
    border-r
  ">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel style={{marginTop:"1rem",marginBottom:"1rem"}}> 
            <Image
              src="/pic.png"
              alt="Logo"
              width={150}
              height={50}
            />
            </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu  >
              {items.map((item) => (
                <SidebarMenuItem  key={item.title}>
                  <SidebarMenuButton asChild>
                    <a style={{fontSize:"1rem"}} href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}