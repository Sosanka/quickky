import React, { useState } from 'react';

const DocumentUpload = ({ formData, updateFormData, prevStep, onSubmit }) => {
  const [errors, setErrors] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});
  const [localData, setLocalData] = useState({
    identityProof: formData.identityProof || null,
    identityProofType: formData.identityProofType || '',
    addressProof: formData.addressProof || null,
    workSamples: formData.workSamples || [],
    certifications: formData.certifications || [],
    termsAccepted: formData.termsAccepted || false
  });

  const identityProofTypes = [
    'Aadhaar Card',
    'PAN Card',
    'Voter ID',
    'Driving License',
    'Passport'
  ];

  const handleFileChange = (e, fieldName) => {
    const files = Array.from(e.target.files);
    if (fieldName === 'workSamples' || fieldName === 'certifications') {
      setLocalData(prev => ({
        ...prev,
        [fieldName]: [...prev[fieldName], ...files]
      }));
    } else {
      setLocalData(prev => ({
        ...prev,
        [fieldName]: files[0]
      }));
    }
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: '' })); // ✅ fixed here
    }
  };

  const removeFile = (fieldName, index) => {
    if (fieldName === 'workSamples' || fieldName === 'certifications') {
      setLocalData(prev => ({
        ...prev,
        [fieldName]: prev[fieldName].filter((_, i) => i !== index)
      }));
    } else {
      setLocalData(prev => ({
        ...prev,
        [fieldName]: null
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' })); // ✅ fixed here
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!localData.identityProof) newErrors.identityProof = 'Identity proof is required';
    if (!localData.identityProofType) newErrors.identityProofType = 'Please select ID type';
    if (!localData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      updateFormData(localData);
      onSubmit();
    } else {
      setErrors(newErrors);
    }
  };

  const FileUploadBox = ({ label, fieldName, accept, multiple = false, required = false }) => (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-slate-200 mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="border-2 border-dashed border-slate-600 rounded-2xl p-8 text-center hover:border-blue-500 hover:bg-slate-700/50 transition-all cursor-pointer group">
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFileChange(e, fieldName)}
          className="hidden"
          id={fieldName}
        />
        <label htmlFor={fieldName} className="cursor-pointer w-full">
          <div className="flex flex-col items-center">
            <div className="mb-3 p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-slate-200 font-bold mb-1">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-slate-400">
              {multiple ? 'Multiple files allowed' : 'Single file only'}
            </p>
          </div>
        </label>
      </div>
      {errors[fieldName] && <p className="text-red-400 text-xs mt-2">{errors[fieldName]}</p>}

      {/* Display uploaded files */}
      {localData[fieldName] && (
        <div className="mt-4 space-y-2">
          {(Array.isArray(localData[fieldName]) ? localData[fieldName] : [localData[fieldName]]).map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl p-3 border border-slate-600 hover:border-slate-500 transition-all">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="text-sm text-slate-200 truncate max-w-xs font-medium">
                    {file?.name || 'File uploaded'}
                  </span>
                  <p className="text-xs text-slate-500">Ready to upload</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(fieldName, index)}
                className="text-red-400 hover:text-red-300 hover:bg-red-500/20 p-2 rounded-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
          Document Verification
        </h2>
        <p className="text-slate-400">Upload your documents for verification</p>
      </div>

      {/* Identity Proof Type */}
      <div>
        <label className="block text-sm font-semibold text-slate-200 mb-3">
          Identity Proof Type <span className="text-red-500">*</span>
        </label>
        <select
          name="identityProofType"
          value={localData.identityProofType}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl bg-slate-700 border-2 transition-all ${
            errors.identityProofType ? 'border-red-500' : 'border-slate-600 focus:border-blue-500'
          } text-white focus:outline-none hover:bg-slate-650`}
        >
          <option value="">Select ID type</option>
          {identityProofTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.identityProofType && <p className="text-red-400 text-xs mt-1">{errors.identityProofType}</p>}
      </div>

      {/* Identity Proof */}
      <FileUploadBox
        label="Identity Proof"
        fieldName="identityProof"
        accept="image/*,.pdf"
        required={true}
      />

      {/* Address Proof */}
      <FileUploadBox
        label="Address Proof (Optional)"
        fieldName="addressProof"
        accept="image/*,.pdf"
      />

      {/* Work Samples */}
      <FileUploadBox
        label="Work Samples / Portfolio Images"
        fieldName="workSamples"
        accept="image/*"
        multiple={true}
      />

      {/* Certifications */}
      <FileUploadBox
        label="Certifications (Optional)"
        fieldName="certifications"
        accept="image/*,.pdf"
        multiple={true}
      />

      {/* Terms and Conditions */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border border-slate-600">
        <label className="flex items-start space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={localData.termsAccepted}
            onChange={handleChange}
            className="mt-1 w-6 h-6 rounded-lg bg-slate-600 border-2 border-slate-500 text-blue-500 focus:ring-2 focus:ring-blue-400 cursor-pointer appearance-none checked:bg-gradient-to-br checked:from-blue-500 checked:to-blue-600 transition-all"
          />
          <div>
            <p className="text-sm font-semibold text-slate-200">
              I agree to the Terms & Conditions <span className="text-red-500">*</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              By registering, you agree to Quickky's Terms of Service, Privacy Policy, and Worker Agreement.
              You confirm that all information provided is accurate and you have the right to offer these services.
            </p>
          </div>
        </label>
        {errors.termsAccepted && <p className="text-red-400 text-xs mt-2">{errors.termsAccepted}</p>}
      </div>

      {/* Important Note */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 border-blue-500 p-6 rounded-xl">
        <div className="flex">
          <svg className="w-6 h-6 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm font-bold text-blue-300">Verification Process</p>
            <p className="text-xs text-blue-200 mt-1">
              Your documents will be verified within 24-48 hours. You'll receive an email once your account is approved.
            </p>
          </div>
        </div>
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
          className="flex-1 py-4 px-6 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Submit Application ✓
        </button>
      </div>
    </form>
  );
};

export default DocumentUpload;
