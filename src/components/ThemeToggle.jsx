import React, { useEffect, useState } from "react";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="grid aspect-square w-12 cursor-pointer place-items-center rounded-xl bg-neutral-100 dark:bg-neutral-700"
      onClick={toggleTheme}
    >
      <img src={moon} alt="Moon icon" className="block dark:hidden" />
      <img src={sun} alt="Sun icon" className="hidden dark:block" />
    </button>
  );
}
