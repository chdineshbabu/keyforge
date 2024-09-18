'use client'

import AddOrCreate from "@/components/AddOrCreate";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

export default function Home() {
  const [seed , setSeed] = useState(null)
  const [accounts, setAccounts] = useState(null)
  return (
    <div>
      <Navbar />
      <p className="text-lg py-6 font-extralight ">
        A web based solana blockchain wallet
      </p>
      
    </div>
  );
}
