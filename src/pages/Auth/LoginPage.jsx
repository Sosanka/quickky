import React from 'react';
import { useParams } from 'react-router-dom';
import CustomerLogin from '../../components/Auth/CustomerLogin';
import WorkerLogin from '../../components/Auth/WorkerLogin';

const LoginPage = () => {
  const { role } = useParams();

  return role === 'worker' ? <WorkerLogin /> : <CustomerLogin />;
};

export default LoginPage;
