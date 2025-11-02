import React, { useState } from 'react';

const ServiceSelection = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});
  const [localData, setLocalData] = useState({
    serviceType: formData.serviceType || '',
    experience: formData.experience || '',
    skills: formData.skills || [],
    hourlyRate: formData.hourlyRate || '',
    availability: formData.availability || [],
    bio: formData.bio || '',
    portfolio: formData.portfolio || ''
  });

  const serviceTypes = [
    { value: 'photographer', label: 'Photographer', icon: '📷', color: 'from-blue-500 to-cyan-600' },
    { value: 'makeup-artist', label: 'Makeup Artist', icon: '💄', color: 'from-pink-500 to-rose-600' },
    { value: 'cook', label: 'Cook', icon: '👨‍🍳', color: 'from-orange-500 to-red-600' },
    { value: 'painter', label: 'Painter', icon: '🎨', color: 'from-purple-500 to-indigo-600' },
    { value: 'catering', label: 'Catering Service', icon: '🍽️', color: 'from-amber-500 to-orange-600' },
    { value: 'interior-designer', label: 'Interior Designer', icon: '🏠', color: 'from-emerald-500 to-green-600' }
  ];

  const skillsByService = {
    'photographer': ['Wedding Photography', 'Portrait', 'Event Photography', 'Product Photography', 'Drone Photography'],
    'makeup-artist': ['Bridal Makeup', 'Party Makeup', 'Airbrush Makeup', 'HD Makeup', 'Traditional Makeup'],
    'cook': ['Indian Cuisine', 'Chinese Cuisine', 'Continental', 'Bakery', 'South Indian'],
    'painter': ['Wall Painting', 'Texture Painting', 'Waterproofing', 'Wood Painting', 'Exterior Painting'],
    'catering': ['Wedding Catering', 'Corporate Events', 'Birthday Parties', 'Small Gatherings', 'Outdoor Catering'],
    'interior-designer': ['Residential Design', 'Commercial Design', '3D Visualization', 'Space Planning', 'Furniture Design']
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleServiceTypeChange = (value) => {
    setLocalData(prev => ({
      ...prev,
      serviceType: value,
      skills: []
    }));
    if (errors.serviceType) {
      setErrors(prev => ({ ...prev, serviceType: '' }));
    }
  };

  const handleSkillToggle = (skill) => {
    setLocalData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleAvailabilityToggle = (day) => {
    setLocalData(prev => ({
      ...prev,
      availability: prev.availability.includes(day)
        ? prev.availability.filter(d => d !== day)
        : [...prev.availability, day]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
  setErrors(prev => ({ ...prev, [name]: '' }));
  }
  };

  const validate = () => {
    const newErrors = {};
    if (!localData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!localData.experience) newErrors.experience = 'Experience is required';
    if (localData.skills.length === 0) newErrors.skills = 'Please select at least one skill';
    if (!localData.hourlyRate) newErrors.hourlyRate = 'Hourly rate is required';
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

  const getServiceColor = (value) => {
    return serviceTypes.find(s => s.value === value)?.color || '';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Service Details
        </h2>
        <p className="text-slate-400">Tell us about your expertise</p>
      </div>

      {/* Service Type Selection */}
      <div>
        <label className="block text-sm font-semibold text-slate-200 mb-4">
          Select Your Service <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {serviceTypes.map(service => (
            <button
              key={service.value}
              type="button"
              onClick={() => handleServiceTypeChange(service.value)}
              className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                localData.serviceType === service.value
                  ? `bg-gradient-to-br ${service.color} text-white shadow-xl scale-105`
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border-2 border-slate-600 hover:border-slate-500'
              }`}
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <p className="text-xs md:text-sm font-bold text-center">
                {service.label}
              </p>
            </button>
          ))}
        </div>
        {errors.serviceType && <p className="text-red-400 text-xs mt-2">{errors.serviceType}</p>}
      </div>

      {/* Skills Selection */}
      {localData.serviceType && (
        <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600">
          <label className="block text-sm font-semibold text-slate-200 mb-4">
            Your Skills <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {skillsByService[localData.serviceType].map(skill => (
              <button
                key={skill}
                type="button"
                onClick={() => handleSkillToggle(skill)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 ${
                  localData.skills.includes(skill)
                    ? `bg-gradient-to-r ${getServiceColor(localData.serviceType)} text-white shadow-lg`
                    : 'bg-slate-600 text-slate-200 hover:bg-slate-500 border border-slate-500'
                }`}
              >
                {localData.skills.includes(skill) && '✓ '}
                {skill}
              </button>
            ))}
          </div>
          {errors.skills && <p className="text-red-400 text-xs mt-2">{errors.skills}</p>}
        </div>
      )}

      {/* Experience and Hourly Rate */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-200 mb-3">
            Years of Experience <span className="text-red-500">*</span>
          </label>
          <select
            name="experience"
            value={localData.experience}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-slate-700 border-2 transition-all ${
              errors.experience ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
            } text-white focus:outline-none hover:bg-slate-650`}
          >
            <option value="">Select experience</option>
            <option value="0-1">Less than 1 year</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
          {errors.experience && <p className="text-red-400 text-xs mt-1">{errors.experience}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-200 mb-3">
            Hourly Rate (₹) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="hourlyRate"
            value={localData.hourlyRate}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-slate-700 border-2 transition-all ${
              errors.hourlyRate ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
            } text-white placeholder-slate-500 focus:outline-none hover:bg-slate-650`}
            placeholder="Enter your hourly rate"
          />
          {errors.hourlyRate && <p className="text-red-400 text-xs mt-1">{errors.hourlyRate}</p>}
        </div>
      </div>

      {/* Availability */}
      <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600">
        <label className="block text-sm font-semibold text-slate-200 mb-4">
          Availability
        </label>
        <div className="flex flex-wrap gap-2">
          {daysOfWeek.map(day => (
            <button
              key={day}
              type="button"
              onClick={() => handleAvailabilityToggle(day)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all transform hover:scale-105 ${
                localData.availability.includes(day)
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                  : 'bg-slate-600 text-slate-200 hover:bg-slate-500 border border-slate-500'
              }`}
            >
              {localData.availability.includes(day) && '✓ '}
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-semibold text-slate-200 mb-3">
          Professional Bio
        </label>
        <textarea
          name="bio"
          value={localData.bio}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 focus:border-blue-500 text-white placeholder-slate-500 focus:outline-none hover:bg-slate-650 transition-all resize-none"
          placeholder="Tell customers about your experience, achievements, and what makes you unique..."
        />
      </div>

      {/* Portfolio Link */}
      <div>
        <label className="block text-sm font-semibold text-slate-200 mb-3">
          Portfolio Link (Optional)
        </label>
        <input
          type="url"
          name="portfolio"
          value={localData.portfolio}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 focus:border-blue-500 text-white placeholder-slate-500 focus:outline-none hover:bg-slate-650 transition-all"
          placeholder="https://your-portfolio.com"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="flex-1 py-4 px-6 rounded-xl font-bold text-slate-200 bg-slate-700 hover:bg-slate-600 transition-all duration-300 border-2 border-slate-600 hover:border-slate-500"
        >
          ← Back
        </button>
        <button
          type="submit"
          className="flex-1 py-4 px-6 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Continue to Documents →
        </button>
      </div>
    </form>
  );
};

export default ServiceSelection;