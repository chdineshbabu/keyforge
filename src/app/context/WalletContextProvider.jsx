"use client";

import React, { createContext, useState } from "react";

export const SeedContext = createContext([]);
export const MnemonicContext = createContext([]);
export const AccountContext = createContext([]);
export const AccountCountContext = createContext();

const WalletContextProvider = ({ children }) => {
  const [seed, setSeed] = useState(null);
  const [account, setAccount] = useState([]);
  const [mnemonic, setMnemonic] = useState(null);
  const [accountCount, setAccountCount] = useState(0);

  return (
    <AccountCountContext.Provider value={[accountCount, setAccountCount]}>
      <AccountContext.Provider value={[account, setAccount]}>
        <MnemonicContext.Provider value={[mnemonic, setMnemonic]}>
          <SeedContext.Provider value={[seed, setSeed]}>
            {children}
          </SeedContext.Provider>
        </MnemonicContext.Provider>
      </AccountContext.Provider>
    </AccountCountContext.Provider>
  );
};

export default WalletContextProvider;
