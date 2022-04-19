import React, { useState } from 'react'
import CartNavbar from '../cartComponents/CartNavbar/CartNavbar'

import Menu from '../components/Navbar/Menu'
import ShippingPopUp from '../cartComponents/ShippingPopUp/ShippingPopUp'
import CartProductsConteiner from '../cartComponents/CartProductsConteiner/CartProductsConteiner'
import EmptyCart from '../cartComponents/EmptyCart/EmptyCart'

const CartContent = () => {

    const [empty, setEmpty] = useState(true)

    return (
        <div className="cart-content">
            <Menu />
            <CartNavbar />
            {empty ? <EmptyCart /> : ''}
            {!empty ? <ShippingPopUp /> : ''}
            {!empty ? <CartProductsConteiner /> : ''}
        </div>
  )
}

export default CartContent