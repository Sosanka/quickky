import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center ">
        <h3 className="text-2xl font-heading font-bold tracking-wide">
            <span className="text-accent text-blue-500 text-4xl">Q</span>
            <span className="text-black">uickky</span>
            <span className="text-accent text-blue-700">.</span>
            <span className="text-accent text-blue-500">com</span>
        </h3>

        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-2 w-96 ml-[-400px]">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search any service"
            className="bg-transparent px-3 w-full outline-none text-sm"
          />
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-1 rounded-full bg-accent text-white font-semibold bg-blue-500 hover:bg-rose-500 transition cursor-pointer ">
            Signup
          </button>
          <button className="px-4 py-1 rounded-full bg-accent text-white font-semibold bg-blue-500 hover:bg-rose-500 transition cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
