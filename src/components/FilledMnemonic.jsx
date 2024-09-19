import { MnemonicContext } from "@/app/context/WalletContextProvider";
import React, { useContext } from "react";
import { Switch } from "@nextui-org/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

function FilledMnemonic() {
  const [mnemonic, setMnemonic] = useContext(MnemonicContext);
  const mnemonicWords = mnemonic ? mnemonic.split(" ") : [];
  const [isSelected, setIsSelected] = React.useState(true);

  return (
    <div className="border-2 select-none rounded-md p-4 border-opacity-50 text-black dark:text-slate-300 border-slate-400 ">
      <div className="flex justify-between">
        <p className="font-semibold mb-4">Here&apos;s your Mnemonic</p>
        <div className=" items-center flex">
          <Switch
            isSelected={isSelected}
            onValueChange={setIsSelected}
            className="font-bold text-slate-400 underline"
          >
            {isSelected ? "Show" : "Hide"}
          </Switch>
          <CopyToClipboard text={mnemonic}>
            <button className="p-2">
              <FaCopy />
            </button>
          </CopyToClipboard>
        </div>
      </div>

      <div className="grid grid-rows-3 grid-flow-col gap-4 ">
        {mnemonicWords.map((word, index) => (
          <div
            key={index}
            className={`border-2 border-slate-300 p-2 rounded-md bg-gray-100 shadow-md text-center text-black ${
              isSelected ? "blur" : ""
            }`}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilledMnemonic;
