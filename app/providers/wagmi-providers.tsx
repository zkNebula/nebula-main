import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { zkSyncTestnet } from "wagmi/chains";

type WagmiProviderType = {
    children: React.ReactNode;
};

const chains = [zkSyncTestnet];
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 2, chains }),
publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const WagmiProvider = ({ children }: WagmiProviderType) => {
return (
    <>
        <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
);
};

export default WagmiProvider;