import React from 'react'
import mirror from '../assets/search.svg'

function Searchbar() {
  return (
    <div className='search'>

        <input type="text" placeholder='Search...'/>

        <div className='search__logo'>
         <img src={mirror} alt="search-icon" />
        </div>

    </div>
  )
}

export default Searchbar