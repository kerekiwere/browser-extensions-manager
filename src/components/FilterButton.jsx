import React from "react";

export default function FilterButton({ children, onClick, isActive }) {
  return (
    <button
      className={`bg-neutral-0 border-neutral cursor-pointer rounded-full border border-neutral-200 px-5 py-2 text-xl hover:opacity-75 md:text-base dark:border-neutral-600 dark:bg-neutral-700 ${isActive && "text-neutral-0 bg-red-700 dark:border-red-400 dark:bg-red-400 dark:text-neutral-900"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
