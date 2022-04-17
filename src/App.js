import React from 'react'

import Store from './data/Store'

import Shop from './data/Shop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './data/Cart'

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App