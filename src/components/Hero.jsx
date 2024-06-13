import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../assets/product_10.png';

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-lime-400">
      <div className="max-w-screen-xl mx-auto font-serif">
        <div className="h-screen flex flex-col sm:flex-row flex-wrap items-center">
          <div className="w-1/2">
            <h1 className='text-2xl md:text-5xl mb-8 font-900'>Raining Offers For Hot Summer!</h1>
            <h3 className='text-lg md:text-2xl font-900 mb-8'>25% Off On All Products</h3>
            <div className="flex gap-4">
            <Link to='/products'>
            <span className='font-semibold border-2  bg-white py-2 px-6 hover:bg-black hover:text-white text-black'>Shop Now</span>
          </Link>
            <Link to='/products'>
            <span className='font-semibold border-2 border-black text-black py-2 px-6 hover:bg-white'>About Shop</span>
          </Link>
            </div>
          </div>
          <div className="w-1/2">
            <div className="">
              <img className='w-9/12 float-right' src={HeroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero