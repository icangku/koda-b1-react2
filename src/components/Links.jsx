import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Porto from "./pages/Porto";

function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact-us" element={<Contact />}></Route>
      <Route path="/portofolio" element={<Porto />}></Route>
    </Routes>
  );
}

export default Links;
