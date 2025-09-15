import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { IndianRupee } from 'lucide-react';

const List = ({url}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    
    try {
      const response = await axios.get(`${url}/api/food/list`)
      setList(response.data.data)
    } catch (error) {
      toast.error("Items not found")
    }
  }

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {id:foodId})
      await fetchList();
      toast.success(response.data.message)
    } catch (error) {
      toast.error("Item not deleted.")
    }
  }
 
  useEffect( () => {
    fetchList();
  },[])

  return (
    <div className='list add flex flex-col p-10 gap-2 w-full'>
      <p className='font-medium text-2xl text-[#ff4c24]'>Food Items</p>
      <div className="list-table">
        <div className="list-table-format title grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] gap-5 py-2 px-5 border border-[#cacaca] place-items-center">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((item, index) => {
            return(
              <div key={index} className='list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] gap-5 py-2 px-5 border border-[#cacaca] place-items-center '>
                <img src={`${url}/images/`+ item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p className='flex items-center'><IndianRupee className='h-5' /> {item.price}</p>
                <p onClick={()=> removeFood(item._id)} className='cursor-pointer '>X</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List