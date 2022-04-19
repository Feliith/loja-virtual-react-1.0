import React from 'react'
import './ShoppingProducts.css'

import { Link } from 'react-router-dom'

import ShopeeMark from '../../../ShopeeMark/ShopeeMark'
import Products from '../../../../data/Products'

const ShoppingProducts = () => {
    return (
        <div className='shopping-products'>
            <div className="shopping-products-theme">
                <ul>
                    <li>DESCOBERTAS DO DIA</li>
                </ul>
            </div>
            <div className="shopping-products-wrap">
                {Products.map((item, index) => {
                    return (
                        <Link to={'/' + item.url} className='product-wrap'>
                            <img src={item.banner} />
                            <ShopeeMark />
                            <div>
                                <h2>{item.title}</h2>
                                <div>
                                    <h3><span>R$</span>
                                        {item.priceOffer ? item.priceOffer : item.price}
                                    </h3>
                                    <h3>{item.sold} vendidos</h3>
                                </div>
                            </div>
                            <span>Encontrar itens similares</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ShoppingProducts