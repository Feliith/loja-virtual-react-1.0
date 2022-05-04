import './Counter.css'
import React, { useState } from 'react'

const Counter = (props) => {

    const [number, setNumber] = useState(1)

    function add() {
        setNumber(number + 1)
    }

    function less() {
        if (number !== 1) {
            setNumber(number - 1)
        }
    }

    return (
        <div className='counter'>
            <button onClick={less}>-</button>
            <input type="number" 
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={add}>+</button>
        </div>
    )
}

export default Counter