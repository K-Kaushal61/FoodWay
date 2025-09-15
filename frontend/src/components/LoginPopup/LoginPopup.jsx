import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import { StoreContext, } from '../context/StoreContext';
import axios from  'axios'

const LoginPopup = ({ setShowLogin }) => {

    const {url, setToken} = useContext(StoreContext)

    const [currState, setCurrState] = useState('Signup');
    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
    })

    const onChangeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      setData(data => ({...data, [name]: value}))
    }

    const onLogin = async (event) => {
      event.preventDefault()
      let newUrl = url;
      if(currState === 'Login'){
        newUrl += "/api/user/login"
      } else {
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl, data)

      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false)
      } else {
        alert(response.data.message)
      }
    }

  return (
    <div className='login-popup absolute z-1 w-screen h-screen bg-[#00000090] grid place-items-center'>
        <form onSubmit={onLogin} className="login-popup-container bg-white w-100 h-100 flex flex-col gap-4 items-center justify-center rounded-2xl animate-fadeIn relative">
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
                    <input className='border border-[#ff4c24] p-2' name='name' value={data.name} onChange={onChangeHandler} type="text" placeholder="Name" required />
                  </>
                )}
                <input className='border border-[#ff4c24] p-2' name='email' value={data.email} onChange={onChangeHandler} type="text" placeholder="Email" required />
                <input className='border border-[#ff4c24] p-2' name='password' value={data.password} onChange={onChangeHandler} type="password" placeholder="Password" required />
            </div>
            <button type='submit' className='bg-[#ff4c24] text-white cursor-pointer py-2 px-4 rounded'>{currState==='Signup' ? 'Create Account' : 'Log in'}</button>
            <div className="login-popup-condition flex items-center gap-2">
                <input type="checkbox" required/>
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