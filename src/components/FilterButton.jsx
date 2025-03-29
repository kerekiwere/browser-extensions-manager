import React from "react";

export default function FilterButton({ children }) {
  return (
    <button className="bg-neutral-0 border-neutral cursor-pointer rounded-full border border-neutral-200 px-5 py-2 text-xl hover:opacity-75 md:text-base dark:border-neutral-600 dark:bg-neutral-700">
      {children}
    </button>
  );
}
