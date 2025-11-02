import React from 'react';

const WorkerStats = () => {
  const earningsData = [
    { month: 'June', amount: 35000, bookings: 8 },
    { month: 'July', amount: 42000, bookings: 10 },
    { month: 'August', amount: 38000, bookings: 9 },
    { month: 'September', amount: 48000, bookings: 12 },
    { month: 'October', amount: 45000, bookings: 11 }
  ];

  const totalEarnings = earningsData.reduce((sum, month) => sum + month.amount, 0);
  const maxAmount = Math.max(...earningsData.map(m => m.amount));

  return (
    <div className="space-y-8">
      {/* Total Earnings Card */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-2xl border border-green-500/50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-green-100 font-semibold text-sm mb-2">Total Earnings</h3>
            <p className="text-5xl font-black">₹{totalEarnings.toLocaleString()}</p>
          </div>
          <div className="text-6xl opacity-30">💰</div>
        </div>
        <p className="text-green-100 text-sm">Last 5 months • {earningsData.reduce((sum, m) => sum + m.bookings, 0)} bookings</p>
      </div>

      {/* Monthly Breakdown */}
      <div>
        <h3 className="text-2xl font-black text-white mb-6">Monthly Breakdown</h3>
        <div className="space-y-3">
          {earningsData.reverse().map((month, index) => {
            const percentage = (month.amount / maxAmount) * 100;
            return (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <span className="font-bold text-white text-lg">{month.month}</span>
                    <p className="text-slate-400 text-xs">({month.bookings} bookings)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      ₹{month.amount.toLocaleString()}
                    </span>
                    <p className="text-slate-400 text-xs">
                      Avg: ₹{Math.round(month.amount / month.bookings).toLocaleString()}
                    </p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500 group-hover:shadow-lg"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Payment Methods */}
      <div>
        <h3 className="text-2xl font-black text-white mb-6">Payment Information</h3>
        <div className="space-y-4">
          {/* Bank Account */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-lg group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h10m4 0a1 1 0 11-2 0m2 0a1 1 0 10-2 0m-4 0a1 1 0 11-2 0m2 0a1 1 0 10-2 0m-4 0a1 1 0 11-2 0m2 0a1 1 0 10-2 0M7 6.5a2.5 2.5 0 015 0m0 0a2.5 2.5 0 015 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Bank Account</p>
                  <p className="text-lg font-bold text-white">HDFC Bank • ****6789</p>
                  <p className="text-xs text-slate-500">Account Verified ✓</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-semibold transition-all text-sm">
                Edit
              </button>
            </div>
          </div>

          {/* UPI */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-lg group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">UPI ID</p>
                  <p className="text-lg font-bold text-white">rajesh@upi</p>
                  <p className="text-xs text-slate-500">Primary Payment Method</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg font-semibold transition-all text-sm">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <h3 className="text-2xl font-black text-white mb-6">Recent Transactions</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {[
            { date: 'Nov 2, 2025', amount: 15000, type: 'Withdrawal', status: 'completed' },
            { date: 'Nov 1, 2025', amount: 8000, type: 'Earning', status: 'completed' },
            { date: 'Oct 31, 2025', amount: 12000, type: 'Earning', status: 'completed' },
            { date: 'Oct 30, 2025', amount: 5000, type: 'Withdrawal', status: 'pending' },
          ].map((tx, idx) => (
            <div key={idx} className="flex items-center justify-between bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-all">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  tx.type === 'Earning' 
                    ? 'bg-green-500/20' 
                    : 'bg-orange-500/20'
                }`}>
                  <svg className={`w-5 h-5 ${tx.type === 'Earning' ? 'text-green-400' : 'text-orange-400'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={tx.type === 'Earning' ? "M12 7a1 1 0 110-2h.01a1 1 0 110 2H12zm-2 2a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 110-2h.01a1 1 0 110 2H14zm2.25-7a.75.75 0 00-.75.75v11.5a.75.75 0 001.5 0V2.75a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v11.5a.75.75 0 001.5 0V2.75a.75.75 0 00-.75-.75h15z" : "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"} clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{tx.type}</p>
                  <p className="text-xs text-slate-500">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold text-sm ${tx.type === 'Earning' ? 'text-green-400' : 'text-orange-400'}`}>
                  {tx.type === 'Earning' ? '+' : '-'}₹{tx.amount.toLocaleString()}
                </p>
                <span className={`text-xs px-2 py-1 rounded font-semibold ${
                  tx.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
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