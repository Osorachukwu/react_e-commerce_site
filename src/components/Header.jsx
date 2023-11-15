import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import Cartusersign from './Cartusersign'
import Nav from './Nav'

function Header() {
  return (
    <div className='header'>

      <div className='header__sect1'>
        <Logo />
        <Searchbar />
        <Cartusersign />
      </div>
      <hr />

      <div>
        <Nav mainNavClass='mainNav'/>
      </div>
      
      
    </div>
  )
}

export default Header