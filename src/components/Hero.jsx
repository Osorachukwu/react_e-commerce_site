import React from 'react'
import NavProducts from './NavProducts'
import fakeStoreGif from '../assets/fake-store-gif.jpg'

function Hero() {
  return (
    <div className='hero'>
      <NavProducts />
      <div>
        <img src={fakeStoreGif} alt="" />
      </div>
        
    </div>
  )
}

export default Hero