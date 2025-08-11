import React, {useState} from 'react'
import Header from '../../components/Header/Header.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'

const Home = () => {

  const [category, setCategory] = useState('all');

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home