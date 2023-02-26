import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
