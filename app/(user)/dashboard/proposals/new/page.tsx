'use client';


import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import FormInput from '@/app/components/form-input/form-input'
import NotificationBox from '@/app/components/notification-box/notification-box'
import PreviousButton from '@/app/components/previous-button/previous-button'
import Button from '@/app/components/button/button';
import { useProposal } from '@/app/providers/proposals-provider';


function NewProposal() {
    const { setNewProposal } = useProposal();
    const router = useRouter();
    const [proposal, setProposal] = useState({
        title: "",
        description: "",
        images: {},
        discussion: ""
    });

    function handleChange(e: any) {
        const { name, value } = e.target;
        
        setProposal({
            ...proposal,
            [name]: value
        })
    }
 
    function previewProposal(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const isValid: boolean = Object.values(proposal).every(value => Boolean(value));
        console.log(isValid, Object.values(proposal).every(value => Boolean(value)), proposal)
        if(!isValid) {
            toast.error("Add a proposal");
        } else {
            // Set user proposal
            setNewProposal(proposal);

            router.push("/dashboard/proposals/view");
        }    
    }

    return (
        <>
            <Toaster 
                position="bottom-right"
                reverseOrder={false}
            />

            <form 
                className='grid grid-cols-[1fr,max-content] gap-x-9' 
                onSubmit={previewProposal}
                noValidate
            >
                <section className='flex flex-col gap-y-6'>
                    <PreviousButton />
                    <NotificationBox type="warning" />

                    {/* Form */}
                    <div className='flex flex-col gap-y-4'>
                        <FormInput 
                            type="text"
                            name="title"
                            label="title"
                            value={proposal.title}
                            onChange={handleChange}
                            required
                        />

                        <FormInput 
                            type="textarea"
                            name="description"
                            label="description"
                            value={proposal.description}
                            onChange={handleChange}
                            required
                        />

                        <FormInput 
                            type="text"
                            name="discussion"
                            label="discussion"
                            placeholder="https://forum.balancer.fi/proposal"
                            value={proposal.discussion}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </section>

                {/* Aside */}
                <aside className='w-23vw h-fit py-6 px-[.97rem] space-y-2'>
                    <Button
                        type="submit"
                        role="preview proposal button"
                        variant="border"
                        styles="w-full rounded-full-important text-white"
                    >
                        Preview
                    </Button>

                    <Button
                        type="button"
                        role="connect wallet button"
                        variant="accent"
                        styles="w-full rounded-full-important"
                    >
                        Connect wallet
                    </Button>
                </aside>
            </form>
        </>
    )
}

export default NewProposal