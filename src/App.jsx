import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails.jsx';
import all_product from './assets/all_product.js'
import Footer from './components/Footer.jsx';
import Cart from './pages/Cart.jsx';

const App = () => {
  return (
    <>
      
        <Header />
        <Routes>
          <Route path='/' element={<Home products={all_product} />} />
          <Route path='/products' element={<Products products={all_product} />} />
          <Route path='/products/:id' element={<ProductDetails products={all_product} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      
    </>
  )
}

export default App