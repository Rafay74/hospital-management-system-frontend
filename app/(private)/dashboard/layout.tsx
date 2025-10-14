import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start ">
      <aside>
        <Sidebar />
      </aside>

      <main className="grid w-full h-full pl-[300px]">
        <Header />
        {children}
      </main>
    </div>
  )
}
