"use client";

import AddOrCreate from "@/components/AddOrCreate";
import Navbar from "@/components/Navbar";
import { useContext, useState } from "react";
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { SeedContext } from './context/WalletContextProvider';
import WalletContextProvider from './context/WalletContextProvider';

export default function Home() {
  const [accounts, setAccounts] = useState(null);
  const [wallet, setWallet] = useState(false);
  const [inputState, setInputState] = useState(false);
  const [seed, setSeed] = useContext(SeedContext);
  const generateSeed = () => {
    const mnemonic = generateMnemonic();
    const seeds = mnemonicToSeedSync(mnemonic);
    setSeed(seeds); 
    console.log(seeds);
  };
  return (
    <WalletContextProvider>
    <div>
      <Navbar />
      <p className="text-lg py-6 pb-12 font-extralight ">
        A web based solana blockchain wallet
      </p>
      <AddOrCreate />
    </div>
    </WalletContextProvider>
  );
}
