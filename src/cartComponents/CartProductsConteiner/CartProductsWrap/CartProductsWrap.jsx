import './CartProductsWrap.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartProducts } from '../../../data/CartProducts'
import OrangeCheckbox from '../../../components/OrangeCheckbox/OrangeCheckbox'
import CartSelectColor from './CartSelectColor/CartSelectColor'

const CartProductsWrap = () => {

    const cartContext = useContext(CartProducts)

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
                    </div>
                )
            })}
        </div>
    )
}

export default CartProductsWrap