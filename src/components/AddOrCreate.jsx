"use client";

import React from "react";
import { useContext, useState } from "react";
import {
  AccountContext,
  SeedContext,
} from "../app/context/WalletContextProvider";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { MnemonicContext } from "../app/context/WalletContextProvider";
import FilledMnemonic from "./FilledMnemonic";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import Wallet from "./Wallet";

function AddOrCreate() {
  const [mnemonic, setMnemonic] = useContext(MnemonicContext);
  const [account, setAccount] = useContext(AccountContext);
  const [seed, setSeed] = useContext(SeedContext);
  const [addOpen, setAddOpen] = useState(false);

  const generateSeed = () => {
    const mnemonic = generateMnemonic();
    setMnemonic(mnemonic);
    console.log(mnemonic);
    const seed = mnemonicToSeedSync(mnemonic);
    setSeed(seed);
    console.log(seed);
    alert("Account created successfully");
    const currentAccounts = account || [];

    // for (let i = 0; i < 3; i++) {
    //   const path = `m/44'/501'/${i}'/0'`;
    //   const derivedSeed = derivePath(path, seed.toString("hex")).key;
    //   const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);
    //   const secretKey = keyPair.secretKey;
    //   const keypair = Keypair.fromSecretKey(secretKey);
    //   const pubKey = keypair.publicKey.toBase58();
    //   const pvtKey = keypair.secretKey.toString("hex");
    //   const secKey = secretKey.toString("hex");
    //   setAccount([...currentAccounts, { pub: pubKey, pvt: pvtKey, sec: secKey }]);
    // }

    // console.log(account);
  };

  const addWallet = () => {
    setAddOpen(true);
  };

  return (
    <div>
      {!seed ? (
        <div>
          {/* <button
            onClick={addWallet}
            className="border-2 rounded-lg bg-slate-300 text-black p-2 m-2"
          >
            Add wallet
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
