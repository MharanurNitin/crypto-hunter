import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
