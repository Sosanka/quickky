import React, { useState } from 'react';

const WorkerRegisterForm = ({ formData, updateFormData, nextStep }) => {
  const [errors, setErrors] = useState({});
  const [localData, setLocalData] = useState({
    fullName: formData.fullName || '',
    email: formData.email || '',
    phone: formData.phone || '',
    dateOfBirth: formData.dateOfBirth || '',
    gender: formData.gender || '',
    address: formData.address || '',
    city: formData.city || '',
    district: formData.district || '',
    pincode: formData.pincode || '',
    profilePhoto: formData.profilePhoto || null
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const districts = [
    'Guwahati', 'Dibrugarh', 'Jorhat', 'Silchar', 'Tezpur', 'Nagaon',
    'Tinsukia', 'Bongaigaon', 'Dhubri', 'Goalpara', 'Kokrajhar', 'Kamrup'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLocalData(prev => ({ ...prev, profilePhoto: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!localData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!localData.email.trim() || !/\S+@\S+\.\S+/.test(localData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!localData.phone.trim() || !/^\d{10}$/.test(localData.phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }
    if (!localData.district) newErrors.district = 'District is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      updateFormData(localData);
      nextStep();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-white bg-clip-text text-transparent mb-2">
          Personal Information
        </h2>
        <p className="text-white">Let's start with your basic details</p>
      </div>

      {/* Profile Photo Upload */}
      <div className="flex flex-col items-center mb-8">
        <label htmlFor="profilePhoto" className="cursor-pointer group">
          <div className="relative">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden border-4 border-slate-700 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
              {photoPreview ? (
                <img 
                  src={photoPreview} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg className="w-16 h-16 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0118.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <input 
            id="profilePhoto"
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <p className="text-white mt-4 text-sm">Click to upload your profile photo</p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={localData.fullName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-white border-2 transition-all ${
              errors.fullName ? 'border-red-500' : 'border-slate-300 focus:border-blue-500'
            } text-black placeholder-gray-600 focus:outline-none`}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={localData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-white border-2 transition-all ${
              errors.email ? 'border-red-500' : 'border-slate-300 focus:border-blue-500'
            } text-black placeholder-gray-600 focus:outline-none`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={localData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-white border-2 transition-all ${
              errors.phone ? 'border-red-500' : 'border-slate-300 focus:border-blue-500'
            } text-black placeholder-gray-600 focus:outline-none`}
            placeholder="10-digit mobile number"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={localData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 text-black placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Gender
          </label>
          <select
            name="gender"
            value={localData.gender}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 text-black focus:outline-none"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* District */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            District <span className="text-red-500">*</span>
          </label>
          <select
            name="district"
            value={localData.district}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-white border-2 transition-all ${
              errors.district ? 'border-red-500' : 'border-slate-300 focus:border-blue-500'
            } text-black focus:outline-none`}
          >
            <option value="">Select district</option>
            {districts.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
          {errors.district && <p className="text-red-400 text-xs mt-1">{errors.district}</p>}
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Address
        </label>
        <textarea
          name="address"
          value={localData.address}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 text-black placeholder-gray-600 focus:outline-none resize-none"
          placeholder="Enter your complete address"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* City */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            City
          </label>
          <input
            type="text"
            name="city"
            value={localData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 text-black placeholder-gray-600 focus:outline-none"
            placeholder="Enter your city"
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="block text-sm font-semibold text-white mb-3">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            value={localData.pincode}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-300 focus:border-blue-500 text-black placeholder-gray-600 focus:outline-none"
            placeholder="6-digit pincode"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 px-6 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
      >
        Continue to Service Details →
      </button>
    </form>
  );
};

export default WorkerRegisterForm;
