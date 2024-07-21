import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
      <div>
          <div>
              {/* left side */}
              <div>
                  <img src={assets.logo} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repudiandae est. Incidunt facilis neque rerum, voluptatem repudiandae quam nostrum? Repudiandae?</p>
                  <div className='bg-black'>
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                  </div>
              </div>
              {/* center */}
              <div>
                  <h1>COMPANY</h1>
                  <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>
              {/* right side */}
              <div>
                  <h2>GET IN TOUCH</h2>
                  <ul>
                      <li>+333-4538526</li>
                      <li>muhammadrazaq5913483@gmail.com</li>
                  </ul>
              </div>
          </div>
          <hr />
          <p>Copyright 2024 &copy; Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
