"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-[40px] rounded-full px-3 py-2 flex items-center transition duration-700 ease-in-out ${
        darkMode ? "bg-violet-700 justify-end" : "bg-yellow-400 justify-start"
      }`}
    >
      {darkMode ? (
        <Icon icon="ph:moon-fill" className="text-white" width="20" />
      ) : (
        <Icon icon="ph:sun-fill" className="text-yellow-600" width="20" />
      )}
    </button>
  );
};

export default ThemeToggle;
