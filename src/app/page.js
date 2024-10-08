"use client";

import AddOrCreate from "@/components/AddOrCreate";
import Navbar from "@/components/Navbar";
import { useContext, useState } from "react";
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { SeedContext } from "./context/WalletContextProvider";
import WalletContextProvider from "./context/WalletContextProvider";
import logoWhite from "./logo-white.png";
import Image from "next/image";
import { logoBlack } from "./logo-black.png";

export default function Home() {
  const [accounts, setAccounts] = useState(null);
  const [wallet, setWallet] = useState(false);
  const [inputState, setInputState] = useState(false);
  const [seed, setSeed] = useContext(SeedContext);
  const generateSeed = () => {
    const mnemonic = generateMnemonic();
    const seeds = mnemonicToSeedSync(mnemonic);
    setSeed(seeds);
  };
  return (
    <WalletContextProvider>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <p className="text-lg py-6 font-extralight text-center">
          A web-based Solana blockchain wallet
        </p>
        <AddOrCreate />
      </div>
    </WalletContextProvider>
  );
}
