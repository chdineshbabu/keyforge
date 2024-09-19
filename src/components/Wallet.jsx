import React, { useContext } from "react";
import Account from "./Account";
import {
  AccountContext,
  AccountCountContext,
  SeedContext,
} from "@/app/context/WalletContextProvider";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

function Wallet() {
  const [accountCount, setAccountCount] = useContext(AccountCountContext);
  const [account, setAccount] = useContext(AccountContext);
  const [seed, setSeed] = useContext(SeedContext);

  const addAccount = () => {
    const path = `m/44'/501'/${accountCount}'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);
    const secretKey = keyPair.secretKey;
    const keypair = Keypair.fromSecretKey(secretKey);
    const pubKey = keypair.publicKey.toBase58();
    const pvtKey = keypair.secretKey.toString("hex");
    const privateKeyBuffer = Buffer.from(pvtKey);
    const base64Encoded = privateKeyBuffer.toString("base64");
    const secKey = secretKey.toString("hex");
    setAccount((prevItems) => [
      ...prevItems,
      { pub: pubKey, pvt: base64Encoded, sec: secKey },
    ]);
    // setAccount({pub:pubKey,pvt:pvtKey,sec:secKey})
    setAccountCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold opacity-80 py-4">Accounts</h1>
        <button
          onClick={addAccount}
          className="border p-2 rounded-md hover:bg-slate-300 hover:text-black"
        >
          New Account
        </button>
      </div>
      <div>
        {accountCount === 0 ? (
          <div className="text-xl font-extralight p-6 text-center">
            No Accounts
          </div>
        ) : (
          <>
            <Account accounts={account} />
          </>
        )}
      </div>
    </div>
  );
}

export default Wallet;
