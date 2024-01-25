import React from "react";
import { ToDoApplication } from "./components/todos";
import { Login, Signup, Success } from "./components/auth";
import { HomePage } from "./components/todos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  // console.log(VITE_REACT_APP_FRONTEND);
  console.log(import.meta.env.VITE_REACT_APP_BACKEND);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/google/callback" element={<ToDoApplication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
