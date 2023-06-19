'use client';

import NotificationBox from '@/app/components/notification-box/notification-box'
import PreviousButton from '@/app/components/previous-button/previous-button'
import Button from '@/app/components/button/button';

function EditProposal() {
    return (
        <main className='grid grid-cols-[1fr,max-content] gap-x-9'>
            <section className='flex flex-col gap-y-6'>
                <PreviousButton />
                <NotificationBox type="warning" />

            </section>

            {/* Aside */}
            <aside className='w-23vw h-fit border border-tertiary-900 rounded-xl py-6 px-[.97rem] space-y-2'>
                <Button
                    role="preview proposal button"
                    variant="border"
                    styles="w-full rounded-full-important text-white"
                >
                    Edit
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

export default EditProposal