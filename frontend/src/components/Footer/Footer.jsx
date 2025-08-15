import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer text-[#d9d9d9] bg-[#323232] py-5 px-[8vw] pt-20 mt-[5vw]'>
         <div className="footer-content w-full grid md:grid-cols-[2fr_1fr_1fr] place-content-center text-center gap-10">
            <div className="footer-content-left flex flex-col items-center gap-2">
                <img src={assets.logo} alt="" className='footer-logo mb-4 w-1/2'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium molestiae sint placeat! Nostrum maxime numquam odit aliquam ut iste vero delectus cum obcaecati, voluptates, sint nulla possimus porro provident.</p>
                <div className="footer-social-icons flex gap-4 mt-4 justify-center">
                    <img className='cursor-pointer' src={assets.facebook_icon} alt="Facebook" />
                    <img className='cursor-pointer' src={assets.linkedin_icon} alt="Instagram" />
                    <img className='cursor-pointer' src={assets.twitter_icon} alt="Twitter" />
                </div>
            </div>
            <div className="footer-content-center flex flex-col gap-1">
                <h2 className='font-extrabold text-lg'>Company</h2>
                <ul>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About Us</li>
                    <li className='cursor-pointer'>Delivery</li>
                    <li className='cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right flex flex-col gap-1 mb-5">
                <h2 className='font-extrabold text-lg'>Get In Touch.</h2>
                <ul>
                    <li>+91-9459386261</li>
                    <li>info@example.com</li>
                </ul>
            </div>
         </div>
         <hr className='border-amber-700 w-full' />
         <p className="footer-copyright">
            Copyright 2025 Tomato.com - All Rights Reserved
         </p>
    </div>
  )
}

export default Footer