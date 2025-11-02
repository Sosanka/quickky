import React, { useState } from 'react';

const WorkerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.photographer@gmail.com',
    phone: '9876543210',
    service: 'Photographer',
    experience: '5-10 years',
    hourlyRate: 1500,
    bio: 'Professional photographer with 8 years of experience in wedding, portrait, and event photography. Specialized in capturing candid moments and creating timeless memories.',
    skills: ['Wedding Photography', 'Portrait', 'Event Photography', 'Drone Photography'],
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          My Profile
        </h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-bold shadow-md hover:shadow-blue-200 transition-all"
          >
            Edit Profile
          </button>
        ) : (
          <div className="space-x-3">
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold border border-blue-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold shadow-md hover:shadow-green-200 transition-all"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-lg border-4 border-blue-100">
            {profile.name.charAt(0)}
          </div>
          {isEditing && (
            <button className="absolute bottom-0 right-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full p-3 shadow-md hover:shadow-lg transform hover:scale-110 transition-transform border-2 border-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0118.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-black text-slate-900 mb-2">{profile.name}</h3>
          <p className="text-blue-600 font-bold mb-3 text-lg">{profile.service}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 font-bold text-slate-800">4.8</span>
              <span className="text-slate-500 text-sm">(127 reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'Full Name', value: profile.name, field: 'name' },
          { label: 'Email', value: profile.email, field: 'email' },
          { label: 'Phone', value: profile.phone, field: 'phone' },
          { label: 'Hourly Rate (₹)', value: profile.hourlyRate, field: 'hourlyRate' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm">
            <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">{item.label}</label>
            {isEditing ? (
              <input
                type={item.field === 'email' ? 'email' : 'text'}
                value={item.value}
                onChange={(e) => setProfile({ ...profile, [item.field]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-blue-50 border-2 border-blue-100 focus:border-blue-400 text-slate-900 focus:outline-none"
              />
            ) : (
              <p className="text-lg font-bold text-slate-900">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      {/* Bio */}
      <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
        <label className="block text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">Professional Bio</label>
        {isEditing ? (
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            rows="4"
            className="w-full px-4 py-3 rounded-lg bg-blue-50 border-2 border-blue-100 focus:border-blue-400 text-slate-900 focus:outline-none resize-none"
          />
        ) : (
          <p className="text-slate-700 leading-relaxed">{profile.bio}</p>
        )}
      </div>

      {/* Skills */}
      <div>
        <h4 className="text-lg font-black text-slate-900 mb-4">Skills & Expertise</h4>
        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold border border-blue-200">
              ✓ {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h4 className="text-lg font-black text-slate-900 mb-4">Weekly Availability</h4>
        <div className="flex flex-wrap gap-2">
          {profile.availability.map((day, idx) => (
            <span key={idx} className="px-3 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-semibold border border-green-200">
              {day}
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div>
        <h4 className="text-lg font-black text-slate-900 mb-4">Portfolio</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-square bg-white border-2 border-blue-100 hover:border-blue-400 transition-all cursor-pointer hover:shadow-md"
            >
              <div className="w-full h-full flex items-center justify-center text-blue-300 group-hover:text-blue-500 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-blue-100/0 group-hover:bg-blue-100/20 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
