import React from 'react'
import '../Styles/ProdcutRow.css'

function ProdcutRow() {
    const producto='Nexus7'
    const precio = '199.99'
    return (
    <div className='product-row'>
        <span>{producto}</span> <span>{`$${precio}`}</span>
    </div>
  )
}

export { ProdcutRow } 