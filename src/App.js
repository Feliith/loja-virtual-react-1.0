import React from 'react'

import Store from './data/Store'

import Home from './components/Home/Home'
import MiniPopUp from './components/MiniPopUp/MiniPopUp'
import Navbar from './components/Navbar/Navbar'
import PopUp from './components/PopUp/PopUp'
import Shopping from './components/Shopping/Shopping'

const App = () => {
    return (
        <div className='App'>
            <Store>
                <PopUp />
                <MiniPopUp />
                <Navbar />
                <Home />
                <Shopping />
            </Store>
        </div>
    )
}

export default App