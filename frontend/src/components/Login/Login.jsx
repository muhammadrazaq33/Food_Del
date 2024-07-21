import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  return (
    <div className="absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid">
      <form className='login-container'>
        <div>
          <h1>{currentState}</h1>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div>
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter name" required />
          )}
          <input type="email" placeholder="Enter email" required />
          <input type="password" placeholder="Enter password" required />
        </div>
        <button>
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div>
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login
