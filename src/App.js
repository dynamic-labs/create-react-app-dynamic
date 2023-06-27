import "./App.css";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <DynamicContextProvider
        settings={{
          environmentId: process.env.REACT_APP_DYNAMIC_PROJECT_ID || "",
        }}
      >
        <Home />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
