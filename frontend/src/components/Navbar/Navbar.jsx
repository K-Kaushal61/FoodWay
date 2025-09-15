import { useState, React, useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../components/context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleProfileDropDown = () =>{
    setIsProfileDropdownOpen(prevState => !prevState)
  }

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem(token);
    setToken("");
    navigate("/");
  }

  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

  return (
    <div className='navbar flex items-center justify-between w-full px-4 relative'>
      <div className="flex-shrink-0">
        <Link to='/' ><img src={assets.logo} alt="logo.png" className='logo w-25 h-10 mt-2' /></Link>
      </div>

      <div className="flex-1 flex justify-center">
        <ul className={`navbar-menu gap-4 list-none text-md text-zinc-600 flex md:flex ${isMobileMenuOpen ? 'flex-col absolute top-full left-0 w-full bg-white z-10 p-4 items-center' : 'hidden md:flex'} transition-all duration-300`}>
          <Link to="/" className={`cursor-pointer ${menu === 'home' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('home')} >home</Link>
          <li className={`cursor-pointer ${menu === 'menu' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('menu')}>menu</li>
          <li className={`cursor-pointer ${menu === 'about' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('about')}>about</li>
          <li className={`cursor-pointer ${menu === 'contact' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('contact')}>contact</li>
          <Link to='/cart' className={`cursor-pointer ${isMobileMenuOpen ? (menu === 'cart' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100') : 'hidden'}`} onClick={() => setMenu('cart')}>cart</Link>
        </ul>
      </div>

      <div className="navbar-right items-center gap-4 hidden md:flex">
        <div className='navbar-search-icon relative'>
          <img src={assets.search_icon} className='cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110' alt="search_icon.png" />
        </div>
        <div className="navbar-search-icon relative">
          <Link to="/cart"><img src={assets.basket_icon} className='transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110' alt="" /></Link>
          <div className={getTotalCartAmount() > 0 ? 'dot absolute min-w-2 min-h-2 bg-orange-300 rounded-full top-0.25 right-0' : 'hidden'}></div>
        </div>
        
        {!token? (<button className="sign-in-button outline-none bg-[#ff4c24] text-white border-1 rounded-2xl cursor-pointer px-4 py-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110" onClick={() => setShowLogin(true)}>Sign In</button>)
        :
        (<div className='navbar-profile relative'>
          <img src={assets.profile_icon} className='cursor-pointer hover:fadeIntransition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110' alt="profile_icon" onClick={toggleProfileDropDown}/>
          {isProfileDropdownOpen && (<ul className='navbar-profile-dropdon w-25 absolute right-0 z-1 flex flex-col gap-2 bg-[#fff2ef] py-2 px-3 border border-[#ff4c24] list-none'>
            <li className='hover:text-[#ff4c24] flex cursor-pointer'><img className='h-6' src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li className='hover:text-[#ff4c24] flex cursor-pointer' onClick={logout}><img className='h-6' src={assets.logout_icon} alt="" />Logout</li>
          </ul>)}
        </div>) }
        
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