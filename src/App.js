import React from 'react'
import Navbar from './components/Navbar/Navbar'
import PopUp from './components/PopUp/PopUp'

const App = () => {
    return (
        <div className='App'>
            <PopUp />
            <Navbar />
        </div>
    )
}

export default App