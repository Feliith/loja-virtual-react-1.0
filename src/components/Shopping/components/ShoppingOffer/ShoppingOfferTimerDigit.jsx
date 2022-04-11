import React, { useState } from 'react'

const ShoppingOfferTimerDigit = (props) => {

    const [time, setTime] = useState(props.digitsTo.length - 1)

    function timeRoll() {
        if(time == 0) {
            setTime(props.digitsTo.length - 1)
        } else {
            setTime(time - 1)
        }
    }
    
    setTimeout(() => {    
        timeRoll()
    }, props.time)

    return (
        <div style={{marginTop: `-${parseInt(time) * 22}px`}}>
            {props.digitsTo.map((item, index) => {
                return (
                    <span key={item}>{item}</span>
                )
            })}
        </div>
  )
}

export default ShoppingOfferTimerDigit