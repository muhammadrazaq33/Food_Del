import React from "react";

const Header = () => {
  return (
    <div className='bg-[url("/header_img.png")] h-[34vw] bg-contain bg-no-repeat mx-auto my-[30px]'>
      <div className="header_content flex flex-col items-start gap-[1.2vw] absolute bottom-[15%] left-[17vw] max-w-[40%]">
        <h1 className="header-heading">Order your favorite food here</h1>
        <p className="text-[white] font-normal text-[1.2vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore
          minus ex possimus cumque illum?
        </p>
        <button className="px-[25px] py-[12px] bg-[white] border-none rounded-[40px] text-[#747474]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
