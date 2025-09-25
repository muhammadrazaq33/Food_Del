import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      id="contact-us"
      className="mt-[100px] text-[#d9d9d9] bg-[#323232] flex flex-col items-center py-[20px] px-[8vw] pt-[80px] gap-[20px]"
    >
      <div className="footer_content">
        {/* left side */}
        <div className="flex flex-col items-start gap-[20px]">
          {/* <img src={assets.logo} alt="" /> */}
          <h1 className="text-[tomato] lg:text-[2.3rem] md:text-[2.1rem] text-[1.8rem] font-bold">
            Foodify.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            repudiandae est. Incidunt facilis neque rerum, voluptatem
            repudiandae quam nostrum? Repudiandae?
          </p>
          <div className="flex gap-4">
            <img className="w-[40px]" src={assets.facebook_icon} alt="" />
            <img className="w-[40px]" src={assets.twitter_icon} alt="" />
            <img className="w-[40px]" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        {/* center */}
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-white font-semibold">COMPANY</h1>
          <ul>
            <li className="mb-[10px] cursor-pointer">Home</li>
            <li className="mb-[10px] cursor-pointer">About Us</li>
            <li className="mb-[10px] cursor-pointer">Delivery</li>
            <li className="mb-[10px] cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        {/* right side */}
        <div className="flex flex-col items-start gap-[20px]">
          <h2 className="text-white font-semibold">GET IN TOUCH</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">+333-4538526</li>
            <li className="mb-[10px] cursor-pointer">
              muhammadrazaq5913483@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[100%] h-[2px] my-[20px] mx-0 bg-[grey] border-none" />
      <p>Copyright 2024 &copy; Foodify.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;
