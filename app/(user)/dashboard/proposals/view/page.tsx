'use client';

import React from 'react';
import { useProposal } from '@/app/providers/proposals-provider';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import PreviousButton from '@/app/components/previous-button/previous-button';
import NotificationBox from '@/app/components/notification-box/notification-box';
import Button from '@/app/components/button/button';
import OptionItem from '@/app/components/option-item/option-item';
import Profile from '@/app/components/profile/profile';
import UserImage from '@/public/images/profile.png';
import ShareIcon from '@/public/svg/share.svg';
import MenuIcon from '@/public/svg/menu.svg';
import { votes } from '@/app/lib/constants';
import DownloadIcon from '@/public/svg/download.svg';
import DiscordLogo from '@/public/svg/discord.svg';
import RedirectIcon from '@/public/svg/redirect.svg';

function Proposal() {
  const router = useRouter();
  const { newProposal } = useProposal();
  
  // Redirect to add proposal page if proposal doesn't exist
  // if(Object.values(newProposal).every(value => Boolean(value)))
  //   router.push("/dashboard/proposals/new");

  return (
    <main className='grid grid-cols-[1fr,max-content] gap-x-9'>
      <section className='flex flex-col gap-y-8'>
        <PreviousButton />
        <NotificationBox type="warning" />

        {/* Proposal content */}
        <div className='proposal-content'>
          <h1 className='text-[1.75rem] leading-9 font-semibold'>{newProposal?.title ?? "Prevent Major $DAO DUMP from USDR distributions"}</h1>

          <div className='mt-6 mb-7 flex items-center justify-between'>
            <div className='flex items-center gap-x-3'>
              <Profile 
                image={UserImage}
                address="0x0B0D...40C8"
              />

              <Button 
                role="user-account-status"
                variant="accent"
                styles="xxs:rounded-full font-normal lg:px-[8px] lg:py-[2px]"
              >Closed</Button>
            </div>

            {/* Actions */}
            <div className='flex items-center gap-x-4'>
              <Button
                role="share button"
                variant='transparent'
                styles="text-[#586069]"
              >
                <Image 
                  src={ShareIcon}
                  alt="share icon"
                  width={8}
                  height={8}
                  className='w-full object-cover'
                />

                Share
              </Button>

              <Button
                role="share button"
                variant='transparent'
                styles="text-[#586069]"
                title="Options"
              >
                <Image 
                  src={MenuIcon}
                  alt="share icon"
                  width={10}
                  height={10}
                  className='w-full object-cover'
                />
              </Button>
            </div>
          </div>

          <p className='text-base text-white/95'>{newProposal?.description ?? "Fill in title and description in order to submit a proposal."}</p>
        </div>

        {/* Discussions */}
        <section className='space-y-2'>
          <h4 className='text-base font-medium'>Discussions</h4>
          <blockquote className='flex items-center gap-x-5 border border-tertiary-700 rounded-[12px] p-[20px]'>
            <Image 
              src={DiscordLogo}
              alt="discord"
              className='w-[7%] object-cover'
            />

            <div>
              <p className='text-[.97rem] col-start-2 col-end-3'>Join the Nebula Discord Server!</p>
              <span className='text-sm text-gray'>Check out the nebula community on Discord - hang out with 2,579 other…</span>
            </div>
          </blockquote>
        </section>

        {/* Votes */}
        <section className='votes rounded-[12px] border border-tertiary-700'>
          <header className='p-5 flex justify-between border-b border-tertiary-700'>
            <div className='flex items-center gap-x-2'>
              <h4 className='font-semibold text-lg'>Votes</h4>
              <span className='bg-tertiary-900 text-white rounded-full px-2 py-[.12rem] text-sm font-medium'>505</span>
            </div>
      
            <Button
              role="download button"
              variant="text-primary"
              title="Download"
            >
              <Image 
                src={DownloadIcon}
                alt="download icon"
                width={10}
                height={10}
                className='w-full object-cover'
              />
            </Button>
          </header>

          <ul className='divide-y divide-tertiary-900'>
            {votes.map(({ user, coins, option }) => (
              <li key={coins} className='flex items-center justify-between py-3 px-5'>
                <Profile {...user} />
                <span className='text-sm text-white/90'>{option}</span>
                <span className='text-[.92rem] font-medium text-white/90'>{coins}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>

      {/* Aside */}
      <aside className='w-[28vw] h-fit py-6 px-[.97rem] space-y-4'>
        <blockquote className='border border-tertiary-700 rounded-lg'>
          <header className='py-4 px-5'>
            <h4 className='text-base'>Information</h4>
          </header>

          {/* Content */}
          <div className='border-t border-tertiary-700'>
            <ul className='wrapper py-4 px-5 space-y-2'>
              <li className='flex items-center justify-between'>
                <span className='text-[.9rem] text-white/90'>Strategie(s):</span>
                <span className='text-[.84rem]'>...</span>
              </li>

              <li className='flex items-center justify-between'>
                <span className='text-[.9rem] text-white/90'>IPFS:</span>
                <Link href="#" className='text-[.84rem] flex items-center gap-x-1 text-accent-shade-800'>
                  #bafkrei
                  <Image 
                    src={RedirectIcon}
                    alt="redirect icon"
                    className='w-4 h-4 object-cover'
                  />
                </Link>
              </li>

              <li className='flex items-center justify-between'>
                <span className='text-[.9rem] text-white/90'>Voting system:</span>
                <span className='text-[.84rem]'>Single choice voting</span>
              </li>

              <li className='flex items-center justify-between'>
                <span className='text-[.9rem] text-white/90'>Start date:</span>
                <span className='text-[.84rem]'>Oct 12, 2022, 8:41 AM</span>
              </li>

              <li className='flex items-center justify-between'>
                <span className='text-[.9rem] text-white/90'>End date:</span>
                <span className='text-[.84rem]'>Oct 16, 2022, 8:41 PM</span>
              </li>

              <li className='flex items-center justify-between'>
                <span className='text-[.9rem] text-white/90'>Snapshot:</span>
                <span className='text-[.84rem]'>15,726,420</span>
              </li>
            </ul>
          </div>
        </blockquote>

        <blockquote className='border border-tertiary-700 rounded-lg'>
          <header className='py-4 px-5'>
            <h4 className='text-base'>Results</h4>
          </header>

          <div className='border-t border-tertiary-700 py-4 px-5 space-y-3'>
            <OptionItem 
              percentage="42.53%"
              title="option 1"
              stat="4.1M DAO"
            />

            <OptionItem 
              percentage="84.02%"
              title="option 2"
              stat="3M DAO"
            />
            
            <OptionItem 
              percentage="50.15%"
              title="option 1"
              stat="18K DAO"
            />
          </div>
        </blockquote>
      </aside>
    </main>
  )
}

export default Proposal