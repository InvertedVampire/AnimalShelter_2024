import React from "react";
import { useNavigate } from "react-router-dom";


export const Login: React.FC = () => {
    const navigate = useNavigate();
    return (
      <div className="mx-auto">
        <button className="btn" onClick={() => {navigate('/layout/home')}}>Button</button>
      </div>
    );
  };