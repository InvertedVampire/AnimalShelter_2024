import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    
    // these variables hold user input for validation
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    //function for handling submit
    const handleSubmit = (event) => {
        event.preventDefault();

    }

    // displays form and uses on change to hold data for validation.
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>

            <div>
              <input type="text" placeholder="Enter User ID" className="input input-bordered w-full max-w-xs"
              onChange={e => setUser(e.target.value)}/>
            </div><br/>
            <div>
              <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs"
              onChange={e => setPassword(e.target.value)}/>
            </div><br/>
            <button className="btn bg-gradient-to-r from-[#0DB4BE] to-[#04D3BC] text-white">Login</button>
          </form>
        </div>
        <button className="btn" onClick={() => {navigate('/layout/home')}}>Button</button>
      </div>
    );
  };