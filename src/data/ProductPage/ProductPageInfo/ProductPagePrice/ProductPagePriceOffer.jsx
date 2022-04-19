import React from 'react'

const ProductPagePriceOffer = (props) => {
    return (
        <div className='product-page-price-offer'>
            <p>R${props.price}</p>
            <p>R${props.priceOffer}</p>
        </div>
    )
}

export default ProductPagePriceOffer