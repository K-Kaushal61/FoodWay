import {useState, React} from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar flex justify-between items-center mt-2'>
        <img src={assets.logo} alt="logo.png" className='logo w-32' />
        <ul className="navbar-menu flex gap-4 list-none text-md text-zinc-600">
          <li className={`cursor-pointer
              ${menu === 'home' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('home')} >home</li>
          <li className={`cursor-pointer
              ${menu === 'menu' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('menu')} >menu</li>
          <li className={`cursor-pointer
              ${menu === 'about' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('about')} >about</li>
          <li className={`cursor-pointer
              ${menu === 'contact' ? 'border-b-2' : 'text-zinc-600 hover:bg-zinc-100'}`} onClick={() => setMenu('contact')} >contact</li>
        </ul>
        <div className="navbar-right flex items-center gap-4">
          <img src={assets.search_icon} alt="search_icon.png" />
          <div className="navbar-search-icon relative">
            <img src={assets.basket_icon} alt="" />
            <div className="dot absolute min-w-2 min-h-2 bg-orange-300 rounded-full top-0.25 right-0"></div>
          </div>
          <button className="sign-in-button outline-none bg-[#ff4c24] text-white border-1 rounded-2xl cursor-pointer px-4 py-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar