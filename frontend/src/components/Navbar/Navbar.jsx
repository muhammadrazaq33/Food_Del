import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className="flex justify-between items-center py-[20px]">
      <img src={assets.logo} alt="" className="w-[150px] h-[33px]" />
      <ul className="flex gap-x-[20px] text-[#49557e] text-[18px]">
        <li
          onClick={() => setMenu("home")}
          className={`cursor-pointer ${menu === "home" ? "active" : ""}`}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "active" : ""} cursor-pointer`}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={` cursor-pointer ${menu === "mobile-app" ? "active" : ""}`}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={` cursor-pointer ${menu === "contact-us" ? "active" : ""}`}
        >
          contact us
        </li>
      </ul>
      <div className="flex items-center gap-[40px]">
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button className="bg-transparent text-[16px] px-[30px] py-[10px] border border-[tomato] border-solid rounded-[50px] text-[#49557e] hover:bg-[#fff4f2] duration-1000">
          sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar
