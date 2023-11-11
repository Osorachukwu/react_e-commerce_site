import React from 'react'
import { Link } from 'react-router-dom'

function NavProducts() {
  return (
   <nav >
     <ul className='navProduct'>
        <li className='navProduct__items'>
            <Link to="electronics">Electronics</Link>
        </li>

        <li
        className='navProduct__items'>
            <Link to="jewelery">Jewelery</Link>
        </li>

        <li
        className='navProduct__items'>
            <Link to="men">Men's Clothing</Link>
        </li>

        <li
        className='navProduct__items'>
            <Link to="woman">Women's Clothing</Link>
        </li>
     </ul>
   </nav>
  )
}

export default NavProducts