import React from 'react'

function Searchbar() {
  return (
    <div className='search'>

        <input type="text" placeholder='Search...'/>

        <div className='search__logo'>
         <img src="search.svg" alt="search-icon" />
        </div>

    </div>
  )
}

export default Searchbar