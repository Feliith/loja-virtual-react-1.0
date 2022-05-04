import './AddCartButton.css'
import React, { useState } from 'react'

import AddCartButtonImage from '../../../../images/add-cart-btn.svg'

const AddCartButton = (props) => {

    const [popUp, setPopUp] = useState(false)

    function handleClick() {
        const hasColor = document.querySelector('.product-page-info-color-button.active')
        if (hasColor || props.noVariable == false) {
            props.whenClick(false)
            popUpFunc()
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