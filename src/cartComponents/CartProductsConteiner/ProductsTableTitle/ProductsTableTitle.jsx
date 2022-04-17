import './ProductsTableTitle.css'
import React from 'react'
import OrangeCheckbox from '../../../components/OrangeCheckbox/OrangeCheckbox'

const ProductsTableTitle = () => {
  return (
    <div className="products-table-title">
        <table>
            <th><OrangeCheckbox />Produtos</th>
            <th>Preço Unitário</th>
            <th>Quantidade</th>
            <th>Preço Total</th>
            <th>Ações</th>
        </table>
    </div>
  )
}

export default ProductsTableTitle