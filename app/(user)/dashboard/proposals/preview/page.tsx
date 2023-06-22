'use client';

import React from 'react';
import { useProposal } from '@/app/providers/proposals-provider';
import { useRouter } from 'next/router';
import PreviousButton from '@/app/components/previous-button/previous-button';
import NotificationBox from '@/app/components/notification-box/notification-box';
import Button from '@/app/components/button/button';


function ProposalPreview() {
//   const router = useRouter();
  const { newProposal } = useProposal();

  return (
    <main className='grid grid-cols-[1fr,max-content] gap-x-9'>
      <section className='flex flex-col gap-y-8'>
        <PreviousButton />
        <NotificationBox type="warning" />

        {/* Proposal content */}
        <div className='proposal-content space-y-4'>
          <h1 className='text-[1.75rem] leading-9 font-semibold'>{newProposal?.title ?? "Untitled"}</h1>
          <p className='text-base text-white/95'>{newProposal?.description ?? "Fill in title and description in order to submit a proposal."}</p>
        </div>
      </section>

      {/* Aside */}
      <aside className='w-20vw h-fit py-6 px-[.97rem] space-y-4'>
        <Button
            role="edit"
            variant="border"
            styles="w-full rounded-full-important"
        >
            Edit
        </Button>

        <Button
            role="submit proposal"
            variant="accent"
            styles="w-full rounded-full-important"
        >
            Submit proposal
        </Button>
      </aside>
    </main>
  )
}

export default ProposalPreview;
// onClick={() => router.push({
//     pathname: `/dashboard/proposals/${newProposal?.title}/edit`,
//     query: { title: newProposal?.title }
// })}