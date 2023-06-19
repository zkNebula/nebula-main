'use client';

import FormInput from '@/app/components/form-input/form-input'
import NotificationBox from '@/app/components/notification-box/notification-box'
import PreviousButton from '@/app/components/previous-button/previous-button'
import Button from '@/app/components/button/button';
import React, { FormEvent, useState } from 'react'

function NewProposal() {
    const [proposals, setProposals] = useState({
        title: "",
        description: "",
        images: null,
        discussion: ""
    });

    function handleChange(e: any) {
        const { name, value } = e.target;
        console.log(name, value)

        setProposals({
            ...proposals,
            [name]: value
        })
    }

    console.log(proposals)

    return (
        <main className='grid grid-cols-[1fr,max-content] gap-x-9'>
            <section className='flex flex-col gap-y-6'>
                <PreviousButton />
                <NotificationBox type="warning" />

                {/* Form */}
                <form className='flex flex-col gap-y-4'>
                    <FormInput 
                        type="text"
                        name="title"
                        label="title"
                        value={proposals.title}
                        onChange={handleChange}
                    />

                    <FormInput 
                        type="textarea"
                        name="description"
                        label="description"
                        value={proposals.description}
                        onChange={handleChange}
                    />

                    <FormInput 
                        type="text"
                        name="discussion"
                        label="discussion"
                        placeholder="https://forum.balancer.fi/proposal"
                        value={proposals.discussion}
                        onChange={handleChange}
                    />
                </form>
            </section>

            {/* Aside */}
            <aside className='w-23vw h-fit border border-tertiary-900 rounded-xl py-6 px-[.97rem] space-y-2'>
                <Button
                    role="preview proposal button"
                    variant="border"
                    styles="w-full rounded-full-important text-white"
                >
                    Preview
                </Button>

                <Button
                    role="connect wallet button"
                    variant="accent"
                    styles="w-full rounded-full-important"
                >
                    Connect wallet
                </Button>
            </aside>
        </main>
    )
}

export default NewProposal