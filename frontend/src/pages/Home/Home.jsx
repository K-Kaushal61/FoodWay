import React, {useState} from 'react'
import Header from '../../components/Header/Header.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
import MobileApp from '../../components/MobileApp/MobileApp.jsx';

const Home = () => {

  const [category, setCategory] = useState('all');

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <MobileApp /> 
    </div>
  )
}

export default Home