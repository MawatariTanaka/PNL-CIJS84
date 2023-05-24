import React from "react";
import "./App.css";
import { AppProvider } from "./appContext";
import Modifier from "./Components/Modifier";
import Presenter from "./Components/Presenter";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Modifier />
        <Presenter />
      </div>
    </AppProvider>
  );
}

export default App;
