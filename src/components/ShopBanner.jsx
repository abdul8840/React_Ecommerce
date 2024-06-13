import React from 'react'
import Img from '../assets/47.jpg'
import "../App.css";
import { Link } from 'react-router-dom';

const ShopBanner = () => {
  return (
    <div className='my-10'>
      <div className="back_img flex items-center justify-center text-center">
        <div className="bg-white w-[300px] sm:w-6/12 h-[300px] p-4 md:p-10">
          <h2 className='text-2xl md:text-4xl text-center font-serif text-green-700 font-800'>
            Begin Your Shop Journey Explore Our Stunning Collections
          </h2>
          <h3 className='text-xl md:text-2xl text-center mt-8 mb-8 text-green-700 font-700'>Starting from just $149.00</h3>
          <Link to='/products'>
            <span className='font-semibold border-2 border-green-700 py-2 px-6 hover:bg-green-700 hover:text-white'>Shop Now</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ShopBanner