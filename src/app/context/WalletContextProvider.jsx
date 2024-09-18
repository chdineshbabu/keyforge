"use client";

import React, { createContext, useState } from "react";

export const SeedContext = createContext([]);
export const MnemonicContext = createContext([]);
export const AccountContext = createContext([]);

const WalletContextProvider = ({ children }) => {
  const [seed, setSeed] = useState(null);
  const [account, setAccount] = useState(null);
  const [mnemonic, setMnemonic] = useState(null);

  return (
    <AccountContext.Provider value={[account, setAccount]}>
      <MnemonicContext.Provider value={[mnemonic, setMnemonic]}>
        <SeedContext.Provider value={[seed, setSeed]}>
          {children}
        </SeedContext.Provider>
      </MnemonicContext.Provider>
    </AccountContext.Provider>
  );
};

export default WalletContextProvider;
