import React from "react";

const Header = () => {
  return (
    <div className='bg-[url("/header_img.png")] relative h-[38vw] bg-contain bg-no-repeat mx-auto my-[30px]'>
      <div className="header_content flex flex-col items-start gap-[1.2vw] absolute bottom-[18%] left-[6vw] max-w-[55%]">
        <h1 className="header-heading">Order your favorite food here</h1>
        <p className="md:block hidden text-[white] font-normal text-[1.2vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore
          minus ex possimus cumque illum?
        </p>
        <button className="lg:px-[25px] md:px-[22px] sm:px-[18px] px-[13px]  lg:py-[12px] md:py-[10px] sm:py-[8px] py-[5px] bg-[white] border-none rounded-[40px] text-[#747474] sm:text-[17px] text-[12px]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
