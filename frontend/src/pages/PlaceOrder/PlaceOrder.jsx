import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../components/context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-8">
      <div className='place-order-info grid grid-cols-1 gap-4'>
        <h2 className='text-center md:text-start font-bold text-2xl'>Delivery Information</h2>
        <div className="user-name flex gap-4 flex-col md:flex-row">
          <input type="text" placeholder="First Name" className='border p-2' />
          <input type="text" placeholder="Last Name" className='border p-2' />
        </div>
        <input type="text" placeholder="Email" className='border p-2 md:w-2/3' />
        <input type="text" placeholder="Address" className='border p-2 md:w-2/3' />
        <div className="user-city-state flex gap-4 flex-col md:flex-row">
          <input type="text" placeholder="City" className='border p-2' />
          <input type="text" placeholder="State" className='border p-2' />
        </div>
        <div className="user-zip-phone flex gap-4 flex-col md:flex-row">
          <input type="text" placeholder="Zip Code" className='border p-2' />
        <input type="text" placeholder="Phone Number" className='border p-2' />
        </div>
      </div>

      <div className="cart-info">
         <div className="cart-total flex-1 flex flex-col gap-10">
          <div className="cart-total-title"> 
            <h2 className='text-[#ff4c24] text-xl font-bold'>Cart Total</h2>
          <hr className='w-2/9 md:w-1/7'/>
          </div>
          <div>
            <div className="cart-total-details flex justify-between">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr className='my-3'/>
            <div className="cart-total-details flex justify-between">
              <p>Delivery Fee</p>
              <p>₹{10}</p>
            </div>
            <hr className='my-3'/>
            <div className="cart-total-details flex justify-between">
              <b>Total</b>
              <b>{getTotalCartAmount() > 0 ? `₹${getTotalCartAmount() + 10}` : "₹0"}</b>
            </div>
          </div>
            <button className='border-none text-white bg-[#ff4c24] md:w-1/3 md:p-3 rounded-lg md:text-xl mb-4 hidden md:inline cursor-pointer' onClick={() => navigate('/placeorder')}>Proceed to Payment</button>
        </div>
      </div>
    </form>

    
  )
}

export default PlaceOrder