import React from "react";
import ThemeSwitch from "./ThemeSwitcher";
import { FiGithub } from "react-icons/fi";
import logoWhite from "../app/logo-white.png";
import Image from "next/image";
import  logoBlack  from "../app/logo-black.png";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4">
      <div className="font-poppins flex items-center text-4xl">
        <Image src={theme === 'dark' ? logoWhite : logoBlack} width={50} height={50} />
        KeyForge
      </div>
      <div className="flex gap-2 items-center mt-4 sm:mt-0">
        <ThemeSwitch />
        <div className="border-2 rounded-lg p-1">
        <a href="https://github.com/chdineshbabu/keyforge" target="blank"><FiGithub size="1.5rem" /></a>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
