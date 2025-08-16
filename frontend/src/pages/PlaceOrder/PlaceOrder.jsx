import React from 'react'

const PlaceOrder = () => {
  return (
    <form className="place-order grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
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
        <h2>Cart Information</h2>
      </div>

      <div className="cart-info">
        
      </div>
    </form>

    
  )
}

export default PlaceOrder