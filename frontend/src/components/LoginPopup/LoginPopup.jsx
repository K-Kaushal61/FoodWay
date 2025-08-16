import React, {useState} from 'react'
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState('Signup');

  return (
    <div className='login-popup absolute z-1 w-screen h-screen bg-[#00000090] grid place-items-center'>
        <form className="login-popup-container bg-white w-100 h-100 flex flex-col gap-4 items-center justify-center rounded-2xl animate-fadeIn relative">
            <img
                src={assets.cross_icon}
                onClick={() => setShowLogin(false)}
                alt=""
                className="cursor-pointer z-10 absolute top-[16px] right-[16px]"
            />
            <div className="login-popup-title flex items-center w-full px-2" style={{ minHeight: "48px" }}>
                <h2 className="text-2xl font-bold text-center text-[#ff4c24] w-full">
                  {currState}
                </h2>
            </div>
            <div className="login-popup-inputs flex flex-col gap-2 ">
                {currState==='Login'? null : (
                  <>
                    <input className='border border-[#ff4c24] p-2' type="text" placeholder="First Name" required />
                    <input className='border border-[#ff4c24] p-2' type="text" placeholder="Last Name" required />
                  </>
                )}
                <input className='border border-[#ff4c24] p-2' type="text" placeholder="Email" required />
                <input className='border border-[#ff4c24] p-2' type="password" placeholder="Password" required />
            </div>
            <button className='bg-[#ff4c24] text-white py-2 px-4 rounded' type="submit">{currState==='Signup' ? 'Create Account' : 'Log in'}</button>
            <div className="login-popup-condition flex items-center gap-2">
                <input type="checkbox"/>
                <p>I agree to the Terms and Conditions.</p>
            </div>
            {currState==='Login'?
            <p>Create a new account? <span onClick={() => setCurrState('Signup') } className='text-[#ff4c24] cursor-pointer underline'>Click Here</span></p>
            : <p>Already have an account? <span onClick={() => setCurrState('Login') } className='text-[#ff4c24] cursor-pointer underline'>Login</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup