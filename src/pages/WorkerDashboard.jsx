import React, { useState } from "react";
import WorkerStats from "../components/Worker/WorkerStats";
import BookingList from "../components/Worker/BookingList";
import WorkerProfile from "../components/Worker/WorkerProfile";

const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = {
    totalBookings: 45,
    completedJobs: 38,
    earnings: 45000,
    rating: 4.8,
    pendingBookings: 7,
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "bookings", label: "Bookings", icon: "📅" },
    { id: "profile", label: "My Profile", icon: "👤" },
    { id: "earnings", label: "Earnings", icon: "💵" },
  ];

  return (
    <div className="min-h-screen bg-white text-blue-900">
      {/* Header */}
      <header className="border-b border-blue-100 bg-gradient-to-r from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-blue-600 mb-2 mt-20">
              Welcome back, Worker 👋
            </h1>
            <p className="text-blue-500 font-semibold">
              Professional Photographer
            </p>
          </div>

          <div className="text-right mt-4 md:mt-0">
            <div className="flex items-center justify-end space-x-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-2xl font-bold text-blue-700">
                {stats.rating}
              </span>
            </div>
            <p className="text-sm text-blue-400">
              Average Rating (127 reviews)
            </p>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Total Bookings",
            value: stats.totalBookings,
            icon: "📋",
            color: "from-blue-500 to-blue-400",
          },
          {
            label: "Completed",
            value: stats.completedJobs,
            icon: "✅",
            color: "from-green-500 to-emerald-400",
          },
          {
            label: "Pending",
            value: stats.pendingBookings,
            icon: "⏳",
            color: "from-orange-400 to-amber-400",
          },
          {
            label: "Earnings",
            value: stats.earnings,
            icon: "💰",
            color: "from-blue-600 to-blue-400",
            unit: "₹",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg border border-blue-100 transition-all"
          >
            <p className="text-blue-400 text-sm mb-2">{stat.label}</p>
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-blue-600">
                {stat.unit || ""}
                {stat.value.toLocaleString()}
              </p>
              <div
                className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Navigation Tabs */}
      <nav className="max-w-7xl mx-auto px-4 mb-8">
        <div className="bg-blue-50 rounded-2xl p-2 border border-blue-100 flex flex-wrap justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                  : "text-blue-600 hover:text-blue-700 hover:bg-blue-100"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        {activeTab === "overview" && (
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Recent Bookings
            </h2>
            <BookingList limit={5} />
          </div>
        )}

        {activeTab === "bookings" && (
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              All Bookings
            </h2>
            <BookingList />
          </div>
        )}

        {activeTab === "profile" && (
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
            <WorkerProfile />
          </div>
        )}

        {activeTab === "earnings" && (
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Earnings Overview
            </h2>
            <WorkerStats />
          </div>
        )}
      </main>
    </div>
  );
};

export default WorkerDashboard;
