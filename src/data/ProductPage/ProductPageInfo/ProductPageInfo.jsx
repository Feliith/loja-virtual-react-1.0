import './ProductPageInfo.css'
import React from 'react'

import Stars from '../../../components/Stars/Stars'
import ProductPagePrice from './ProductPagePrice/ProductPagePrice'
import ProductPagePriceOffer from './ProductPagePrice/ProductPagePriceOffer'
import Counter from '../../../components/Counter/Counter'

const ProductPageInfo = (props) => {

    function handleClick(obj) {
        const colorOn = document.querySelector('.product-page-info-color-button.active')
        if (colorOn) {
            colorOn.classList.remove('active')
        }
        if (colorOn == obj) {
            colorOn.classList.remove('active')
        } else {
            obj.classList.add('active')
        }
    }

    function handleHover(src) {
        props.colorImage(src)
    }

    return (
        <div className='product-page-info'>
            <h2>{props.title}</h2>
            <div className="product-page-info-evaluation">
                <div className='product-page-info-evaluation-stars'>
                    <p>{props.stars}</p>
                    <Stars value={props.stars} />
                </div>
                <div className="product-page-info-evaluation-quant">
                    <p>{props.evaluation}</p>
                    <p>Avaliações</p>
                </div>
                <div className="product-page-info-evaluation-sold">
                    <p>{props.sold}</p>
                    <p>Vendido</p>
                </div>
            </div>
            
            <div className="product-page-info-price">
                {
                    props.priceOffer == undefined
                    ? <ProductPagePrice price={props.price} /> 
                    : <ProductPagePriceOffer price={props.price} priceOffer={props.priceOffer}/>
                }
            </div>

            <div className="product-page-info-coins">
                <p className="product-page-info-p">Moedas</p>
                <p><img src={require('../../../images/coin.png')} />Compre e ganhe <span>{parseInt(props.priceOffer)}</span> moedas Shopee</p>
            </div>

            {props.color ? <div className="product-page-info-color">
                <p className='product-page-info-p'>Cor</p>
                {props.color.map((item, index) => {
                    return (
                        <button key={index} className='product-page-info-color-button'
                            onClick={e => handleClick(e.target)}
                            onMouseEnter={e => handleHover(item.colorSrc)}
                        >
                            {item.colorName}
                            <i className="fa-solid fa-check"></i>
                        </button>
                    )
                })}
            </div> : ''}

            <div className='product-page-info-quant'>
                <p className='product-page-info-p'>Quantidade</p>
                <Counter quant={props.quant}/>
            </div>
        </div>
    )
}

export default ProductPageInfo