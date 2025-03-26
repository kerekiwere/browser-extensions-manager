import React from "react";
import logoDark from "../assets/images/logo-dark.svg";
import logoLight from "../assets/images/logo-light.svg";
import ThemeToggle from "../components/ThemeToggle";

export default function Header() {
  return (
    <header className="container py-5 md:py-10">
      <div className="bg-neutral-0 flex justify-between rounded-xl border border-b-3 border-neutral-200 px-3 py-2 md:px-4 md:py-3 dark:border-neutral-900 dark:bg-neutral-800">
        <img src={logoDark} alt="Logo image" className="block dark:hidden" />
        <img src={logoLight} alt="Logo image" className="hidden dark:block" />
        <ThemeToggle />
      </div>
    </header>
  );
}
