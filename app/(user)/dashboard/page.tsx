import React from 'react'
import DashboardSidebar from '@/app/components/dashboard-sidebar/dashboard-sidebar'

function Dashboard() {
  return (
    <main className='grid grid-cols-[max-content,1fr] gap-x-9'>
      <DashboardSidebar />

      <section>Dashboard</section>
    </main>
  )
}

export default Dashboard