import React, { useContext } from 'react'
import CartNavbar from '../cartComponents/CartNavbar/CartNavbar'

import Menu from '../components/Navbar/Menu'
import ShippingPopUp from '../cartComponents/ShippingPopUp/ShippingPopUp'
import CartProductsConteiner from '../cartComponents/CartProductsConteiner/CartProductsConteiner'
import EmptyCart from '../cartComponents/EmptyCart/EmptyCart'

import { CartProducts } from '../data/CartProducts'

const CartContent = () => {

    const cartContext = useContext(CartProducts)

    return (
        <div className="cart-content">
            <Menu />
            <CartNavbar />
            {cartContext.length == 0 ? <EmptyCart /> : ''}
            {cartContext.length !== 0 ? <ShippingPopUp /> : ''}
            {cartContext.length !== 0 ? <CartProductsConteiner /> : ''}
        </div>
  )
}

export default CartContent