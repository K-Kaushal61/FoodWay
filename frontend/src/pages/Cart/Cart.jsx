import React, {useContext} from 'react'
import { StoreContext } from '../../components/context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart mt-[100px]'>
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] place-items-center font-bold">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='md:w-[95%] md:ml-18'/>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-info grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] place-items-center mt-5">
                <img src={item.image} className='w-20 h-auto md:ml-10'/>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{item.price * cartItems[item._id]}</p>
                <img onClick={() => removeFromCart(item._id)} src={assets.cross_icon} alt="remove" className='cursor-pointer'/>
              </div>
              <hr className='md:w-[95%] md:ml-18 mt-5'/>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] md:flex md:justify-between gap-10">
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
            <button className='border-none text-white bg-[#ff4c24] md:w-1/3 md:p-3 rounded-lg md:text-xl mb-4 hidden md:inline cursor-pointer' onClick={() => navigate('/placeorder')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode flex-1 mt-5">
          <div>
            <p >If you have a promo code, please enter it here:</p>
            <div className="cart-promocode-input mt-3 flex justify-between items-center bg-[#eaeaea] rounded-md">
              <input type="text" placeholder="Promo code" className='flex-1 p-2 bg-transparent outline-none rounded-md' />
            <button className='border-none text-white bg-[#ff4c24] p-2 rounded-md cursor-pointer'>Apply</button>
            </div>
            <div className='flex justify-center md:hidden'>
            <button className='border-none text-white bg-[#ff4c24] rounded-lg mt-4 md:hidden w-1/2 p-2 cursor-pointer' onClick={() => navigate('/placeorder')}>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart