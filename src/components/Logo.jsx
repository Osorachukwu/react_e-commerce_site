import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to='/'>
    <div className='logo'>
      {/* Refine the svg logos you have using remove bg */}
 
        {/* <img className='logo__image' src="Osora. (2).svg" alt="" /> */}
        <h1 className='logo__h1'>Osora</h1>

        <p className='logo__p'>
          ..powered by fake-store API
        </p>
       
    </div>
    </Link>
  )
}

export default Logo