import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);
  return (
    <div className="flex justify-between items-center py-[20px]">
      <Link to={"/"}>
        <img
          src={assets.logo}
          alt=""
          className=" lg:w-[150px] md:w-[120px] w-[100px] lg:h-[33px] md:h-[28px] h-[24px]"
        />
      </Link>
      <ul className="md:flex hidden lg:gap-x-[20px] md:gap-x-[13px]  text-[#49557e] lg:text-[18px] md:text-[15px]">
        <Link
          to={"/"}
          onClick={() => setMenu("home")}
          className={`cursor-pointer ${menu === "home" ? "active" : ""}`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "active" : ""} cursor-pointer`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={` cursor-pointer ${menu === "mobile-app" ? "active" : ""}`}
        >
          mobile-app
        </a>
        <a
          href="#contact-us"
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
          <Link to={"/cart"}>
            {" "}
            <img
              src={assets.basket_icon}
              className="lg:w-[26px] w-[22px]"
              alt=""
            />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"
            }
          ></div>
        </div>
        {token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent lg:text-[16px] text-[15px]   lg:px-[30px] md:px-[25px] px-[18px] lg:py-[10px] md:py-[7px] py-[3px] border border-[tomato] border-solid rounded-[50px] text-[#49557e] hover:bg-[#fff4f2] duration-1000"
          >
            sign in
          </button>
        ) : (
          <div className="nav-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
