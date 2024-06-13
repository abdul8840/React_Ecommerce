// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className='max-w-screen-xl mx-auto mt-20'>
      <h2 className="text-center font-bold text-slate-700 text-2xl">Your Cart</h2>
      <div className="flex flex-col sm:flex-row flex-wrap mt-10">
        {cart.length === 0 ? (
          <p className="text-center w-full">Your cart is empty</p>
        ) : (
          cart.map(product => (
            <div key={product.id} className="w-[300px] rounded border-2 p-4 m-2">
              <img src={product.image} alt={product.name} className='w-full' />
              <h3 className="font-semibold text-slate-500">{product.name}</h3>
              <p className='mt-3'>${product.new_price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
