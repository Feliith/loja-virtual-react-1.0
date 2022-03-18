import './Navbar.css'
import React from 'react'

import Menu from './Menu'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Menu />
        <Search />
    </div>
  )
}

export default Navbar