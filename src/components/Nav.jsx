import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <ul className='mainNav'>
          <li> <Link to="/">Home</Link> </li>

          <li> <Link to="products">Products</Link> </li>

          <li> <Link to="cart">Cart</Link> </li>

          <li> <Link to="signin">Sign In</Link> </li>

          <li> <Link to="signup">Sign Up</Link> </li>

          {/* ⚠ how to do it with normal html
          <a href="/prodcts"> Prodcts</a> 
          */}
        </ul>
    </nav>
  )
}

export default Nav