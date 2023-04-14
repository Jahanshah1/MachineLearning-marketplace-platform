import React from 'react';


import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';

import { publicProvider } from 'wagmi/providers/public';


import { ConnectButton } from '@rainbow-me/rainbowkit';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const Navbar = () => {
  return (
    <div>
      <nav className="fixed w-full top-0 z-50 bg-opacity-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-semibold font-poppins text-xl">
              MLMP
            </div>
            <div className="flex space-x-4">
              <a href="/" className="text-white">Home</a>
              <a href="/Marketplace" className="text-white">Marketplace</a>
              <a href="/Publish" className="text-white">Publish data</a>
              <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                  <ConnectButton showBalance={false} />
                </RainbowKitProvider>
              </WagmiConfig>

              

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
