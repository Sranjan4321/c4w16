import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import { Products } from "../components/Products";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
        </Routes>
      </div>
    </>
  );
};
export { MainRoutes };
