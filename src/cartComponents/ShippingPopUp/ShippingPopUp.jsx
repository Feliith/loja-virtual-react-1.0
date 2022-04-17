import './ShippingPopUp.css'
import React from 'react'

import FreeShippingImg from '../../images/free-shipping.svg'

const ShippingPopUp = () => {
  return (
    <div className='free-shipping'>
        <img src={FreeShippingImg} />
        <p>Compras com Cartão de Crédito e Cupons de Frete Grátis só no app.</p>
    </div>
  )
}

export default ShippingPopUp