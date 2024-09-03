import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from './page/home';
import Auth from './page/auth';
import Admin from './page/admin';
import useAuthRedirect from './components/auth/auth-redirect';

function App() {
  return (
    <Router>
      <AuthWrapper /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/doctors" element={<Home />} />
        <Route path="/news" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/advise" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:link" element={<Admin />} />
      </Routes>
    </Router>
  );
}

function AuthWrapper() {
  useAuthRedirect();
  return null; 
}

export default App;
