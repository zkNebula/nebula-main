import React from 'react'
import DashboardSidebar from '@/app/components/dashboard-sidebar/dashboard-sidebar'
import { Chart } from '@/app/components/chart/chart'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/app/components/ui/accordion';
import { proposals } from '@/app/lib/constants';
import ProposalItem from '@/app/components/proposal-item/proposal-item';
import Button from '@/app/components/button/button';
import FormSearch from '@/app/components/form-search/form-search';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui/tabs';

function Dashboard() {
  return (
    <main className='grid grid-cols-[max-content,1fr] gap-x-9'>
      <DashboardSidebar />

      <section className='space-y-14'>
        <header className='grid grid-cols-2 gap-4'>
          <blockquote>
            <header className='flex items-baseline gap-x-3'>
              <h3 className="text-lg font-semibold">Nebula Balance</h3>
              <span className='text-tertiary-700 text-[1.04rem] font-medium'>102 262 </span>
            </header>
          </blockquote>
          <blockquote className='col-start-2 col-end-3 row-start-1 row-end-3 bg-red-200'>two</blockquote>
          <blockquote>three</blockquote>
        </header>

        {/* Stake box */}
        <section className='py-3'>
          <div className='w-4/6 py-4 bg-red-400 mx-auto'>
            {/* Tabs */}
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Make changes to your account here.</TabsContent>
              <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Proposals */}
        <section className='space-y-4'>
          <div className='space-y-5'>
            <header className='flex justify-between items-center'>
              <h3 className='text-xl text-semibold'>Proposals</h3>
              <FormSearch />
            </header>

            {/* Proposals collection */}
            <div className='space-y-4'> 
              {proposals.filter((_, index) => index < 2).map(proposal => (
                <ProposalItem 
                    key={proposal.title}
                    {...proposal} 
                />
              ))}
            </div>
          </div>

          <Button
            role="proposal-view-button"
            variant='primary'
          >View proposal</Button>
        </section>

        {/* Faqs */}
        <section>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className='border-white/10 px-3' value="item-1">
              <AccordionTrigger className="text-tertiary-700 text-[.98rem] py-5">What is staking?</AccordionTrigger>
              <AccordionContent className="text-[.92rem] leading-relaxed">
                Staking is the process of delegating digital assets to a validator and assigning them to a network to help secure its operations. By doing so, stakers can earn rewards based on the amount of assets they have committed, and the rewards are distributed by staking pools. VenomStake is a platform that aims to simplify the staking process and make it accessible to a wider audience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className='border-white/10 px-3' value="item-2">
              <AccordionTrigger className="text-tertiary-700 text-[.98rem] py-5">How does Nebula Stake work?</AccordionTrigger>
              <AccordionContent className="text-[.92rem] leading-relaxed">
              Staking is the process of delegating digital assets to a validator and assigning them to a network to help secure its operations. By doing so, stakers can earn rewards based on the amount of assets they have committed, and the rewards are distributed by staking pools. VenomStake is a platform that aims to simplify the staking process and make it accessible to a wider audience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className='border-white/10 px-3' value="item-3">
              <AccordionTrigger className="text-tertiary-700 text-[.98rem] py-5">Is it safe to work with Nebula Stake?</AccordionTrigger>
              <AccordionContent className="text-[.92rem] leading-relaxed">
              Staking is the process of delegating digital assets to a validator and assigning them to a network to help secure its operations. By doing so, stakers can earn rewards based on the amount of assets they have committed, and the rewards are distributed by staking pools. VenomStake is a platform that aims to simplify the staking process and make it accessible to a wider audience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </section>
    </main>
  )
}

export default Dashboard