import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to='/'>
    <div className='logo'>
      {/* Refine the svg logos you have using remove bg */}
 
        {/* <img className='logo__image' src="Osora. (2).svg" alt="" /> */}
        <h1 style={{
          fontWeight: 'bolder',
          fontSize: 'x-large',
          fontStyle: 'italic',
        }}>Osora</h1>
        <p style={{fontSize: 'x-small'}}>..powered by fake-store API</p>

       
    </div>
    </Link>
  )
}

export default Logo

