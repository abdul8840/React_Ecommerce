import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-10 bg-gray-600 text-white font-serif p-5 sm:p-10'>
      <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col sm:flex-row flex-wrap justify-between">
        <div className="">
          <h2 className='font-semibold underline text-gray-300 text-xl mb-5'>Menu</h2>
          <Link to='/'><p>Home</p></Link>
          <Link to='/products'><p>Products</p></Link>
          <Link to='/about'><p>About</p></Link>
          <Link to='/contactus'><p>Contact us</p></Link>
        </div>
        <div className="">
        <h2 className='font-semibold underline text-gray-300 text-xl mb-5'>Categories</h2>
          <Link to='#'><p>Men</p></Link>
          <Link to='#'><p>Women</p></Link>
          <Link to='#'><p>Kid</p></Link>
          <Link to='#'><p>All</p></Link>
        </div>
        <div className="">
        <h2 className='font-semibold underline text-gray-300 text-xl mb-5'>Resources</h2>
          <Link to='#'><p></p></Link>
          <Link to='#'><p>FAQ</p></Link>
          <Link to='#'><p>Return</p></Link>
          <Link to='#'><p>Live Chat</p></Link>
        </div>
        <div className="">
        <h2 className='font-semibold underline text-gray-300 text-xl mb-5'>Social Media</h2>
          <Link to='#'><p>Instagram</p></Link>
          <Link to='#'><p>Facebook</p></Link>
          <Link to='#'><p>Twitter</p></Link>
          <Link to='#'><p>Pinterest</p></Link>
        </div>
      </div>
      </div>
      <hr className='mt-6'/>
      <div className="text-center mt-3">Copyrigt &copy; 2024: All right reserve</div>
    </footer>
  )
}

export default Footer