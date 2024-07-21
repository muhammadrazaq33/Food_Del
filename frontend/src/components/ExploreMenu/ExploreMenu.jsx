import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="flex flex-col gap-[20px] mb-8" id="explore-menu">
      <h1 className="text-[#262626] font-semibold text-[1.8rem]">
        Explore our menu
      </h1>
      <p className="text-[#808080] md:max-w-[60%] max-w-[100%] md:text-[17px] sm:text-[16px] text-[13px] ">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center overflow-x-scroll scroll_hidden ">
        {menu_list.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.menu_image}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                className={`w-[7.5vw] min-w-[80px] rounded-[50%] cursor-pointer transition-[2s] ${
                  category === item.menu_name ? "active1" : ""
                }`}
                alt=""
              />
              <p className="text-[#747474] cursor-pointer md:text-[20px] text-[16px] mt-[10px]">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="h-[2px] bg-[#e2e2e2] border border-none my-[10px] " />
    </div>
  );
}

export default ExploreMenu
