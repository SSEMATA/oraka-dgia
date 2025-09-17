// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header";        // Capitalize exactly like filename
import FloatingChart from "./components/floatingChart"; // match case exactly

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      {/* Header with site-wide search and nav links */}
      <Header />

      {/* Page Routes */}
      <main className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Floating Chart / Chat Button, always visible */}
      <FloatingChart />
    </Router>
  );
}
