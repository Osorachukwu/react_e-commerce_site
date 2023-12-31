import React from 'react'
import Cart from './pages/Cart'
import User from './User'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Button from './Button'
import { Link } from 'react-router-dom'
import Hambourger from './Hambourger'
import cartIcon from '../assets/cart.svg'
import userIcon from '../assets/user.svg'



function Cartusersign() {
  return (
    <div className=''>
        <Hambourger />
        
      <div className='cartusersign'>
        
       <div className='cartusersign__sect1'>
         <Link to='cart'>
            <Button 
              myBtnClass='cart-btn'
              logo={cartIcon}
              />
         </Link>

         <Link to='user'>
            <Button 
              myBtnClass='user-btn'
              logo={userIcon}
            />
         </Link>

         
       </div>


       <div className='cartusersign__sect2'>
          <p>Welcome</p>

          <div className='sign'>
              <Link to='signin'>Sign In</Link>
              |
              <Link to='signup'>Sign Up</Link>
            </div>
       </div>

      </div>

    </div>
  )
}

export default Cartusersign