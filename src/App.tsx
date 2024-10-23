"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header.js";
import Home from "./pages/Home.js";
import Alain from "./pages/Alain.js";
import PA from "./pages/PA.js";
import NotFound from "./pages/NotFound.js";
import Footer from "./components/Footer.js";


export default function App() {
  return (
    <div className="flex-col w-full">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="alain" element={<Alain />} />
          <Route path="pa" element={<PA />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </div>

  );
}