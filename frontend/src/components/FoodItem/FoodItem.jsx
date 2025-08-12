import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";
import { food_list } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {

  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  return (
    <div className="food-item w-full m-auto rounded-md shadow-[#ff4c24] shadow-md hover:shadow-xl transition duration-300 ease-in-out">
      <div className="food-item-img-container">
        <img
          className="food-item-image w-full rounded-t-md"
          src={image}
          alt=""
        />
      </div>
      <div className="food-item-info p-[20px]">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px] ">
          <p className="font-[600] text-sm truncate">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px]" />
          {!cartItems[id] ? (
            <div
              className="flex justify-center items-center p-2 bg-[#ff4c24] rounded-md text-white ml-2 cursor-pointer"
              onClick={() => {
                addToCart(id);
              }}
            >
              <p>Add</p>
              <img src={assets.shopping_cart} alt="" className="w-5 h-6" />
            </div>
          ) : (
            <div className="food-item-counter bottom-[15px] right-[15px] flex items-center justify-between gap-[5px] bg-[#ff4c24] rounded-2xl text-white pr-[2%] ml-2" >
              {" "}
              <img
                className="cursor-pointer h-6 w-6"
                onClick={() => removeFromCart(id)}
                src={assets.remove}
                alt=""
              />{" "}
              <p>{cartItems[id]}</p>{" "}
              <img
                className="cursor-pointer h-6 w-6"
                onClick={() => addToCart(id)}
                src={assets.add_icon}
                alt=""
              />
            </div>
          )}
        </div>
        <p className="food-item-desc text-[#676767] text-sm">{description}</p>
        <p className="food-item-price text-[#ff4c24] font-[600] text-lg">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
