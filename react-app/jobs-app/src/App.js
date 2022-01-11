import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//Components
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import Error from "./pages/Error";

//Context
import JobsContextProvider from "./context/JobsContextProvider";

const App = () => {
  return (
    <JobsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<Error />} />
      </Routes>
    </JobsContextProvider>
  );
};

export default App;
