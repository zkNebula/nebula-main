import React from 'react';
import NotificationBox from '@/app/components/notification-box/notification-box'
import ProposalItem from '@/app/components/proposal-item/proposal-item';
import { proposals } from '@/app/lib/constants';
import DashboardSidebar from '@/app/components/dashboard-sidebar/dashboard-sidebar';
import FormSearch from '@/app/components/form-search/form-search';


function Proposals() {
  return (
    <main className='grid grid-cols-[max-content,1fr] gap-x-9'>
        <DashboardSidebar />

        <section className="flex flex-col gap-y-6">
            <NotificationBox type="info" />

            <section className='mt-4 space-y-6'>
                <header className='flex justify-between items-center'>
                    <h3 className='text-xl text-semibold'>Proposals</h3>
                    <FormSearch />
                </header>

                {/* Proposals */}
                <section className='flex flex-col gap-y-4'>
                    {proposals.map(proposal => (
                        <ProposalItem 
                            key={proposal.title}
                            {...proposal} 
                        />
                    ))}
                </section>
            </section>
        </section>
    </main>
  )
}

export default Proposals