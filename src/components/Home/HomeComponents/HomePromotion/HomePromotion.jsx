import React from 'react'
import './HomePromotion.css'

const HomePromotion = (props) => {

    const src = require('../../../../images/' + props.src + '.jpg')

    return (
        <div className='home-promotion'>
            <img src={src} />
        </div>
    )
}

export default HomePromotion