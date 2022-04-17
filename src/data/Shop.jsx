import React from 'react'

import Home from '../components/Home/Home'
import MiniPopUp from '../components/MiniPopUp/MiniPopUp'
import Navbar from '../components/Navbar/Navbar'
import PopUp from '../components/PopUp/PopUp'
import Shopping from '../components/Shopping/Shopping'

const Shop = () => {
  return (
    <>
        <PopUp />
        <MiniPopUp />
        <Navbar />
        <Home />
        <Shopping />
    </>
  )
}

export default Shop