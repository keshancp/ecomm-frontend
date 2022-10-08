import React from "react";
import Login from "./components/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
