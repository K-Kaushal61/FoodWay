import { useState, React } from 'react'
import { assets } from '../../assets/assets'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='navbar flex items-center justify-between w-full px-4 relative'>
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <a href="/"><img src={assets.logo} alt="logo.png" className='logo w-25 h-10 mt-2' /></a>
      </div>

      {/* Menu in the center */}
      <div className="flex-1 flex justify-center">
        <ul className={`navbar-menu gap-4 list-none text-md text-zinc-600 flex md:flex ${isMobileMenuOpen ? 'flex-col absolute top-full left-0 w-full bg-white z-10 p-4 items-center' : 'hidden md:flex'} transition-all duration-300`}>
          <a href="/" className={`cursor-pointer ${menu === 'home' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('home')} >home</a>
          <li className={`cursor-pointer ${menu === 'menu' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('menu')}>menu</li>
          <li className={`cursor-pointer ${menu === 'about' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('about')}>about</li>
          <li className={`cursor-pointer ${menu === 'contact' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('contact')}>contact</li>
        </ul>
      </div>

      {/* Right section */}
      <div className="navbar-right items-center gap-4 hidden md:flex">
        <img src={assets.search_icon} alt="search_icon.png" />
        <div className="navbar-search-icon relative">
          <a href="/cart"><img src={assets.basket_icon} alt="" />
          <div className="dot absolute min-w-2 min-h-2 bg-orange-300 rounded-full top-0.25 right-0"></div></a>
        </div>
        <button className="sign-in-button outline-none bg-[#ff4c24] text-white border-1 rounded-2xl cursor-pointer px-4 py-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110" onClick={() => setShowLogin(true)}>Sign In</button>
      </div>

      {/* Hamburger/Close Icon for Mobile */}
      <div className='mobile-menu md:hidden'>
        {!isMobileMenuOpen ? (
          <img
            src={assets.hamburger}
            alt="hamburger.png"
            className='hamburger-icon w-8 h-8 m-2'
            onClick={() => setIsMobileMenuOpen(true)}
          />
        ) : (
          <img
            src={assets.close}
            alt="close.png"
            className='close-icon w-8 h-8 m-2'
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar