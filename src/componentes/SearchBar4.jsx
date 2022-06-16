import React from 'react'
import '../Styles/SearchBar4.css'
function SearchBar4() {
  return (
    <div className='search-bar__container'>
      <div className='search-bar__container__1'>
        {/* 1ra parte de Search... */}
          <input type="text" value='Search...'/>

        {/* 2da parte de Only show products  */}
          <input id="show-products"  type="checkbox" />
          <label htmlFor="show-products">Only show products in stock</label>
      </div>
    </div>
  )
}

export { SearchBar4 } 