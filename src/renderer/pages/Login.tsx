import React from 'react';
import LoginForm from '../components/forms/LoginForm';

const Login: React.FC = () => {
  return (
    <div
      className="flex grid items-center justify-center h-screen 
      bg-gradient-to-r from-[#0DB4BE] via-[#67D7ED] to-[#04D3BC]"
    >
      <div className="card h-[30vh] w-[50vh] flex items-center min-h-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <div>
            <h2 className="card-title text-primary">Login</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
