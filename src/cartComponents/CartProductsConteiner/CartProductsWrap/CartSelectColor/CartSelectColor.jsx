import './CartSelectColor.css'
import React, { useContext, useState } from 'react'

import { CartProducts } from '../../../../data/CartProducts'

import CartSelectColorTable from './CartSelectColorTable/CartSelectColorTable'

const CartSelectColor = (props) => {

    const cartContext = useContext(CartProducts)

    const colorId = cartContext[props.id].colorId
    const colorName = cartContext[props.id].color[colorId].colorName

    const [table, setTable] = useState(false)

    function handleClick() {
        setTable(!table)
        setColorOn(cartContext[props.id].colorId)
    }

    const [colorOn, setColorOn] = useState(props.colorId)

    return (
        <div className='cart-select-color'>
            <button onClick={handleClick}>
                Variações:
                <span className={table ? 'on' : ''}>
                    <i className="fa-solid fa-caret-down"></i>
                </span>
            </button>
            <p>{colorName}</p>
            <CartSelectColorTable on={table}
            id={props.id}
            cancel={handleClick} 
            colors={props.colors}
            colorId={props.colorId}
            colorOn={colorOn}
            setColorOn={setColorOn} />
        </div>
    )
}

export default CartSelectColor