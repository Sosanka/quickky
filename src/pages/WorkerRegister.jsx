import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkerRegisterForm from '../components/Worker/WorkerRegisterForm';
import ServiceSelection from '../components/Worker/ServiceSelection';
import DocumentUpload from '../components/Worker/DocumentUpload';

const WorkerRegister = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    serviceInfo: {},
    documents: {}
  });
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const steps = [
    { number: 1, title: 'Personal Info', icon: '👤' },
    { number: 2, title: 'Service Details', icon: '💼' },
    { number: 3, title: 'Documents', icon: '📄' }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg mt-9">
              <span className="text-3xl">🚀</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-blue-600 mb-4 mt-9">
            Join <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Quickky</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Start earning by offering your services to thousands of customers in Assam
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {steps.map((s, idx) => (
              <div key={s.number} className="flex-1 flex flex-col items-center">
                {/* Step circle */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-2 transition-all duration-500 ${
                  step > s.number 
                    ? 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg scale-110' 
                    : step === s.number 
                    ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-xl scale-110 ring-4 ring-blue-300' 
                    : 'bg-blue-800 text-slate-400'
                }`}>
                  {step > s.number ? '✓' : s.icon}
                </div>
                {/* Step label */}
                <p className={`text-xs md:text-sm font-semibold text-center transition-colors ${
                  step === s.number ? 'text-blue-400' : 'text-slate-400'
                }`}>
                  {s.title}
                </p>
              </div>
            ))}
          </div>
          
          {/* Progress bar */}
          <div className="mt-6 h-1 bg-slate-700 rounded-full overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-500 rounded-full`}
              style={{ width: `${((step - 1) / 2) * 100 + 33.33}%` }}
            ></div>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-blue-500 border-white p-8 md:p-12 backdrop-blur-xl">
          {step === 1 && (
            <WorkerRegisterForm 
              formData={formData.personalInfo}
              updateFormData={(data) => updateFormData('personalInfo', data)}
              nextStep={nextStep}
            />
          )}
          {step === 2 && (
            <ServiceSelection 
              formData={formData.serviceInfo}
              updateFormData={(data) => updateFormData('serviceInfo', data)}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 3 && (
            <DocumentUpload 
              formData={formData.documents}
              updateFormData={(data) => updateFormData('documents', data)}
              prevStep={prevStep}
              onSubmit={() => navigate('/worker/dashboard')}
            />
          )}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '💰', title: 'Earn More', desc: 'Set your own rates and maximize earnings', color: 'from-green-500 to-emerald-600' },
            { icon: '📅', title: 'Flexible Schedule', desc: 'Work on your own time and terms', color: 'from-orange-500 to-red-600' },
            { icon: '🎯', title: 'Verified Clients', desc: 'Connect with trusted customers', color: 'from-purple-500 to-pink-600' }
          ].map((benefit, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}>
                  <div className="text-3xl">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default WorkerRegister;