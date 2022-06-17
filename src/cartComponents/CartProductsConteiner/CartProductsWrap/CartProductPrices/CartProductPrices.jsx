import './CartProductPrices.css'
import React, { useState } from 'react'

const CartProductPrices = (props) => {

    const [offer, setOffer] = useState(props.priceOffer ? true : false)

    return (
        <div className={offer ? 'cart-product-prices offer-on' : 'cart-product-prices offer-off'}>
            {
                offer ? 
                    <>
                        <p>R${props.price}</p>
                        <p>R${props.priceOffer}</p>
                    </> :
                    <p>R${props.price}</p>
            }
        </div>
    )
}

export default CartProductPrices