import React from 'react';
import { IoArrowDown, IoSearchOutline } from 'react-icons/io5';
import NotificationBox from '@/app/components/notification-box/notification-box'
import ProposalItem from '@/app/components/proposal-item/proposal-item';
import { proposals } from '@/app/lib/constants';
import DashboardSidebar from '@/app/components/dashboard-sidebar/dashboard-sidebar';

function Proposals() {
  return (
    <main className='grid grid-cols-[max-content,1fr] gap-x-9'>
        <DashboardSidebar />

        <section className="flex flex-col gap-y-6">
            <NotificationBox type="info" />

            <section className='mt-4 space-y-6'>
                <header className='flex justify-between items-center'>
                    <h3 className='text-xl text-semibold'>Proposals</h3>
                    <form className='search-box flex items-center relative'>
                        <input type="search" name="search-proposal" className='form-input pl-5' />
                        <IoSearchOutline className='absolute top-[50%] left-4 text-red-500' />
                        <div className='flex items-center'>
                            <select className='form-select'>
                                <option>All</option>
                            </select>
                            <IoArrowDown />
                        </div>
                    </form>
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