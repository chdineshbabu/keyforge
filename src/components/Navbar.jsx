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
    <div className="flex justify-between items-center">
      <div className="font-poppins flex items-center text-4xl">
        <Image src={theme === 'dark' ? logoWhite: logoBlack} width={50} height={50} />
        KeyForge
      </div>
      <div className="flex gap-2 items-center">
        <ThemeSwitch />
        <div className="border-2 rounded-lg p-1">
          <FiGithub size="1.5rem" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
