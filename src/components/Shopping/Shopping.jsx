import React from 'react'
import './Shopping.css'

import ShoppingBanner from './components/ShoppingBanner/ShoppingBanner'
import ShoppingOffer from './components/ShoppingOffer/ShoppingOffer'
import ShoppingProducts from './components/ShoppingProducts/ShoppingProducts'

const Shopping = () => {
    return (
        <section className='shopping'>
            <ShoppingBanner />
            <ShoppingOffer />
            <ShoppingProducts />
        </section>
    )
}

export default Shopping