import { Proposals } from '@/typings';
import React from 'react';
import Profile from '../profile/profile';
import Button from '../button/button';
import ProposalOptionItem from '../proposal-option-item/proposal-option-item';

const ProposalItem = ({ user, title, content, options, endDate, quorum, status }: Proposals) => {
  return (
    <blockquote className='rounded-[12px] border border-tertiary-700 py-6 px-8 space-y-4'>
        <header className='flex justify-between items-center'>
            {/* Profile */}
            <Profile {...user} />

            <Button 
                role="user-account-status"
                variant="accent"
                styles="xxs:rounded-full capitalize font-normal lg:px-[12px] lg:py-[2px]"
            >{status}</Button>
        </header>

        {/* Content */}
        <div className='content space-y-4'>
            <h2 className='font-bold text-[1.11rem]'>{title}</h2>
            <p className='text-[.95rem] leading-relaxed mt-2 text-white/90'>{content.substring(0,300)}...</p>

            {/* Options */}
            <div className='flex flex-col gap-y-0.5'>
                {options.map(option => (
                    <ProposalOptionItem 
                        key={option.title}
                        {...option} 
                    />
                ))}
            </div>

            <p className='text-white/80 text-[.96rem]'>{endDate} - {quorum}</p>
        </div>
    </blockquote>
  )
}

export default ProposalItem