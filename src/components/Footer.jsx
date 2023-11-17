import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import NavFooter from './NavFooter'
import googleBtn from '../assets/google-btn.avif'
import appleBtn from '../assets/apple-btn.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__sect1'>
        <div>
          <h1>Get it on the App stores</h1>

          <p>
           Lorem ipsum, dolor sit amet consectetur   adipisicing elit..
          </p>
        </div>

        <div className='footer__sect1--btns'>
          <Button
          myBtnClass='footer__sect1--btn1' logo={googleBtn}/>

          <Button
          myBtnClass='footer__sect1--btn2' logo={appleBtn}/>
        </div>
      </div>

      <hr />

      <NavFooter />

      <div style={{
        display: 'flex', 
        justifyContent: 'center'
        }}>

        <h2> &copy;
          <span>Fake-store </span> 
          All rights reserved 2023
        </h2>

      </div>


    </div>
  )
}

export default Footer