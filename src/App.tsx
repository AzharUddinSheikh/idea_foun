import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./pages/News";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Navigate to="news" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
