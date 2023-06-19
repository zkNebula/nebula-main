'use client';

import { createContext, ReactNode, useState, FC } from "react";
  import { WagmiConfig } from "wagmi";

interface Web3ContextProps {
    config: any
};

const Web3Context = createContext<Web3ContextProps>({
    config: null
});

const Web3Provider = ({ children }: ReactNode) => {
    const [config, setConfig] = useState<Web3ContextProps | null>(null);

    return (
        <Web3Context.Provider value={config}>
            {children}
        </Web3Context.Provider>
}