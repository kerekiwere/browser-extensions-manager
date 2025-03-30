import React, { useContext } from "react";
import { ExtensionsContext } from "../contexts/ExtensionsContext";
import ExtensionCard from "../components/ExtensionCard";
import Button from "../components/Button";
import FilterButton from "../components/FilterButton";
import { motion, AnimatePresence } from "motion/react";

export default function Main() {
  const { extensions, filter, setFilter } = useContext(ExtensionsContext);

  return (
    <main className="container">
      <div className="mb-10 flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <h1 className="text-center text-4xl font-bold tracking-tighter">
          Extensions List
        </h1>
        <div className="flex justify-center gap-3">
          <FilterButton
            onClick={() => setFilter("All")}
            isActive={filter === "All"}
          >
            All
          </FilterButton>
          <FilterButton
            onClick={() => setFilter("Active")}
            isActive={filter === "Active"}
          >
            Active
          </FilterButton>
          <FilterButton
            onClick={() => setFilter("Inactive")}
            isActive={filter === "Inactive"}
          >
            Inactive
          </FilterButton>
        </div>
      </div>
      <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {extensions.map((extension) => (
            <motion.div
              key={extension.name}
              className="flex"
              exit={{ opacity: 0, scale: 0.5 }}
              layout
            >
              <ExtensionCard extension={extension} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
