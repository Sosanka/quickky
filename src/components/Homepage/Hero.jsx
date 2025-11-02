import React from "react";
import coverImage from "../../assets/cover.png";
import {
  FaCamera,
  FaPalette,
  FaUtensils,
  FaPaintBrush,
  FaConciergeBell,
  FaCouch,
  FaUserTie
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden mt-8 bg-gradient-to-r from-blue-50 to-white px-8 py-24">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-1/3 w-48 h-48 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-30"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="md:w-1/2">
          {/* Testimonial Badge */}
          <div className="inline-block bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-full mb-4 shadow">
            “5,000+ Happy Customers” ⭐⭐⭐⭐⭐
          </div>

          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Find the Best Professionals in Your City
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            From photographers to painters — book trusted experts in just a few clicks.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center text-blue-600">
              <FaCamera size={32} />
              <span className="mt-2 text-sm">Photographer</span>
            </div>
            <div className="flex flex-col items-center text-blue-600">
              <FaUserTie size={32} />
              <span className="mt-2 text-sm">Makeup Artist</span>
            </div>
            <div className="flex flex-col items-center text-blue-600">
              <FaUtensils size={32} />
              <span className="mt-2 text-sm">Cook</span>
            </div>
            <div className="flex flex-col items-center text-blue-600">
              <FaPaintBrush size={32} />
              <span className="mt-2 text-sm">Painter</span>
            </div>
            <div className="flex flex-col items-center text-blue-600">
              <FaConciergeBell size={32} />
              <span className="mt-2 text-sm">Catering</span>
            </div>
            <div className="flex flex-col items-center text-blue-600">
              <FaCouch size={32} />
              <span className="mt-2 text-sm">Interior Designer</span>
            </div>
          </div>

         <button
            className="bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition"
            onClick={() => {
            const el = document.getElementById('services');
          if (el) {
           el.scrollIntoView({ behavior: 'smooth' });
             }
             }}
               >
                   Explore All Services
         </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
          {/* Animated Arrow */}
          <div className="absolute -left-10 top-1/3 animate-bounce">
            <svg
              className="w-10 h-10 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4-4 4M3 12h18" />
            </svg>
          </div>
          <img
            src={coverImage}
            alt="Hero"
            className="w-full max-w-md h-[500px] md:h-[450px] rounded-3xl shadow-2xl object-cover transform hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
