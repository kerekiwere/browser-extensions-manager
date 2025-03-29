import { createContext, useEffect, useState } from "react";
import data from "../../data.json";

const ExtensionsContext = createContext();

const ExtensionsProvider = ({ children }) => {
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    setExtensions(data);
  }, []);

  return (
    <ExtensionsContext.Provider value={{ extensions, setExtensions }}>
      {children}
    </ExtensionsContext.Provider>
  );
};

export { ExtensionsContext, ExtensionsProvider };
