import React from "react";

export default function ToggleSwitch({ isActive }) {
  return (
    <label>
      <div className="relative cursor-pointer">
        <input type="checkbox" className="peer sr-only" checked={isActive} />
        <div className="block h-6 w-10 rounded-full bg-neutral-300 peer-checked:bg-red-400"></div>
        <div className="bg-neutral-0 absolute top-1 left-1 h-4 w-4 rounded-full transition peer-checked:translate-x-full"></div>
      </div>
    </label>
  );
}
