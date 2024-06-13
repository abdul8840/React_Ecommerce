// src/components/Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
// import all_product from '../assets/all_product';

const Products = ({ products }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-center font-bold text-slate-700 text-2xl underline mt-4 mb-6">All Products</h2>
      <div className="flex flex-col sm:flex-row flex-wrap">
        
        {products.map((product) => (
          <Link to={`/products/${product.id}`}>
          <div key={product.id} className="w-[300px] rounded border-2 p-4 m-2">
            <img src={product.image} alt="" className='w-full' />
            <h3 className="font-semibold text-slate-500 mb-3">{product.name}</h3>
            <StarRating count={product.star} />
            <p className='mt-3'>${product.new_price} 
              <span className='ml-5 line-through'>${product.old_price}</span> 
            </p>
          </div>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Products;
