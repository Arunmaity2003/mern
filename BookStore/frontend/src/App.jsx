import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Login from "./pages/Login.jsx";
import Register from "./Register.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Hero from "./pages/user/Hero.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/register" element={<Register />} />
        <Route path= "/contact" element={<Contact />} />
        <Route path= "/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
