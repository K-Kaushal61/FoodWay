import React, { useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
import MobileApp from '../../components/MobileApp/MobileApp.jsx';

// 1. Accept `menuRef` as a prop
const Home = ({ menuRef }) => {
  const [category, setCategory] = useState('all');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      {/* 2. Pass the ref to the FoodDisplay component */}
      <FoodDisplay ref={menuRef} category={category} />
      <MobileApp />
    </div>
  );
};

export default Home;