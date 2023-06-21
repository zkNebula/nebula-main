'use client';

import { ReactNode } from "react";
import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3ModalTheme } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {  zkSyncTestnet } from "wagmi/chains";

const projectId = "4d1d3340ce52db49bbe842f3aa385ab1";

const chains = [zkSyncTestnet];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const { setTheme } = useWeb3ModalTheme();

// Set modal theme
setTheme({
    themeMode: "dark",
    themeVariables: {
      "--w3m-font-family": "Roboto, sans-serif",
      "--w3m-accent-color": "#2874e7",
      "--w3m-text-medium-regular-size": "12px",
      "--w3m-accent-fill-color": "#fff",
      "--w3m-button-border-radius": "40px",
      "--w3m-text-medium-regular-weight": "400",
    },
  });

const Web3Provider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                {children}
            </WagmiConfig>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </>
    )
}