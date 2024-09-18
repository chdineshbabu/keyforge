"use client";

import React from "react";
import { useContext, useState } from "react";
import { SeedContext } from "../app/context/WalletContextProvider";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { MnemonicContext } from "../app/context/WalletContextProvider";
import FilledMnemonic from "./FilledMnemonic";

function AddOrCreate() {
  const [mnemonic, setMnemonic] = useContext(MnemonicContext);
  const [seed, setSeed] = useContext(SeedContext);
  const [addOpen, setAddOpen] = useState(false);
  const generateSeed = () => {
    const mnemonic = generateMnemonic();
    setMnemonic(mnemonic);
    console.log(mnemonic);
    const seeds = mnemonicToSeedSync(mnemonic);
    setSeed(seeds);
    console.log(seeds);
    alert("Account created successfully ");
  };
  const addWallet = () => {
    setAddOpen(true);
  };
  return (
    <div>
      {!seed ? (
        <div>
          <button
            onClick={addWallet}
            className="border-2 rounded-lg bg-slate-300 text-black p-2 m-2"
          >
            {" "}
            Add wallet{" "}
          </button>
          <button
            onClick={generateSeed}
            className="border-2 rounded-lg bg-slate-300 text-black p-2 m-2"
          >
            {" "}
            Create Wallet
          </button>

          <div></div>
          {!addOpen ? (
            <></>
          ) : (
            <div className="">
              <input
                className="w-96 border p-1 rounded-sm"
                type="text"
                placeholder="Type your Mnomic"
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          <FilledMnemonic />
        </div>
      )}
    </div>
  );
}

export default AddOrCreate;
