import React from 'react'
import Img from '../assets/product_20.png';
import { Link } from 'react-router-dom';

const Template = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-6'>
      <div className="flex flex-col md:flex-row flex-wrap justify-between">
        <div className="w-full md:w-1/2 px-5 py-10 item-center">
          <h2 className='text-green-700 text-xl md:text-5xl font-serif font-900 mb-8'>Hundreds Of Ready Designs To Choose From</h2>
          <p className='text-92 md:text-xl font-serif font-700 text-green-700 mb-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus voluptate porro animi cupiditate quaerat ratione laudantium architecto accusamus maiores ipsam sit, neque est inventore id?</p>
          <Link to='/products'>
            <span className='font-semibold border-2 border-green-700 py-2 px-6 hover:bg-green-700 hover:text-white'>Shop Now</span>
          </Link>
        </div>
        <div className="w-full md:w-1/3  px-5">
          <img src={Img} alt="" className='w-[400px]' />
        </div>
      </div>
    </div>
  )
}

export default Template