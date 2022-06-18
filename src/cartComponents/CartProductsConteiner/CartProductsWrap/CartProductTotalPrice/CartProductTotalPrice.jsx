import './CartProductTotalPrice.css'
import React, { useContext } from 'react'

import { CartProducts } from '../../../../data/CartProducts'
import { useState } from 'react'
import { useEffect } from 'react'

const CartProductTotalPrice = (props) => {
    return (
        <div className='cart-product-total-price'>
            <p>
                R${props.price}
            </p>
        </div>
    )
}

export default CartProductTotalPrice