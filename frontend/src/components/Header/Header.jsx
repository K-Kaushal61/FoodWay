import React from 'react'
import { assets } from '../../assets/assets' 
import '../../index.css'

const Header = () => {
  return (
    <div className="header h-screen w-[100%] bg-[url('/header_img.png')] bg-no-repeat bg-contain relative mt-[9%]">
        <div className="header-contents absolute flex flex-col items-start gap-2 top-1/3 left-20 text-black animate-fadeIn ">
            <h1 className='font-extrabold text-white text-6xl'>Order Now</h1>
            <p className='tracking-tight text-white text-lg'>
              Satisfy your cravings with a wide variety of cuisines at your fingertips.<br />
              Fresh meals delivered hot and fast, right to your doorstep.
            </p>
            <button className=' text-zinc-600 py-3 px-4 bg-white rounded-4xl text-sm'>View Menu</button>
        </div>
    </div>
  )
}

export default Header
