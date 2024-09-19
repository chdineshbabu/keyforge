'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
setMounted(true);
    setIsDark(theme === "dark"); 
  }, [theme]);

  if (!mounted) return null;

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    setIsDark(!isDark);
  };

  return (
    <div className="">
      <div
        onClick={handleToggle}
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isDark ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
            isDark ? "translate-x-6" : ""
          }`}
        ></div>
      </div>
      
    </div>
  );
};

export default ThemeSwitch;
