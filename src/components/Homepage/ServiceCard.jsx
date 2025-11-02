// src/components/ServiceCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/providers", { state: { service } });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-3">{service.description}</p>
      <p className="font-semibold text-blue-600 mb-4">₹{service.price}</p>
      <button
        onClick={handleBooking}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default ServiceCard;
