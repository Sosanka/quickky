import React from 'react';

const BookingList = ({ limit }) => {
  const bookings = [
    { id: 1, client: 'Priya Sharma', service: 'Wedding Photography', date: '2025-11-15', time: '10:00 AM', status: 'confirmed', amount: 15000 },
    { id: 2, client: 'Amit Kumar', service: 'Portrait Session', date: '2025-11-08', time: '2:00 PM', status: 'pending', amount: 3000 },
    { id: 3, client: 'Sneha Devi', service: 'Event Photography', date: '2025-11-20', time: '6:00 PM', status: 'confirmed', amount: 8000 },
    { id: 4, client: 'Rahul Bora', service: 'Product Photography', date: '2025-11-12', time: '11:00 AM', status: 'completed', amount: 5000 },
    { id: 5, client: 'Anjali Das', service: 'Pre-wedding Shoot', date: '2025-11-25', time: '9:00 AM', status: 'confirmed', amount: 20000 }
  ];

  const displayBookings = limit ? bookings.slice(0, limit) : bookings;

  const statusConfig = {
    confirmed: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-300', label: 'Confirmed', icon: '✓' },
    pending: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-300', label: 'Pending', icon: '⏳' },
    completed: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-300', label: 'Completed', icon: '✓' },
    cancelled: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-300', label: 'Cancelled', icon: '✗' }
  };

  return (
    <div className="space-y-5">
      {displayBookings.map(booking => {
        const statusInfo = statusConfig[booking.status];
        return (
          <div
            key={booking.id}
            className="group relative overflow-hidden rounded-2xl bg-white border border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md transition-all p-5"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              
              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow">
                  {booking.client.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 text-lg">{booking.client}</h3>
                  <p className="text-blue-500 text-sm">{booking.service}</p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-center gap-6 text-sm text-blue-700">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">{booking.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{booking.time}</span>
                </div>
              </div>

              {/* Amount & Status */}
              <div className="flex items-center justify-between md:justify-end gap-4">
                <div className="text-right">
                  <p className="text-2xl font-black bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    ₹{booking.amount.toLocaleString()}
                  </p>
                </div>
                <div className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-semibold ${statusInfo.text} ${statusInfo.bg} border ${statusInfo.border}`}>
                  <span>{statusInfo.icon}</span>
                  <span className="text-xs md:text-sm">{statusInfo.label}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons for Pending */}
            {booking.status === 'pending' && (
              <div className="mt-4 pt-4 border-t border-blue-100 flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 rounded-lg transition-all font-semibold text-sm shadow hover:shadow-md">
                  Accept Booking
                </button>
                <button className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-2 rounded-lg transition-all font-semibold text-sm shadow hover:shadow-md">
                  Decline
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BookingList;
