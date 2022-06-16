import React from 'react'
import { ProdcutRow } from './ProdcutRow'
import '../Styles/CategoryProdcutRow.css'

function CategoryProdcutRow() {
    const title = 'Electronics'
  return (
    <div className='category-container'>
        <div className='category-title'>
            {title}
        </div>
        <div className='category-body'>
            <ProdcutRow/>
            <ProdcutRow/>
            <ProdcutRow/>
        </div>
    </div>
  )
}
export { CategoryProdcutRow }