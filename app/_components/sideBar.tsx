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
    url: "",
    icon: Home,
  },
  {
    title: "AI Tools",
    url: "#",
    icon: SquarePlus,
  },
  {
    title: "My History",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Billing",
    url: "#",
    icon: Receipt,
  },
  {
    title: "Profile",
    url: "#",
    icon: UserPen,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="relative  ">
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