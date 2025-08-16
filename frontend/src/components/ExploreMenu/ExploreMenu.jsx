import React from 'react'
import { menu_list } from '../../assets/assets'
import '../../index.css'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-5 mt-10'>
      <div className='explore-menu-content flex flex-col gap-5 items-center'>
        <h1 className='text-[#262626] font-bold text-3xl'>Explore the Menu</h1>
        <p className='explore-menu-text max-w-[60%] text-[#808080] text-center'>
          Discover a world of flavors with our diverse menu options.<br/>
          From local favorites to international cuisines, we have something for everyone.
        </p>
      </div>
      <div className="explore-menu-list flex justify-between items-center gap-4 text-center mx-4 my-0 overflow-scroll scrollbar-hide border-[#ff4c24] rounded-2xl border-2 md:border-none">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name? "all" : item.menu_name)} key={index} className="explore-menu-list-item p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110 ">
              <img src={item.menu_image} alt="" className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-full ${category === item.menu_name ? 'border-[4px] border-solid border-[#ff4c24] p-[2px]' : ''}`} />
              <p className='mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='mx-[10px] my-0 h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu