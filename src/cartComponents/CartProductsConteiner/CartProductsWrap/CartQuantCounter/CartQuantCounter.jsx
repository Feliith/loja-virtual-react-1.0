import './CartQuantCounter.css'
import React, { useState, useEffect } from 'react'

const CartQuantCounter = (props) => {

    const [number, setNumber] = useState(1)

    function add() {
        setNumber(number + 1)
    }

    function less() {
        if (number !== 1) {
            setNumber(number - 1)
        }
    }

    useEffect(function() {
        props.setQuant([number, props.id])
    }, [number])

    return (
        <div className='cart-quant-counter'>
            <button onClick={less}>-</button>
            <input type="number" 
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={add}>+</button>
        </div>
    )
}

export default CartQuantCounter