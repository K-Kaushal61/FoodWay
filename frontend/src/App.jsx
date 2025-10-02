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

  // 2. Create a ref for the menu section
  const menuRef = useRef(null);
  const footerRef = useRef(null);

  // 3. Create the function to handle the scroll
  const scrollToMenu = () => menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToAbout = () => footerRef.current?.scrollIntoView({ behavior: 'smooth' });
const scrollToContact = () => footerRef.current?.scrollIntoView({ behavior: 'smooth' });


  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='app'>
      {/* 4. Pass the scroll function to Navbar */}
      <Navbar setShowLogin={setShowLogin} onMenuClick={scrollToMenu}  onAboutClick={scrollToAbout}  onContactClick={scrollToContact} />
      <Routes>
        {/* 5. Pass the ref to the Home component */}
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