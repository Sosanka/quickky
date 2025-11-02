import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerSignup from '../../components/Auth/CustomerSignup';
import WorkerSignup from '../../components/Auth/WorkerSignup';

const SignupPage = () => {
  const { role } = useParams();

  return role === 'worker' ? <WorkerSignup /> : <CustomerSignup />;
};

export default SignupPage;