import React from "react";
import Navbar from "../src/components/Navbar";
import Body from "../src/components/Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Body />
      </main>
    </div>
  );
}

export default App;
