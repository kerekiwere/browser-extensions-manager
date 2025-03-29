import React from "react";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";

export default function ExtensionCard({ extension }) {
  return (
    <div className="bg-neutral-0 rounded-xl border border-b-3 border-neutral-200 px-5 py-4 dark:border-neutral-900 dark:bg-neutral-800">
      <div className="mb-5 flex gap-4">
        <div className="shrink-0">
          <img src={extension.logo} alt={`${extension.name} logo`} />
        </div>
        <div>
          <h2 className="mb-1 text-xl font-bold">{extension.name}</h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            {extension.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button>Remove</Button>
        <ToggleSwitch isActive={extension.isActive} />
      </div>
    </div>
  );
}

// description
// :
// "Capture and export DOM structures quickly."
// isActive
// :
// false
// logo
// :
// "./assets/images/logo-dom-snapshot.svg"
// name
// :
// "DOM Snapshot"
