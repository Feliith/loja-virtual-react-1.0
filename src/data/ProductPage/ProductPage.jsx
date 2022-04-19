import './ProductPage.css'
import React, { useState } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import ProductPageShare from './ProductPageShare/ProductPageShare'
import ProductPageLike from './ProductPageLike/ProductPageLike'
import ProductPageInfo from './ProductPageInfo/ProductPageInfo'

const ProductPage = (props) => {

    const src = props.src

    const [imgOn, setImgOn] = useState(props.banner)

    function imageHover(e) {
        const imgOn = document.querySelector('.product-page-wrap-images .active')
        if(imgOn) {
            imgOn.classList.remove('active')
        }
        e.classList.add('active')
        setImgOn(e.getAttribute('src'))
    }

    function colorImage(src) {
        setImgOn(src)
    }

    return (
        <div className={'product-page ' + props.url}>
            <Navbar />
            <div className="product-page-wrap">
                <div>
                    <div className="product-page-wrap-images">
                        <div className='product-page-wrap-active-image'>
                            <img src={imgOn} />
                        </div>
                        <div className='product-page-wrap-images-wrap'>
                            {src.map((item, index) => {
                                return (
                                    <img key={index} src={item.img}
                                    onMouseEnter={e => imageHover(e.target)} />
                                )
                            })}
                        </div>
                    </div>
                    <div className='page-wrap-images-bottom'>
                        <ProductPageShare />
                        <ProductPageLike />
                    </div>
                </div>
                <ProductPageInfo 
                    title={props.title}
                    stars={props.stars}
                    evaluation={props.evaluation}
                    sold={props.sold}
                    price={props.price}
                    priceOffer={props.priceOffer}
                    color={props.color}
                    colorImage={colorImage}
                    quant={props.quant}
                />
            </div>
        </div>
    )
}

export default ProductPage