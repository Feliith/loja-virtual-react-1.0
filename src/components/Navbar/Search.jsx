import React from 'react'

import SearchBar from './NavbarComponents/SearchBar'
import SearchMenu from './NavbarComponents/SearchMenu'
import CartButton from './NavbarComponents/CartButton'

import ShopeeLogo from '../../images/shopee-logo.svg'

const Search = () => {
    return (
        <div className="navbar-search-menu">
            <div className='navbar-logo-wrap'>
                <a href="/" className='navbar-logo'>
                    <img src={ShopeeLogo} alt="Shopee Logo" />
                </a>
            </div>
            <div className="search-wrap">
                <SearchBar />
                <SearchMenu />
            </div>
            <CartButton />
        </div>
    )
}

export default Search