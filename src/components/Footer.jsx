import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import NavFooter from './NavFooter'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__sect1'>
        <div>
          <h1>Get it on the App stores</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
        </div>

        <div className='footer__sect1--btns'>
          <Button
          myBtnClass='footer__sect1--btn1' logo='get-it-on-google.avif'/>

          <Button
          myBtnClass='footer__sect1--btn2' logo='get-it-on-apple.png'/>
        </div>
      </div>

      <hr />

      <NavFooter />

      <div style={{
        display: 'flex', 
        justifyContent: 'center'
        }}>
        <h2>jndwjincejnxed</h2>

      </div>


    </div>
  )
}

export default Footer