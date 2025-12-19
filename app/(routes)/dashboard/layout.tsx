import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import { AppSidebar } from '@/app/_components/sideBar';
 
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar  />

        <div className="flex flex-1 flex-col">
          <header className=" flex justify-end h-14 items-center gap-4 border-b px-4 ">
          <SidebarTrigger className="flex md:flex" />

          </header>
        

          <main className="flex-1 overflow-auto p-4">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
