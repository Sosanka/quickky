import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-blue-700 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left section */}
        <h3 className="text-2xl font-heading text-primary font-bold tracking-wide">
          <span className="text-accent text-blue-500 text-4xl">Q</span>uickky<span className="text-accent text-blue-700">.</span><span className="text-accent text-blue-500">com</span>
        </h3>

        {/* Center section */}
        <ul className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0 text-sm font-medium">
          <li>
            <a
              href="/"
              className="hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-blue-500 transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right section */}
        <p className="text-sm text-blue-600 text-center md:text-right">
          © {new Date().getFullYear()} <span className="font-semibold">Quickky</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
