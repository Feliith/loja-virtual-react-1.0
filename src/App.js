import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import PopUp from './components/PopUp/PopUp'

const App = () => {
    return (
        <div className='App'>
            <PopUp />
            <Navbar />
            <Home />
        </div>
    )
}

export default App