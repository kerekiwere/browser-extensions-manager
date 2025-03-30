import React, { useState } from "react";

export default function ToggleSwitch({ isActive, toggleActive }) {
  // Local `active` state ensures immediate toggle feedback, keeping the toggle animation independent of the parent card’s exit animation
  const [active, setActive] = useState(isActive);

  return (
    <label className="relative cursor-pointer">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={active}
        onChange={toggleActive}
        onClick={() => setActive(!active)}
      />
      <div
        className={`block h-6 w-10 rounded-full bg-neutral-300 peer-checked:bg-red-400 ${active ? "peer-active:bg-neutral-300" : "peer-active:bg-red-400"}`}
        // Animates background color change based on `active` state while the click is held
      ></div>
      <div
        className={`bg-neutral-0 absolute top-1 left-1 h-4 w-4 rounded-full transition peer-checked:translate-x-full ${active ? "peer-active:translate-x-0" : "peer-active:translate-x-full"}`}
        // Animates toggle circle position based on `active` state while the click is held
      ></div>
    </label>
  );
}
