import React, { useContext } from "react";
import { ExtensionsContext } from "../contexts/ExtensionsContext";
import ExtensionCard from "../components/ExtensionCard";
import Button from "../components/Button";
import FilterButton from "../components/FilterButton";

export default function Main() {
  const { extensions } = useContext(ExtensionsContext);

  return (
    <main className="container">
      <div className="mb-10 flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <h1 className="text-center text-4xl font-bold tracking-tighter">
          Extensions List
        </h1>
        <div className="flex justify-center gap-3">
          <FilterButton>All</FilterButton>
          <FilterButton>Active</FilterButton>
          <FilterButton>Inactive</FilterButton>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {extensions.map((extension, index) => (
          <ExtensionCard key={index} extension={extension} />
        ))}
      </div>
    </main>
  );
}
