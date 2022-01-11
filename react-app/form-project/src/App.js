import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate replace to="/signup" />} />
      </Routes>
    </div>
  );
};

export default App;
