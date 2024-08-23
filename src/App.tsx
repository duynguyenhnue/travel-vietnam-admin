import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from './page/home';
import Auth from './page/auth';
import Admin from './page/admin';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/doctors" element={<Home />} />
        <Route path="/news" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:link" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
