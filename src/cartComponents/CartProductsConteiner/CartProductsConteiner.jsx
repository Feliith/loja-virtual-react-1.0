import './CartProductsConteiner.css'

import ProductsTableTitle from './ProductsTableTitle/ProductsTableTitle'
import CartProductsWrap from './CartProductsWrap/CartProductsWrap'
import { useState } from 'react'

const CartProductsConteiner = () => {

    const [check, setCheck] = useState(false)

    function setChecked() {
        const allCheck = document.querySelectorAll('.orange-checkbox')
        if (!check) {
            for (let i = 0 ; i < allCheck.length ; i++) {
                allCheck[i].checked = true
            }
        } else {
            for (let i = 0 ; i < allCheck.length ; i++) {
                allCheck[i].checked = false
            }
        }
    }
    
    return (
        <div className='cart-products-conteiner'>
            <ProductsTableTitle setCheck={setCheck} setChecked={setChecked} />
            <CartProductsWrap />
        </div>
    )
}

export default CartProductsConteiner