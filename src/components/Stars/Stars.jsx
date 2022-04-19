import './Stars.css'
import React from 'react'

const Stars = (props) => {
    return (
        <div className='stars'>
            <div className="stars-bg" 
            style={{width: `${80 / 5 * props.value}px`}}></div>
            <img src={require('../../images/star.png')} />
            <img src={require('../../images/star.png')} />
            <img src={require('../../images/star.png')} />
            <img src={require('../../images/star.png')} />
            <img src={require('../../images/star.png')} />
        </div>
    )
}

export default Stars