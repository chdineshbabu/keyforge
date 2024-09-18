import { MnemonicContext } from '@/app/context/WalletContextProvider';
import React, { useContext } from 'react';

function FilledMnemonic() {
  const [mnemonic, setMnemonic] = useContext(MnemonicContext);
  const mnemonicWords = mnemonic ? mnemonic.split(' ') : [];

  return (
    <div className='shadow-inner shadow-slate-800 border-2 rounded-md p-4 border-opacity-50 text-black dark:text-slate-300 '>
      <p className='font-semibold mb-4'>Here&apos;s your Mnemonic</p>
      
      <div className='grid grid-rows-3 grid-flow-col gap-4'>
        {mnemonicWords.map((word, index) => (
          <div 
            key={index} 
            className='border-2 border-slate-300 p-2 rounded-md bg-gray-100 shadow-md text-center text-black'
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilledMnemonic;
