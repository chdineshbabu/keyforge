"use client";

import React, { useContext, useState } from "react";
import {
  AccountContext,
  SeedContext,
  MnemonicContext,
} from "../app/context/WalletContextProvider";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import FilledMnemonic from "./FilledMnemonic";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import Wallet from "./Wallet";

function AddOrCreate() {
  const [mnemonic, setMnemonic] = useContext(MnemonicContext);
  const [account, setAccount] = useContext(AccountContext);
  const [seed, setSeed] = useContext(SeedContext);
  const [addOpen, setAddOpen] = useState(false);

  // This function will be triggered by the button click
  const generateSeed = () => {
    const generatedMnemonic = generateMnemonic();
    setMnemonic(generatedMnemonic);
    const generatedSeed = mnemonicToSeedSync(generatedMnemonic);
    setSeed(generatedSeed);

    alert("Account created successfully");

    const currentAccounts = account || [];

    // Example code to create and add accounts
    // for (let i = 0; i < 3; i++) {
    //   const path = `m/44'/501'/${i}'/0'`;
    //   const derivedSeed = derivePath(path, generatedSeed.toString("hex")).key;
    //   const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);
    //   const keypair = Keypair.fromSecretKey(keyPair.secretKey);
    //   const pubKey = keypair.publicKey.toBase58();
    //   const pvtKey = keypair.secretKey.toString("hex");
    //   const secKey = keyPair.secretKey.toString("hex");
    //   setAccount([...currentAccounts, { pub: pubKey, pvt: pvtKey, sec: secKey }]);
    // }
  };

  return (
    <div>
      {!seed ? (
        <div className="text-center">
          {/* Optional "Add wallet" button */}
          {/* <button
            onClick={() => setAddOpen(true)}
            className="border-2 rounded-lg bg-slate-300 text-black p-2 m-2"
          >
            Add Wallet
          </button> */}

          <button
            onClick={generateSeed}
            className="border-2 rounded-lg bg-slate-300 text-black p-2 m-2"
          >
            Create Wallet
          </button>

          {!addOpen ? (
            <></>
          ) : (
            <div>
              <input
                className="w-96 border p-1 rounded-sm"
                type="text"
                placeholder="Type your Mnemonic"
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          <FilledMnemonic />
          <Wallet />
        </div>
      )}
    </div>
  );
}

export default AddOrCreate;
