import '../cartComponents/Cart.css'
import React, { useState } from 'react'
import CartNavbar from '../cartComponents/CartNavbar/CartNavbar'

import Menu from '../components/Navbar/Menu'
import ShippingPopUp from '../cartComponents/ShippingPopUp/ShippingPopUp'
import CartProductsConteiner from '../cartComponents/CartProductsConteiner/CartProductsConteiner'
import EmptyCart from '../cartComponents/EmptyCart/EmptyCart'

const Cart = () => {

  const [empty, setEmpty] = useState(true)

  return (
    <div className='Cart'>
        <Menu />
        <CartNavbar />
        {empty ? <EmptyCart /> : ''}
        {!empty ? <ShippingPopUp /> : ''}
        {!empty ? <CartProductsConteiner /> : ''}
    </div>
  )
}

export default Cart