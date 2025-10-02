// FoodDisplay.jsx

// 1. Import 'forwardRef' from React
import React, { useContext, forwardRef } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem.jsx';

// 2. Wrap your component definition with forwardRef
const FoodDisplay = forwardRef(({ category }, ref) => {
  const { food_list } = useContext(StoreContext);

  return (
    // 3. Attach the received ref to the main div element
    <div ref={ref} className='food-display mt-[30px]' id='food-display'>
      <h2 className='text-[max(2vw,24px)] font-[600] text-center'>Top dishes near you</h2>
      <div className="food-display-list md:grid md:grid-cols-4 mt-[30px] gap-[30px] animate-fadeIn flex flex-col">
        {food_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} category={item.category} className="food-item animate-fadeIn" />;
          }
          return null; // It's good practice to return null if the condition isn't met
        })}
      </div>
    </div>
  );
});

export default FoodDisplay;