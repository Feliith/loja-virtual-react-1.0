import './ProductPageLike.css'
import React, { useState } from 'react'

import Like from '../../../images/like.svg'

const ProductPageLike = () => {

    const [liked, setLiked] = useState(0)

    return (
        <div className='product-page-like'>
            <img src={Like} />
            <p>Favoritar ({liked})</p>
        </div>
    )
}

export default ProductPageLike