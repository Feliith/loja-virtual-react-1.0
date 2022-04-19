import React from 'react'

import Shop from './data/Shop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './data/Cart'

import Products from './data/Products'
import ProductPage from './data/ProductPage/ProductPage'

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    {Products.map((item, index) => {
                        return (
                            <Route key={index} path={'/' + item.url} 
                            element={<ProductPage 
                                title={item.title}
                                url={item.url}
                                banner={item.banner}
                                src={item.src}
                                stars={item.star}
                                evaluation={item.evaluation}
                                sold={item.sold}
                                price={item.price}
                                priceOffer={item.priceOffer}
                                color={item.color}
                                quant={item.quant}
                                />}/>
                        )
                    })}
                </Routes>
            </Router>
        </div>
    )
}

export default App