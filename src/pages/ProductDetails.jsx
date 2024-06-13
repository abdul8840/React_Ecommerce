import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import StarRating from '../components/StarRating.jsx';
import { FaShoppingBasket, FaCheckCircle } from "react-icons/fa";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Filter related products
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0,4);

  return (
    <div className='max-w-screen-xl mx-auto font-serif'>
      <div className="flex flex-col sm:flex-row flex-wrap mt-20">
        <div className="w-full md:w-1/2 p-4">
          <img src={product.image} alt="" className='w-full md:w-10/12' />
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <h1 className="text-2xl font-bold mb-4 text-slate-500">{product.name}</h1>
          <div className="flex gap-2">
            <StarRating count={product.star} />
            <p className='text-yellow-500 text-lg sm:text-xl font-serif font-900'>{product.star}/5 Rating</p>
            <h4 className='font-serif font-900 flex gap-2'><FaShoppingBasket className='mt-1 ml-4' /> 
            {product.stock} Items<span className='text-green-700'> In Stock </span></h4>
          </div>
          <p className='mt-3 mb-8 text-xl font-serif font-800'>
            ${product.new_price}
            <span className='ml-5 line-through text-green-700'>${product.old_price}</span>
          </p>
          <p className='mb-8'>{product.desc}</p>
          <div className="mb-8">
            <p className='flex gap-8'><b>Brand : </b><span>{product.brand}</span> </p>
            <p className='flex gap-8'><b>Material : </b><span>{product.material}</span> </p>
            <p className='flex gap-8'><b>Category : </b><span>{product.category}</span> </p>
          </div>
          <button onClick={handleAddToCart} className='font-semibold border-2 border-green-700 py-2 px-6 hover:bg-green-700 hover:text-white'>
            Add To Cart
          </button>
          <Link to='/products'>
            <button className='ml-4 font-semibold border-2 border-blue-700 py-2 px-6 hover:bg-blue-700 hover:text-white'>
              Shop More!
            </button>
          </Link>
          <div className="mt-4">
            <h3 className='text-lg font-900 text-slate-700'>Free shipping on orders over $50!</h3>
            <p className='flex gap-2 mt-3'><FaCheckCircle className='mt-1'/> No-Risk Money Back Guarantee!</p>
            <p className='flex gap-2 mt-1'><FaCheckCircle className='mt-1'/> No Hassle Refunds</p>
            <p className='flex gap-2 mt-1'><FaCheckCircle className='mt-1'/> Secure Payments</p>
          </div>
        </div>
      </div>
      
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold mb-4 text-slate-700 underline">Related Products</h2>
          <div className="flex flex-wrap">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <Link to={`/products/${relatedProduct.id}`}>
                  <div className="border rounded p-4 hover:shadow-lg">
                  <img src={relatedProduct.image} alt="" className='w-full' />
            <h3 className="font-semibold text-slate-500 mb-3">{relatedProduct.name}</h3>
            <StarRating count={relatedProduct.star} />
            <p className='mt-3'>${relatedProduct.new_price} 
              <span className='ml-5 line-through'>${relatedProduct.old_price}</span> 
            </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
