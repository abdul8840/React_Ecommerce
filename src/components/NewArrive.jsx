import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const NewArrive = ({products}) => {
  return (
    <div className="max-w-screen-xl mx-auto mb-6">
      <h2 className="font-bold text-slate-700 text-center sm:text-left text-2xl sm:text-5xl font-serif underline mt-8 mb-8">New Arrivals</h2>
      <div className="flex flex-col sm:flex-row flex-wrap">
        
        {products.map(product => (
          <Link to={`/products/${product.id}`}>
          <div key={product.id} className="relative w-[300px] rounded border-2 p-4 m-2">
            <button className='absolute border-2 bg-green-700 shadow-md px-3 py-2 rounded text-white font-semibold'>New</button>
            <img src={product.image} alt="" className='w-full' />
            <h3 className="font-semibold text-slate-500 mb-3">{product.name}</h3>
            <StarRating count={product.star} />
            <p className='mt-3'>${product.new_price} 
            <span className='ml-5 line-through'>${product.old_price}</span> </p>
          </div>
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default NewArrive