import React from "react";
import Navbar from "../src/components/Navbar";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";

function App() {
  return (
    <main className="App">
      <header>
        <Navbar />
      </header>
      <div className="images-container">
        <p>Hola mundo</p>
      </div>
    </main>
  );
}

export default App;
