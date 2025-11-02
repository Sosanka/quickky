// src/components/ServiceProviders.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import providers from "../../data/providers";

const ServiceProviders = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const service = state?.service;

  if (!service) {
    return (
      <p className="text-center text-red-500 mt-20">
        No service selected. Please go back and choose a service.
      </p>
    );
  }

  const matched = providers
    .filter((p) => p.serviceId === service.id)
    .slice(0, 5);

  return (
    <div className="max-w-5xl mx-auto py-8 mt-20">
      <h2 className="text-3xl font-bold mb-6">{service.title} Providers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matched.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={provider.image}
              alt={provider.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{provider.name}</h3>
            <p className="text-gray-600 mb-2">{provider.specialty}</p>
            <p className="text-yellow-500 mb-2">
              Rating: {provider.rating} ★
            </p>
            <p className="font-semibold text-blue-600 mb-4">
              ₹{provider.price}
            </p>
            <button
              onClick={() =>
                navigate("/provider-detail", { state: { provider } })
              }
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProviders;
