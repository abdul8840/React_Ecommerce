import React from 'react'

const HomeBanner = ({HomeBannerImage}) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div><img src={HomeBannerImage} className='w-full my-10' alt="" /></div>
    </div>
    
  )
}

export default HomeBanner