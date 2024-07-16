import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-[20px]'>
          <img src={assets.logo} alt="" className='w-[150px] h-[36px]' />
          <ul className='flex gap-x-[20px] text-[#49557e] text-[18px]'>
              <li>home</li>
              <li>menu</li>
              <li>mobile-app</li>
              <li>contact us</li>
          </ul>
          <div className='flex items-center gap-[40px]'>
              <img src={assets.search_icon} alt="" />
              <div>
                  <img src={assets.basket_icon} alt="" />
                  <div></div>
              </div>
              <button className='bg-transparent text-[16px] px-[30px] py-[10px] border border-[tomato] border-solid rounded-[50px] text-[#49557e] hover:bg-[#fff4f2]'>sign in</button>
          </div>
    </div>
  )
}

export default Navbar
