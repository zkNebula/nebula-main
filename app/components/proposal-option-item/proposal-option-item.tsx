import { ProposalOption } from '@/typings';
import React from 'react'

const ProposalOptionItem = ({ percentage, title, stat }: ProposalOption) => {
  return (
    <article className="h-[2.6rem] flex items-center justify-between relative z-10">
        <div className="bg-[#113E53] h-full absolute top-0 left-0 -z-[5] rounded-md py-2" style={{ width: percentage }} />
        <div className='flex items-center gap-x-2 px-3'>
            <p className='text-base font-medium'>{title}</p>
            <span className='text-sm font-syne'>{stat}</span>
        </div>
        <span>{percentage}</span>
    </article>
  )
}

export default ProposalOptionItem