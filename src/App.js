import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewsList from "./pages/NewsList";
import AddNews from "./pages/AddNews";
import EditNews from "./pages/EditNews";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddNews />} />
          <Route path="/edit/:id" element={<EditNews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
