import '../cartComponents/Cart.css'
import React from 'react'

import CartContent from '../cartComponents/CartContent'

export const CartData = []

export const CartContext = React.createContext(CartData)

const Cart = () => {
  return (
    <div className='Cart'>
        <CartContext.Provider value={CartData}>
          <CartContent />
        </CartContext.Provider>
    </div>
  )
}

export default Cart