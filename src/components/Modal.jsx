import React from "react";
import Button from "./Button";

export default function Modal({ onCancel, onConfirm }) {
  return (
    <div className="fixed top-0 left-0 z-50 grid h-screen w-screen place-items-center bg-neutral-800/50 backdrop-blur-sm">
      <div className="bg-neutral-0 rounded-xl border border-b-3 border-neutral-200 px-5 py-4 dark:border-neutral-900 dark:bg-neutral-800">
        <p className="mb-4 w-[25ch]">
          Are you sure you want to delete this extension?
        </p>
        <div className="flex gap-4">
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onConfirm}>Delete</Button>
        </div>
      </div>
    </div>
  );
}
