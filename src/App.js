import React from "react";
import "./styles/App.css";
import Navbar from "./components/navbar";
import Search from "./components/search";

function App() {
  return (
    <div className="App">
      <nav className="App-navbar">{Navbar()}</nav>
      <body className="App-main">{Search()}</body>
      <footer className="App-fotter">
        <label>Powered by KARNAF {"\u00A9"}</label>
      </footer>
    </div>
  );
}

export default App;
