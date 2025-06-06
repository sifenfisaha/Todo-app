import React, { useState } from "react";
import lightIcon from "../assets/icon-sun.svg";
import darkIcon from "../assets/icon-moon.svg";
import { applyTheme } from "../theme/theme";

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const handleThemeToggle = () => {
    applyTheme();
    setIsDark((prev) => !prev);
  };
  return (
    <header className="z-10 max-w-xl flex items-center mx-auto justify-between">
      <h1 className="text-white font-bold text-3xl tracking-[0.75rem]">TODO</h1>
      <button className="cursor-pointer" onClick={handleThemeToggle}>
        {isDark ? (
          <img src={lightIcon} alt="sun" />
        ) : (
          <img src={darkIcon} alt="moon" />
        )}
      </button>
    </header>
  );
};

export default Header;
