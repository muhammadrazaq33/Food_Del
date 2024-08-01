import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password:""
  });

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  useEffect(() => {
console.log(data)
  },[data])
  return (
    <div className="absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid">
      <form className="login-container">
        <div className="flex justify-between items-center text-black">
          <h1 className="font-semibold text-[18px]">{currentState}</h1>
          <img
            className="w-[16px] cursor-pointer"
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              className="outline-none p-[10px] rounded-[4px] border-[1px] border-[#c9c9c9]"
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Enter name"
              required
            />
          )}
          <input
            className="outline-none p-[10px] rounded-[4px] border-[1px] border-[#c9c9c9]"
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Enter email"
            required
          />
          <input
            className="outline-none p-[10px] rounded-[4px] border-[1px] border-[#c9c9c9]"
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Enter password"
            required
          />
        </div>
        <button className="border-none p-[10px] rounded-[4px] cursor-pointer bg-[tomato] text-[15px] text-[white] ">
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div className="flex items-start gap-[8px] -mt-[15px]">
          <input type="checkbox" className="mt-[5.8px]" required />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("Sign up")}
              className="cursor-pointer text-[tomato] font-semibold"
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-[tomato] font-semibold"
            >
              {" "}
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login
