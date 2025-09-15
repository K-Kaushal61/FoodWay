import React, { useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../components/context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount, token, url, cartItems, food_list } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map( (item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() +2,
    }    

    let response = await axios.post(url+"/api/order/place", orderData, {Headers: token})

    if(response.data.success){
      const { success_url } = response.data;
      window.location.replace(success_url);
    } else {
      alert("Error");
    }
  }

  return (
    <form onSubmit={placeOrder} className="place-order grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-8">
      <div className='place-order-info grid grid-cols-1 gap-4'>
        <h2 className='text-center md:text-start font-bold text-2xl'>Delivery Information</h2>
        <div className="user-name flex gap-4 flex-col md:flex-row">
          <input required type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder="First Name" className='border p-2' />
          <input required type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder="Last Name" className='border p-2' />
        </div>
        <input required type="text" name='email' onChange={onChangeHandler} value={data.email} placeholder="Email" className='border p-2 md:w-2/3' />
        <input required type="text" name='address' onChange={onChangeHandler} value={data.address} placeholder="Address" className='border p-2 md:w-2/3' />
        <div className="user-city-state flex gap-4 flex-col md:flex-row">
          <input required type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder="City" className='border p-2' />
          <input required type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder="State" className='border p-2' />
        </div>
        <div className="user-zip-phone flex gap-4 flex-col md:flex-row">
          <input required type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder="Zip Code" className='border p-2' />
          <input required type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder="Phone Number" className='border p-2' />
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
            <button type='submit' className='border-none text-white bg-[#ff4c24] md:w-1/3 md:p-3 rounded-lg md:text-xl mb-4 hidden md:inline cursor-pointer'>Proceed to Payment</button>
        </div>
      </div>
    </form>

    
  )
}

export default PlaceOrder