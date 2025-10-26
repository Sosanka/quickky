import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import BookingModel from "./components/BookingModal"
import ProvidersPage from "./pages/ProvidersPage";
import ServiceProviders from "./components/ServiceProviders";
import ProviderDetail from "./components/ProviderDetail";
// import Contact from "./pages/Contact";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/providers" element={<ProvidersPage />} />
        <Route path="/booking" element={<BookingModel />} />
        <Route path="/contact" element={<Contact />}/>
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/providers" element={<ServiceProviders />} />
        <Route path="/provider-detail" element={<ProviderDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
