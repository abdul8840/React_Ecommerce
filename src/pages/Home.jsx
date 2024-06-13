import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeBannerImage from '../assets/banner_mens.png'
import Featured from '../components/Featured';
import NewArrive from '../components/NewArrive';
import ShopBanner from '../components/ShopBanner';
import Offer from '../components/Offer';
import Template from '../components/Template';
import Hero from '../components/Hero';

const Home = ({products}) => {
  // const mensProduct = products.filter(products => products.categoy === 'men');
  // const womensProduct = products.filter(products => products.categoy === 'women');
  const featuredProduct = products.filter(products => products.featured).slice(0, 4)
  const newProduct = products.filter(products => products.new).slice(0, 8)
  const offerProduct = products.filter(products => products.offer).slice(0, 8)
  return (
    <>
      <Hero />
      <Featured products={featuredProduct} />
      <HomeBanner HomeBannerImage={HomeBannerImage} />
      <NewArrive products={newProduct}/>
      <ShopBanner />
      <Offer products={offerProduct}/>
      <Template />
    </>
  )
}

export default Home