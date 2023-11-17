import React from 'react'
import { useState } from 'react';
import Nav from './Nav';
import menuIcon from '../assets/menu.svg'
// import { Link } from 'react-router-dom';

function Hambourger() {
    const [isOpen, setIsOpen] =useState(false);
    function toggle() {
        setIsOpen(!isOpen)
    }

  return (
    <div className='hambourger'>
        <div className='hambourger__btns' onClick={toggle}>
          { !isOpen && 
           <div><img src={menuIcon} alt="" /> </div> 
          }
         
          { isOpen && <div>❌</div> }
        </div>

        {/*Icons are replacable using these👇 box-icons!!!
        <i className='bx bx-menu'></i>
        <i class='bx bx-x'></i> 
        */}

        {isOpen && 
        <div className='md:block hidden'>
            <Nav mainNavClass='hambourger__nav' mainNavLi='hambourger__li'/>
        </div>
        }
    </div>
  )
}

export default Hambourger