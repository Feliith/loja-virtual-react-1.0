import './CartProductsWrap.css'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartProducts } from '../../../data/CartProducts'
import OrangeCheckbox from '../../../components/OrangeCheckbox/OrangeCheckbox'
import CartSelectColor from './CartSelectColor/CartSelectColor'
import CartProductPrices from './CartProductPrices/CartProductPrices'
import CartQuantCounter from './CartQuantCounter/CartQuantCounter'
import CartProductTotalPrice from './CartProductTotalPrice/CartProductTotalPrice'

const CartProductsWrap = () => {

    const cartContext = useContext(CartProducts)

    const [quant, setQuantUp] = useState()

    function setQuant(props) {
        cartContext[props[1]].quant = props[0]
        setQuantUp(props[0])
    }

    function deleteItem(id) {
        cartContext.splice(cartContext[id])
    }

    return (
        <div className='cart-products-wrap'>
            {cartContext.map((item, index) => {
                return (
                    <div key={index} className='cart-product'>
                        <OrangeCheckbox />
                        <Link to={'/' + item.url} className='cart-product-link'>
                            <img src={item.banner} />
                            <p>{item.title}</p>
                        </Link>
                        {item.color ? 
                        <CartSelectColor 
                        id={item.id}
                        color={item.color[item.colorId].colorName}
                        colors={item.color}
                        colorId={item.colorId} /> :
                         ''
                        }
                        <CartProductPrices price={item.price} priceOffer={item.priceOffer} />
                        <CartQuantCounter setQuant={setQuant} id={index} />
                        <CartProductTotalPrice 
                            price={item.priceOffer ? 
                                parseFloat(item.priceOffer.replace(',', '.') * quant).toFixed(2) : 
                                parseFloat(item.price.replace(',', '.') * quant).toFixed(2)} />
                        <button className='cart-product-item-remove' onClick={e => deleteItem(index)}>
                            Apagar
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default CartProductsWrap