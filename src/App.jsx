import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Main Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import ProvidersPage from './pages/ProvidersPage';
import NotFound from './pages/NotFound';

// Worker Pages
import WorkerDashboard from './pages/WorkerDashboard';
import WorkerRegister from './pages/WorkerRegister';
import ProviderDetail from './components/Worker/ProviderDetail';

// Booking / Service Components
import BookingModel from './components/UserBooking/BookingModal';
import ServiceProviders from './components/UserBooking/ServiceProviders';

// Auth Pages
import RoleSelectionPage from './pages/Auth/RoleSelectionPage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setIsAuthenticated(true);
      setUserRole(storedRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('serviceCategory');
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Navbar: hidden on all /auth routes */}
        {!window.location.pathname.includes('/auth') && (
          <Navbar
            isAuthenticated={isAuthenticated}
            userRole={userRole}
            onLogout={handleLogout}
          />
        )}

        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="/booking" element={<BookingModel />} />
            <Route path="/service-providers" element={<ServiceProviders />} />
            <Route path="/provider-detail" element={<ProviderDetail />} />

            {/* Auth Routes */}
            <Route path="/auth" element={<RoleSelectionPage />} />
            <Route path="/auth/:role/login" element={<LoginPage />} />
            <Route path="/auth/:role/signup" element={<SignupPage />} />

            {/* Protected Worker Routes */}
            {isAuthenticated && userRole === 'worker' ? (
              <>
                <Route path="/worker-dashboard" element={<WorkerDashboard />} />
                <Route path="/worker-register" element={<WorkerRegister />} />
              </>
            ) : (
              <>
                {/* Redirect unauthorized access to auth */}
                <Route path="/worker-dashboard" element={<Navigate to="/auth" />} />
                <Route path="/worker-register" element={<Navigate to="/auth" />} />
              </>
            )}

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer: hidden on all /auth routes */}
        {!window.location.pathname.includes('/auth') && <Footer />}
      </div>
    </Router>
  );
}

export default App;
