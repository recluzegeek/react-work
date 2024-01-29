import React from "react";
import { ToDoApplication } from "./components/todos";
import { Login, Signup, Success } from "./components/auth";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  // console.log(VITE_REACT_APP_FRONTEND);
  // console.log(import.meta.env.VITE_REACT_APP_BACKEND);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/google/callback" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/to-dos" element={< ToDoApplication />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
