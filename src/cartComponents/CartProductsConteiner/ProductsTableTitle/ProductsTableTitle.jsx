import './ProductsTableTitle.css'
import React from 'react'
import OrangeCheckbox from '../../../components/OrangeCheckbox/OrangeCheckbox'

const ProductsTableTitle = (props) => {

  function isChecked(checkbox) {
    if (checkbox.checked) {
      props.setCheck(true)
    } else {
      props.setCheck(false)
    }
    props.setChecked()
  }

  return (
    <div className="products-table-title">
        <div>
          <div>
            <span onClick={e => isChecked(e.target)}>
              <OrangeCheckbox />
            </span>
            Produtos
          </div>
          <div>Preço Unitário</div>
          <div>Quantidade</div>
          <div>Preço Total</div>
          <div>Ações</div>
        </div>
    </div>
  )
}

export default ProductsTableTitle