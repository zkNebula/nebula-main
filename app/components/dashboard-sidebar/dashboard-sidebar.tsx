import React from 'react'
import Button from '../button/button';
import DashboardSidebarLink from './dashboard-sidebar-link';
import { dashboardLinks, companySocials } from '@/app/lib/constants';
import SocialLink from '../social-link/social-link';

const DashboardSidebar = () => {  
  return (
    <aside className='w-20vw h-fit border border-tertiary-900 rounded-xl p-4 space-y-6'>
      <header className='content flex flex-col items-center gap-y-4'>
        <figure className='bg-gradient-to-b from-tertiary-shade-900 to-accent-shade-800 rounded-full w-14 h-14 shadow'></figure>

        {/* Header info */}
        <div className='text-center w-full'>
          <h6 className='text-white leading-5 text-lg font-medium'>Nebula</h6>
          <span className='text-white/90 text-[.82rem]'>204 members</span>
          <Button
            role="join button"
            variant="primary"
            styles="block w-full mt-3"
          >
            Join
          </Button>
        </div>
      </header>

      {/* Links */}
      <ul className='content flex flex-col gap-y-2'>
        {dashboardLinks.map(link => (
          <DashboardSidebarLink 
            key={link.name} 
            {...link} 
          />
        ))}
      </ul>

      {/* Footer */}
      <footer className='footer flex gap-x-4'>
        {companySocials.map(social => (
          <SocialLink 
            key={social.title}
            {...social}
          />
        ))}
      </footer>
    </aside>
  )
}

export default DashboardSidebar