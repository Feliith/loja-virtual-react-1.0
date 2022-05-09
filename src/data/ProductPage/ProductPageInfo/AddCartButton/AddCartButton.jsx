import './AddCartButton.css'
import React, { useContext, useState } from 'react'

import Products from '../../../Products'
import { CartProducts } from '../../../CartProducts'

import AddCartButtonImage from '../../../../images/add-cart-btn.svg'

const AddCartButton = (props) => {

    const cartContext = useContext(CartProducts)

    const [popUp, setPopUp] = useState(false)

    const ProductList = Products[props.id]
    const actualProduct = {...ProductList}
    actualProduct.id = cartContext.length
    actualProduct.colorId = props.colorSelected

    function handleClick() {
        const hasColor = document.querySelector('.product-page-info-color-button.active')
        if (hasColor || props.noVariable == false) {
            props.whenClick(false)
            popUpFunc()
            cartContext.push(actualProduct)
        } else {
            props.whenClick(true)
        }
    }

    function popUpFunc() {
        setPopUp(true)
        setTimeout(() => {
            setPopUp(false)
        }, 3000)
    }

    return (
        <>
            <button className='add-cart-btn' onClick={handleClick}>
                <img src={AddCartButtonImage} />
                Adicionar Ao Carrinho
            </button>
            <div className={popUp ? "added-to-cart on" : "added-to-cart"}>
                <i className='fa-solid fa-check'></i>
                <p>O item foi adicionado ao seu carrinho de compras</p>
            </div>
        </>
    )
}

export default AddCartButton