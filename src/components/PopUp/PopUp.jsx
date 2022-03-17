import './PopUp.css'
import React from 'react'

import popUpImage from '../../images/pop-up.png'

const PopUp = () => {

    const handleClick = (el) => {
        el.currentTarget.remove()
    }

    return (
        <div className='pop-up' onClick={handleClick}>
            <button className='pop-up-close'>
                <i className='fa-solid fa-xmark'></i>
            </button>
            <img src={popUpImage} alt="Promoção Frete Grátis!" className="pop-up-img" />
        </div>
    )
}

export default PopUp