// src/components/ProviderDetail.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProviderDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const provider = state?.provider;

  if (!provider) {
    return (
      <p className="text-center text-red-500 mt-20">
        No provider selected. Please go back and choose a provider.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl mb-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to Providers
      </button>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-blue-200"
        />

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {provider.name}
          </h1>
          <div className="mb-4 text-lg text-gray-700 italic">
            {provider.specialty}
          </div>
          <div className="flex items-center mb-3">
            <span className="text-yellow-500 text-xl font-bold">
              {provider.rating} ★
            </span>
            <span className="ml-3 text-blue-700 font-semibold text-lg">
              ₹{provider.price}
            </span>
          </div>
          <p className="mb-4 text-gray-700">{provider.description}</p>

          <div className="space-y-1 mb-8">
            <p>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              {provider.email}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Phone:</span>{" "}
              {provider.phone}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Location:</span>{" "}
              {provider.location}
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/booking", { state: { service: provider } })
            }
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;
