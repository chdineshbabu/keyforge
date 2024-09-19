import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

function Account({ accounts }) {
  return (
    <div>
      {accounts.map((account, index) => (
        <div
          key={index}
          className="p-2 max-w-full border-2 rounded-md border-slate-500 my-2"
        >
          <span className="font-extralight text-xl">Account {index + 1}</span>
          <br />

          <div className="lg:px-14 p-2 lg:p-4">
            <h1 className="py-1 ">Public Key:</h1>
            <div className="border-b pr-2 border-slate-700 flex justify-between">
              <p className="text-sm">{account.pub}</p>
              <CopyToClipboard text={account.pub}>
                <button>
                  <FaCopy />
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="lg:px-14 p-2 lg:p-4">
            <h1 className="py-1">Private Key:</h1>
            <div className="border-b pr-2 border-slate-700 flex justify-between">
              <p className="text-sm">
                {"********************************************************"}
              </p>
              <CopyToClipboard text={account.pvt}>
                <button>
                  <FaCopy />
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Account;
