'use client';

import { ReactNode } from 'react';
import { ProposalProvider } from './proposals-provider';
// import { ModalProvider } from './modal-provider';
// import WagmiProvider from './wagmi-providers';

type ProviderType = {
    children: ReactNode
}

function Providers({ children }: ProviderType) {
    return (
        <ProposalProvider>
            {children}
        </ProposalProvider>
    )
}

export default Providers;