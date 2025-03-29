import React from "react";

export default function Button({ children }) {
  return (
    <button className="hover:text-neutral-0 cursor-pointer rounded-2xl border border-neutral-300 px-3.5 py-1.5 transition hover:bg-red-700 dark:border-neutral-600 dark:bg-neutral-800">
      {children}
    </button>
  );
}
