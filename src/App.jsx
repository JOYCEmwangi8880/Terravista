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
import AgentDashboard from './pages/AgentDashboard';
import LandlordDashboard from './pages/LandlordDashboard';
import AddTenant from './pages/AddTenant';
import TenantInfo from './pages/TenantInfo';
import MyTenants from './pages/MyTenants';
import PropertyDetails from './pages/PropertyDetails';
import FinancialReport from './pages/FinancialReport';
import Documents from './pages/Documents';
import Settings from './pages/Settings';

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
        <Route path="/agent-dashboard" element={<AgentDashboard />} />
        <Route path="/landlord-dashboard" element={<LandlordDashboard />} />
        <Route path="/add-tenant" element={<AddTenant />} />
        <Route path="/tenant-info/:id" element={<TenantInfo />} />
        <Route path="/my-tenants" element={<MyTenants />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
        <Route path="/financial-report" element={<FinancialReport />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;