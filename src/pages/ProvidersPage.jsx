// src/pages/ProvidersPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceProviders from "../components/UserBooking/ServiceProviders";

const ProvidersPage = () => {
  const navigate = useNavigate();

  const handleBook = (provider) => {
    // Navigate to booking form, passing selected provider
    navigate("/booking-form", { state: { provider } });
  };

  return <ServiceProviders onBook={handleBook} />;
};

export default ProvidersPage;
