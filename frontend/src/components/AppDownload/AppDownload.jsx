import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download'>
          <p>For Better Experience Download <br /> Tomato App</p>
          <div className='flex justify-center mt-[40px] md:gap-[2vw] gap-[10px]'>
              <img src={assets.play_store} alt="" />
              <img src={assets.app_store} alt="" />
          </div>
    </div>
  )
}

export default AppDownload
