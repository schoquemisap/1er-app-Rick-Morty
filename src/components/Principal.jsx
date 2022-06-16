import React from 'react'
import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'
import '../Styles/App.css';

function Principal() {
  return (
    <section className='filterable-product-table'>
        <div className='filterable-product-table__1'>
            <SearchBar/>
            <ProductTable/>
        </div>
    </section>
  )
}
export default Principal  