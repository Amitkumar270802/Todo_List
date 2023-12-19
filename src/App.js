import logo from "./logo.svg";
import "./App.css";
import React_Redux_Toolkit from "./Pages/React_Redux_Toolkit";
import React_Todo from "./Pages/React_Todo";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<React_Redux_Toolkit />} />
        <Route path="/react" element={<React_Todo />} />
      </Routes>
    </div>
  );
}

export default App;
