import React, { useState } from "react";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaHome,
  FaConciergeBell,
  FaInfoCircle,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const assamDistricts = [
  "Baksa",
  "Barpeta",
  "Biswanath",
  "Bongaigaon",
  "Cachar",
  "Charaideo",
  "Chirang",
  "Darrang",
  "Dhemaji",
  "Dhubri",
  "Dibrugarh",
  "Dima Hasao",
  "Goalpara",
  "Golaghat",
  "Hailakandi",
  "Hojai",
  "Jorhat",
  "Kamrup",
  "Kamrup Metropolitan",
  "Karbi Anglong",
  "Karimganj",
  "Kokrajhar",
  "Lakhimpur",
  "Majuli",
  "Morigaon",
  "Nagaon",
  "Nalbari",
  "Sivasagar",
  "Sonitpur",
  "South Salmara-Mankachar",
  "Tinsukia",
  "Udalguri",
  "West Karbi Anglong",
];

const navItems = [
  { label: "Home", icon: <FaHome />, href: "#" },
  { label: "Services", icon: <FaConciergeBell />, href: "#" },
  { label: "About Us", icon: <FaInfoCircle />, href: "#" },
  { label: "Contact", icon: <FaPhoneAlt />, href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState("Select Location");

  return (
    <nav className="bg-white/80 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 flex justify-between items-center">
        {/* Logo */}
        <h3 className="text-xl md:text-2xl font-heading font-bold tracking-wide flex items-center">
          <span className="text-blue-500 text-2xl md:text-4xl">Q</span>
          <span className="text-black ml-1">uickky</span>
          <span className="text-blue-700 ml-1">.</span>
          <span className="text-blue-500 ml-1">com</span>
        </h3>

        {/* Location Selector */}
        <div className="hidden md:flex items-center relative mr-4">
          <FaMapMarkerAlt className="text-blue-500 text-xl absolute left-3 pointer-events-none" />
          <select
            aria-label="Select location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-9 pr-6 py-2 rounded-full border border-gray-300 bg-white text-sm text-gray-700 cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          >
            <option disabled>Select Location</option>
            {assamDistricts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 md:w-96">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search any service"
            className="bg-transparent px-3 w-full outline-none text-sm"
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-1 rounded-full bg-blue-500 text-white font-semibold hover:bg-rose-500 transition cursor-pointer">
            Signup
          </button>
          <button className="px-4 py-1 rounded-full bg-blue-500 text-white font-semibold hover:bg-rose-500 transition cursor-pointer">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
            className="text-blue-600 text-2xl focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-60 bg-white flex flex-col animate-slideIn">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 shadow-sm rounded-t-xl">
            <h3 className="flex items-center text-3xl font-bold">
              <span className="text-blue-500">Q</span>
              <span className="text-black ml-1">uickky</span>
              <span className="text-blue-700 ml-1">.</span>
              <span className="text-blue-500 ml-1">com</span>
            </h3>
            <button
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-blue-700 text-3xl focus:outline-none transform transition-transform duration-200 hover:scale-125"
            >
              <FaTimes />
            </button>
          </div>

          {/* Location Selector in Mobile */}
          <div className="px-6 pt-6">
            <label
              htmlFor="mobile-location"
              className="flex items-center gap-2 text-blue-600 font-semibold mb-2"
            >
              <FaMapMarkerAlt /> Select Location
            </label>
            <select
              id="mobile-location"
              aria-label="Select location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option disabled>Select Location</option>
              {assamDistricts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          {/* Navigation */}
          <div className="flex-grow flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="w-10/12 flex items-center justify-center gap-4 py-4 rounded-xl text-xl font-semibold text-blue-600 hover:bg-blue-50 hover:text-blue-800 transition focus:ring-2 focus:ring-blue-200"
                style={{ boxShadow: "0 1px 5px rgba(30, 64, 175, 0.06)" }}
              >
                <span className="text-2xl">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="p-4 mb-8 space-y-4">
            <button className="w-full py-3 rounded-2xl bg-blue-500 text-white text-lg font-bold shadow hover:bg-rose-500 transition cursor-pointer">
              Signup
            </button>
            <button className="w-full py-3 rounded-2xl bg-blue-500 text-white text-lg font-bold shadow hover:bg-rose-500 transition cursor-pointer">
              Login
            </button>
          </div>
        </div>
      )}

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(-60px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
