import React from 'react'
import {assets} from '../../assets/assets.js'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center py-2 px-8'>
      <img className='logo w-[max(10%,80px)]' src={assets.logo} alt="logo" />
      <img className='profile w-12 h-12' src={assets.profile_image} alt="profile_image" />
    </div>
  )
}

export default Navbar