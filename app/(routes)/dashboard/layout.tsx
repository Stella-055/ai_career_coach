import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { AppSidebar } from '@/app/_components/sideBar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex ">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}