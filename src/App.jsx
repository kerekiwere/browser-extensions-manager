import { ExtensionsProvider } from "./contexts/ExtensionsContext";
import Header from "./sections/Header";
import Main from "./sections/Main";

function App() {
  return (
    <>
      <Header />
      <ExtensionsProvider>
        <Main />
      </ExtensionsProvider>
    </>
  );
}

export default App;
