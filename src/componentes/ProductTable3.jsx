import React from 'react'
import {CategoryProdcutRow} from './CategoryProdcutRow'
import '../Styles/ProductTable3.css'

function ProductTable3() {
  return (
    <div className='product-table'>
        <div className='product-table__header'> {/* ENCABEZAMIENTO */}
            <span>Name</span>
            <span>Price</span>
        </div>
        <div className='product-table__categories'>
            <CategoryProdcutRow/>
            <CategoryProdcutRow/>
        </div>
    </div>
  )
}

export { ProductTable3 } 