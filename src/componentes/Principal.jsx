import React from 'react'
import { SearchBar4 } from './SearchBar4'
import { ProductTable3 } from './ProductTable3'
import '../Styles/App.css';

function Principal() {
  return (
    <section className='filterable-product-table'>
        <div className='filterable-product-table__1'>
            <SearchBar4/>
            <ProductTable3/>
        </div>
    </section>
  )
}
export default Principal  