import React from "react";
import ThemeSwitch from "./ThemeSwitcher";
import { FiGithub } from "react-icons/fi";
function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="font-poppins text-4xl">KeyForge</div>
      <div className="flex gap-2 items-center">
        <ThemeSwitch />
        <div className="border-2 rounded-lg p-1">
        <FiGithub  size="1.5rem"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
