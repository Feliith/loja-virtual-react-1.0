import './ProductPageShare.css'
import React from 'react'

const ProductPageShare = () => {
    return (
        <div className="product-page-share">
            <p>Compartilhar:</p>
            <button>
                <img src={require('../../../images/social-medias.png')} />
            </button>
            <button>
                <img src={require('../../../images/social-medias.png')} />
            </button>
            <button>
                <img src={require('../../../images/social-medias.png')} />
            </button>
            <button>
                <img src={require('../../../images/social-medias.png')} />
            </button>
        </div>
    )
}

export default ProductPageShare