import React, { useContext, useState } from "react";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";
import { ExtensionsContext } from "../contexts/ExtensionsContext";
import Modal from "./Modal";

export default function ExtensionCard({ extension }) {
  const { removeExtension, toggleActive } = useContext(ExtensionsContext);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-neutral-0 flex w-full flex-col justify-between rounded-xl border border-b-3 border-neutral-200 px-5 py-4 dark:border-neutral-900 dark:bg-neutral-800">
      <div className="mb-5 flex gap-4">
        <div className="shrink-0">
          <img src={extension.logo} alt={`${extension.name} logo`} />
        </div>
        <div>
          <h2 className="mb-1 text-xl font-bold">{extension.name}</h2>
          <p className="line-clamp-3 text-neutral-600 dark:text-neutral-300">
            {extension.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={() => setModalOpen(true)}>Remove</Button>
        <ToggleSwitch
          isActive={extension.isActive}
          toggleActive={() => toggleActive(extension.name)}
        />
      </div>
      {modalOpen && (
        <Modal
          onConfirm={() => {
            removeExtension(extension.name);
            setModalOpen(false);
          }}
          onCancel={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
