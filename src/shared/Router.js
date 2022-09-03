import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Create from "../pages/Create";
import Signup from "../pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="create" element={<Create/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;