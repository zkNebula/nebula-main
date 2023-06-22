'use client';

import { ProposalProvider } from './proposals-provider';
// import { Web3Provider } from './web3-providers';

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ProposalProvider>
            {children}
        </ProposalProvider>
    )
}

export default Providers;