import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const service = state?.service;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
    address: "",
    paymentMethod: "",
    specialInstructions: ""
  });

  useEffect(() => {
    if (!service) {
      navigate("/", { replace: true });
    }
  }, [service, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", { ...formData, service });
    alert(`Booking confirmed`);
  };

  if (!service) return null;

  return (
    <div className="min-h-screen pt-10 lg:pt-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* LEFT: Scrollable Form Section */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-10 lg:top-12 max-h-[calc(100vh-2.5rem)] lg:max-h-[calc(100vh-3rem)] overflow-y-auto custom-scrollbar booking-form">
              <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 lg:p-10 border border-white/50 relative">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-tr-full"></div>

                {/* Header */}
                <div className="relative z-10 mb-8 booking-header">
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold mb-4">
                    📅 BOOK NOW
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-3">
                    Book Your {service.title}
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Complete the form below and our professional will reach out to you shortly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  {/* Full Name */}
                  <div className="group">
                    <label className="block text-gray-700 mb-2 font-semibold text-sm flex items-center gap-2">
                      <span className="text-blue-500">👤</span>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full border-2 border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white group-hover:border-blue-300 text-gray-800 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Email & Phone - Side by Side */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-gray-700 mb-2 font-semibold text-sm flex items-center gap-2">
                        <span className="text-blue-500">📧</span>
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                        className="w-full border-2 border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white group-hover:border-blue-300 text-gray-800 placeholder:text-gray-400"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-700 mb-2 font-semibold text-sm flex items-center gap-2">
                        <span className="text-blue-500">📱</span>
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit number"
                        pattern="[0-9]{10}"
                        required
                        className="w-full border-2 border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white group-hover:border-blue-300 text-gray-800 placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Date & Time - Side by Side */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-gray-700 mb-2 font-semibold text-sm flex items-center gap-2">
                        <span className="text-blue-500">📅</span>
                        Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        required
                        className="w-full border-2 border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white group-hover:border-blue-300 text-gray-800"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-700 mb-2 font-semibold text-sm flex items-center gap-2">
                        <span className="text-blue-500">⏰</span>
                        Time Slot <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        required
                        className="w-full border-2 border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white group-hover:border-blue-300 text-gray-800"
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="group">
                    <label className="block text-gray-700 mb-2 font-semibold text-sm flex items-center gap-2">
                      <span className="text-blue-500">📍</span>
                      Service Location <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter complete address with landmark"
                      required
                      rows="3"
                      className="w-full border-2 border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white group-hover:border-blue-300 text-gray-800 placeholder:text-gray-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Payment Options */}
                  <div>
                    <label className="block text-gray-700 mb-3 font-semibold text-sm flex items-center gap-2">
                      <span className="text-blue-500">💳</span>
                      Payment Method <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { value: "card", label: "Card", icon: "💳", gradient: "from-blue-500 to-cyan-500" },
                        { value: "upi", label: "UPI", icon: "📱", gradient: "from-purple-500 to-pink-500" },
                        { value: "cod", label: "Cash", icon: "💵", gradient: "from-green-500 to-emerald-500" }
                      ].map((method) => (
                        <label key={method.value} className="relative cursor-pointer group">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.value}
                            checked={formData.paymentMethod === method.value}
                            onChange={handleInputChange}
                            className="peer sr-only"
                            required
                          />
                          <div className={`border-2 border-gray-200 rounded-2xl p-4 text-center transition-all peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-blue-500 hover:border-blue-300 peer-checked:bg-gradient-to-r peer-checked:${method.gradient} peer-checked:text-white`}>
                            <div className="text-3xl mb-2">{method.icon}</div>
                            <div className="font-semibold text-sm">{method.label}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Special Instructions */}
                  <div className="group">
                    <label className="block text-gray-700 mb-2 font-semibold text-sm flex items-center gap-2">
                      <span className="text-blue-500">📝</span>
                      Special Instructions <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      placeholder="Any specific requirements..."
                      rows="2"
                      className="w-full border-2 border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white group-hover:border-blue-300 text-gray-800 placeholder:text-gray-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 mt-6 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Confirm Booking
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-6 pt-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1.5 bg-green-50 px-3 py-2 rounded-full">
                      <span className="text-green-600">🔒</span>
                      <span className="font-semibold">Secure</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-2 rounded-full">
                      <span className="text-blue-600">✓</span>
                      <span className="font-semibold">Verified</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-purple-50 px-3 py-2 rounded-full">
                      <span className="text-purple-600">⚡</span>
                      <span className="font-semibold">Instant</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT: Fixed Photo Section */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-10 lg:top-12 h-[calc(100vh-2.5rem)] lg:h-[calc(100vh-3rem)]">
              <div className="h-full bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl p-4 backdrop-blur-sm border border-white/50 shadow-2xl relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-10 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>

                {/* Main Image Container */}
                <div className="relative h-[60%] rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <span className="text-yellow-500 text-lg">⭐</span>
                    <span className="font-bold text-gray-800">4.9</span>
                    <span className="text-gray-500 text-sm">/5</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                    {service.category || "Premium Service"}
                  </div>
                </div>

                {/* Service Details Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50">
                  {/* Title & Price */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl lg:text-3xl font-black text-gray-800 mb-1">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 text-sm">Professional at your doorstep</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        ₹{service.price}
                      </div>
                      <div className="text-xs text-gray-500">Starting price</div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: "✨", label: "Premium Quality", color: "blue" },
                      { icon: "⚡", label: "Quick Service", color: "indigo" },
                      { icon: "🛡️", label: "100% Safe", color: "purple" },
                      { icon: "💯", label: "Satisfaction", color: "pink" }
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 bg-gradient-to-r from-${feature.color}-50 to-${feature.color}-100/50 px-3 py-2.5 rounded-xl`}
                      >
                        <span className="text-xl">{feature.icon}</span>
                        <span className="text-xs font-semibold text-gray-700">{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Info */}
                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <span>👥</span>
                      <span>2500+ Happy Customers</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>🏆</span>
                      <span>Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar & Responsive Overrides */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(226, 232, 240, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #6366f1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #4f46e5);
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        @media (max-width: 640px) {
          .booking-header h1 {
            font-size: 1.75rem;
          }
          .booking-form input,
          .booking-form textarea,
          .booking-form select {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BookingPage;
