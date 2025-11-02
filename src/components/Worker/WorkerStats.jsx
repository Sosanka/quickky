import React, { useState } from "react";

const WorkerStats = () => {
  const initialEarnings = [
    { month: "June", amount: 35000, bookings: 8 },
    { month: "July", amount: 42000, bookings: 10 },
    { month: "August", amount: 38000, bookings: 9 },
    { month: "September", amount: 48000, bookings: 12 },
    { month: "October", amount: 45000, bookings: 11 },
  ];

  const sortedData = [...initialEarnings].sort((a, b) => b.amount - a.amount);
  const totalEarnings = sortedData.reduce((sum, m) => sum + m.amount, 0);
  const maxAmount = Math.max(...sortedData.map((m) => m.amount));
  const minAmount = Math.min(...sortedData.map((m) => m.amount));

  // 🏦 Wallet State
  const [wallet, setWallet] = useState(12000);
  const [transactions, setTransactions] = useState([
    { date: "Nov 2, 2025", amount: 15000, type: "Withdrawal", status: "completed" },
    { date: "Nov 1, 2025", amount: 8000, type: "Earning", status: "completed" },
    { date: "Oct 31, 2025", amount: 12000, type: "Earning", status: "completed" },
    { date: "Oct 30, 2025", amount: 5000, type: "Withdrawal", status: "pending" },
  ]);

  // 📤 Withdraw Function
  const handleWithdraw = () => {
    if (wallet <= 0) {
      alert("Wallet balance is empty. Nothing to withdraw!");
      return;
    }

    const withdrawal = {
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      amount: wallet,
      type: "Withdrawal",
      status: "pending",
    };

    setTransactions([withdrawal, ...transactions]);
    setWallet(0); // wallet emptied after withdraw
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen p-8 space-y-10">
      {/* 💰 Wallet Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg border border-blue-300/50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-blue-100 font-semibold text-sm mb-2">
              Wallet Balance
            </h3>
            <p className="text-5xl font-black">₹{wallet.toLocaleString()}</p>
          </div>
          <div className="text-6xl opacity-40">👛</div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-blue-100 text-sm">Available for withdrawal</p>
          <button
            onClick={handleWithdraw}
            className={`px-5 py-2 rounded-xl font-semibold transition-all text-sm shadow ${
              wallet > 0
                ? "bg-white text-blue-700 hover:bg-blue-100"
                : "bg-blue-300 text-white cursor-not-allowed"
            }`}
            disabled={wallet <= 0}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* 📊 Monthly Breakdown */}
      <div>
        <h3 className="text-2xl font-black text-slate-900 mb-6">
          Earnings by Month
        </h3>
        <div className="space-y-3">
          {sortedData.map((month, index) => {
            const percentage = (month.amount / maxAmount) * 100;
            const isTop = month.amount === maxAmount;
            const isLow = month.amount === minAmount;

            return (
              <div
                key={index}
                className={`group bg-white rounded-xl p-5 border transition-all shadow-sm hover:shadow-md ${
                  isTop
                    ? "border-green-300 bg-green-50"
                    : isLow
                    ? "border-red-200 bg-red-50"
                    : "border-blue-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-slate-900 text-lg">
                      {month.month}
                    </span>
                    {isTop && (
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-600 font-semibold rounded-full border border-green-200">
                        Top Month
                      </span>
                    )}
                    {isLow && (
                      <span className="text-xs px-2 py-1 bg-red-100 text-red-600 font-semibold rounded-full border border-red-200">
                        Lowest
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-2xl font-black ${
                        isTop
                          ? "text-green-600"
                          : isLow
                          ? "text-red-500"
                          : "text-blue-600"
                      }`}
                    >
                      ₹{month.amount.toLocaleString()}
                    </span>
                    <p className="text-slate-500 text-xs">
                      {month.bookings} bookings • Avg ₹
                      {Math.round(month.amount / month.bookings).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-3 bg-blue-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      isTop
                        ? "bg-gradient-to-r from-green-400 to-emerald-500"
                        : isLow
                        ? "bg-gradient-to-r from-red-400 to-pink-500"
                        : "bg-gradient-to-r from-blue-400 to-indigo-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🧾 Transactions */}
      <div>
        <h3 className="text-2xl font-black text-slate-900 mb-6">
          Recent Transactions
        </h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {transactions.map((tx, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white rounded-lg p-4 border border-blue-100 hover:border-blue-200 transition-all shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg ${
                    tx.type === "Earning"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  💸
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">
                    {tx.type}
                  </p>
                  <p className="text-xs text-slate-500">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-bold text-sm ${
                    tx.type === "Earning" ? "text-green-600" : "text-orange-600"
                  }`}
                >
                  {tx.type === "Earning" ? "+" : "-"}₹
                  {tx.amount.toLocaleString()}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded font-semibold ${
                    tx.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkerStats;
