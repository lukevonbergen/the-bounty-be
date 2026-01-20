import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import WhatsOn from './pages/WhatsOn';
import PrivateHire from './pages/PrivateHire';
import Contact from './pages/Contact';
import Location from './pages/Location';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/whats-on" element={<WhatsOn />} />
        <Route path="/private-hire" element={<PrivateHire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
