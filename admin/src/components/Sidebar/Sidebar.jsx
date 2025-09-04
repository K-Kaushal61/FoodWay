import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar min-h-screen md:w-1/6 w-18 border-2 border-[#a9a9a9] border-t-0 '>
      <div className="sidebar-options md:pt-8 md:pl-10 pt-5 flex flex-col gap-6">
        <NavLink to='add' className={({ isActive }) =>
          `sidebar-option flex items-center gap-2 border border-[#a9a9a9] border-r-0 py-2 px-4 cursor-pointer hover:bg-[#fdeae6]
            ${isActive ? "bg-[#fff0ed] text-black border-[#ff4c24]" : ""}`} >
          <img src={assets.add_icon} alt="add" />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>
        <NavLink to='/list' className={({ isActive }) =>
          `sidebar-option flex items-center gap-2 border border-[#a9a9a9] border-r-0 py-2 px-4 cursor-pointer hover:bg-[#fdeae6]
          ${isActive ? "bg-[#fff0ed] text-black border-[#ff4c24]" : ""}`}>
          <img src={assets.order_icon} alt="order" />
          <p className='hidden md:block'>List Items</p>
        </NavLink >
        <NavLink to='/orders' className={({ isActive }) =>
          `sidebar-option flex items-center gap-2 border border-[#a9a9a9] border-r-0 py-2 px-4 cursor-pointer hover:bg-[#fdeae6]
          ${isActive ? "bg-[#fff0ed] text-black border-[#ff4c24]" : ""}`}>
          <img src={assets.order_icon} alt="order" />
          <p className='hidden md:block'>Orders</p>
        </NavLink >
      </div>
    </div>
  ) 
}

export default Sidebar