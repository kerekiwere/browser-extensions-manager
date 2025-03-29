import { createContext, useEffect, useState } from "react";
import data from "../../data.json";

const ExtensionsContext = createContext();

const ExtensionsProvider = ({ children }) => {
  const [extensions, setExtensions] = useState([]);
  const [filteredExtensions, setFilteredExtensions] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setExtensions(data);
  }, []);

  useEffect(() => {
    setFilteredExtensions(() => {
      if (filter === "Active") return extensions.filter((ext) => ext.isActive);
      if (filter === "Inactive")
        return extensions.filter((ext) => !ext.isActive);
      return extensions;
    });
  }, [filter, extensions]);

  function removeExtension(name) {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((ext) => ext.name !== name),
    );
  }

  return (
    <ExtensionsContext.Provider
      value={{
        extensions: filteredExtensions,
        setExtensions,
        filter,
        setFilter,
        removeExtension,
      }}
    >
      {children}
    </ExtensionsContext.Provider>
  );
};

export { ExtensionsContext, ExtensionsProvider };
