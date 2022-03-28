import React from 'react'
import './ShoppingOffer.css'

import ShoppingOfferTimer from './ShoppingOfferTimer'
import ShoppingOfferProducts from './ShoppingOfferProducts'
import ShopeeMark from '../../../ShopeeMark/ShopeeMark'

const ShoppingOffer = () => {
  return (
    <div className='shopping-offer'>
        <div className="shopping-offer-head">
            <div>
                <img className='shopping-offer-img' src={require("../../../../images/shopping-offer.png")} />
                <ShoppingOfferTimer />
            </div>
            <a href="">Ver Tudo &gt;</a>
        </div>
        <div className="shopping-offer-products">
            {ShoppingOfferProducts.map((item, index) => {
                return (
                    <a key={index} href="" className="shopping-offer-product">
                        <img src={item.src} className="shopping-offer-product-img" />
                        <ShopeeMark />
                        <div className="shopping-offer-product-offer">
                            <span>{item.offer}</span>
                            <span>OFF</span>
                        </div>
                        <p className='shopping-offer-product-price'><span>R$ </span>{item.price}</p>
                        <p className='shopping-offer-product-sold'>{item.sold} VENDIDOS</p>
                    </a>
                )
            })}
        </div>
        <button className='shopping-offer-slider-btn'>
            <i className="fa-solid fa-chevron-right"></i>
        </button>
    </div>
  )
}

export default ShoppingOffer