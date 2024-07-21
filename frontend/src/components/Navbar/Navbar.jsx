import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className="flex justify-between items-center py-[20px]">
      <img
        src={assets.logo}
        alt=""
        className=" lg:w-[150px] md:w-[120px] w-[100px] lg:h-[33px] md:h-[28px] h-[24px]"
      />
      <ul className="md:flex hidden lg:gap-x-[20px] md:gap-x-[13px]  text-[#49557e] lg:text-[18px] md:text-[15px]">
        <Link to={"/"}
          onClick={() => setMenu("home")}
          className={`cursor-pointer ${menu === "home" ? "active" : ""}`}
        >
          home
        </Link>
        <a href='#explore-menu'
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "active" : ""} cursor-pointer`}
        >
          menu
        </a>
        <a href='#app-download'
          onClick={() => setMenu("mobile-app")}
          className={` cursor-pointer ${menu === "mobile-app" ? "active" : ""}`}
        >
          mobile-app
        </a>
        <a href='#contact-us'
          onClick={() => setMenu("contact-us")}
          className={` cursor-pointer ${menu === "contact-us" ? "active" : ""}`}
        >
          contact us
        </a>
      </ul>
      {/* right side  */}
      <div className="flex items-center lg:gap-[40px] md:gap-[24px] sm:gap-[20px] gap-[16px]">
        <img src={assets.search_icon} className="lg:w-[26px] w-[20px]" alt="" />
        <div className="relative">
          <img
            src={assets.basket_icon}
            className="lg:w-[26px] w-[22px]"
            alt=""
          />
          <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"></div>
        </div>
        <button className="bg-transparent lg:text-[16px] text-[15px]   lg:px-[30px] md:px-[25px] px-[18px] lg:py-[10px] md:py-[7px] py-[3px] border border-[tomato] border-solid rounded-[50px] text-[#49557e] hover:bg-[#fff4f2] duration-1000">
          sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar
