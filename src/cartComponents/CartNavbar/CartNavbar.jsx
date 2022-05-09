import './CartNavbar.css'
import React from 'react'
import SearchBar from '../../components/Navbar/NavbarComponents/SearchBar'

import ShopeeLogoOrange from '../../images/shopee-logo-orange.svg'
import { Link } from 'react-router-dom'

const CartNavbar = () => {
  return (
    <div className='cart-navbar'>
        <div className='cart-navbar-logo-wrap'>
            <Link to="/" className='cart-navbar-logo'>
                <img src={ShopeeLogoOrange} alt="Shopee Logo" />
                <span></span>
                <h3>Carrinho De Compras</h3>
            </Link>
        </div>
        <SearchBar />
    </div>
  )
}

export default CartNavbar