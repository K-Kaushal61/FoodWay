import React from 'react'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='add w-3/4 ml-[5vw] mt-12'>
      <form className='flex flex-col gap-10'>
        <div className="add-img-upload flex flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" className='w-30' />
          </label>
          <input type="file" id='image' hidden required/>
        </div>
        <div className="add-product-name flex flex-col  w-[40%] ">
          <p>Product Name</p>
          <input type="text" name='name' placeholder='Type Here' className='border p-2'/>
        </div>
        <div className="add-product-description flex flex-col w-[40%] ">
          <p>Product Description</p>
          <textarea name="description" rows="6" placeholder='Write Content Here' className='p-2 border' required></textarea>
        </div>
        <div className="add-category-price flex gap-10">
          <div className="add-category flex flex-col">
            <p>Product Category</p>
            <select name="category" className='border p-2 max-w-30' >
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
          <div className="add-price flex flex-col">
            <p>Product Price</p>
            <input type="text" name="price" inputMode="decimal"  placeholder='20' className='border p-2 max-w-30' />
          </div>
        </div>
        <button type='submit' className='add-btn max-w-30 border-0 bg-[#ff4c24] p-3 text-lg text-white font-semibold cursor-pointer'>Add</button>
      </form>
    </div>
  )
}

export default Add