import React, { useState, useRef } from 'react' // 1. Import useRef
import Navbar from './components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'



const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  const menuRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToMenu = () => menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => footerRef.current?.scrollIntoView({ behavior: 'smooth' });
const scrollToContact = () => footerRef.current?.scrollIntoView({ behavior: 'smooth' });


  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} onMenuClick={scrollToMenu}  onAboutClick={scrollToAbout}  onContactClick={scrollToContact} />
      <Routes>
        <Route path="/" element={<Home menuRef={menuRef}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer  ref={footerRef}
        onAboutClick={scrollToAbout}/>
    </>

  )
}

export default App