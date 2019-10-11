import React from "react";
import Navbar from "../src/components/Navbar";
import Body from "../src/components/Body";
import "./App.css";

function App() {
  return (
    <main className="App">
      <header>
        <Navbar />
      </header>
      <div>
        <Body />
      </div>
    </main>
  );
}

export default App;
