import React, {useContext} from 'react'
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display mt-[30px]' id='food-display'>
        <h2 className='text-[max(2vw,24px)] font-[600]'>Top dishes near you</h2>
        <div className="food-display-list grid grid-cols-4 mt-[30px] gap-[30px] animate-fadeIn ">
            {food_list.map((item, index) => {
              {console.log(category, item.category);}
              if(category==="all" || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} category={item.category} className="food-item animate-fadeIn"/>
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay