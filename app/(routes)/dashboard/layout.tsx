import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { AppSidebar } from '@/app/_components/sideBar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider 
     style={{
      
    }}>
      <AppSidebar />
      <main style={{ flexGrow: 1, padding: '1rem' }}>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}