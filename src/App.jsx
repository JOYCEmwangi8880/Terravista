import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Navbar';
import Contact from './pages/Contact';
import  Footer  from './components/Footer';
import About from './pages/About';
import Features from './pages/Features';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/features" element={<Features />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;