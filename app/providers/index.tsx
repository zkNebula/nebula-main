'use client';

import { ProposalProvider } from './proposals-provider';

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ProposalProvider>
            {children}
        </ProposalProvider> 
    )
}

export default Providers;