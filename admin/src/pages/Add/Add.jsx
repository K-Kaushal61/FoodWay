import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = ({url}) => {

  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad", 
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]:value}) )
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)

    const response = await axios.post(`${url}/api/food/add`, formData)
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Noodles",
      })
      setImage(false)
      toast.success(response.data.message)
    } else{
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add w-3/4 ml-[5vw] mt-12'>
      <form className='flex flex-col gap-10' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex flex-col gap-2">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-30 cursor-pointer' />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required/>
        </div>
        <div className="add-product-name flex flex-col gap-2 w-[40%] ">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' className='border border-[#a9a9a9] p-2'/>
        </div>
        <div className="add-product-description flex flex-col gap-2 w-[40%] ">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write Content Here' className='p-2 border border-[#a9a9a9]' required></textarea>
        </div>
        <div className="add-category-price flex gap-10">
          <div className="add-category flex flex-col gap-2">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" className='border border-[#a9a9a9] p-2 max-w-30 ' >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex flex-col gap-2">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name="price" inputMode="decimal"  placeholder='20' className='border border-[#a9a9a9] p-2 max-w-30' />
          </div>
        </div>
        <button type='submit' className='add-btn max-w-30 border-0 bg-[#ff4c24] p-3 text-lg text-white font-semibold cursor-pointer'>Add</button>
      </form>
    </div>
  )
}

export default Add