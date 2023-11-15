import React from 'react'
import { Link } from 'react-router-dom'

function Nav({ mainNavClass, mainNavLi}) {
  return (
    <nav>
        <ul className={mainNavClass}>
          <li className={mainNavLi}> <Link to="/">Home</Link> </li>

          <li className={mainNavLi}> <Link to="products">Products</Link> </li>

          <li className={mainNavLi}> <Link to="cart">Cart</Link> </li>

          <li className={mainNavLi}> <Link to="signin">Sign In</Link> </li>

          <li className={mainNavLi}> <Link to="signup">Sign Up</Link> </li>

          {/* ⚠ how to do it with normal html
          <a href="/prodcts"> Prodcts</a> 
          */}
        </ul>
    </nav>
  )
}

export default Nav