import React from 'react'
import './Shopping.css'

import ShoppingBanner from './components/ShoppingBanner/ShoppingBanner'
import ShoppingOffer from './components/ShoppingOffer/ShoppingOffer'

const Shopping = () => {
    return (
        <section className='shopping'>
            <ShoppingBanner />
            <ShoppingOffer />
        </section>
    )
}

export default Shopping