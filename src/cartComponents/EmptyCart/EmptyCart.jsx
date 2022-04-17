import './EmptyCart.css'
import React from 'react'

const EmptyCart = () => {
  return (
    <div className='empty-cart'>
        <img src={require('../../images/shop.png')} />
        <p>Seu carrinho de compras está vazio</p>
        <a href='/'>Ir Às Compras Agora</a>
    </div>
  )
}

export default EmptyCart