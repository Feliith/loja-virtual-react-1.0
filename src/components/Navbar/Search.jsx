import React from 'react'

import SearchBar from './NavbarComponents/SearchBar'
import SearchMenu from './NavbarComponents/SearchMenu'
import Cart from './NavbarComponents/Cart'

const Search = () => {
    return (
        <div className="navbar-search-menu">
            <div className='navbar-logo-wrap'>
                <a href="" className='navbar-logo'>
                    <img src={require('../../images/shopee-logo.png')} alt="Shopee Logo" />
                </a>
            </div>
            <div className="search-wrap">
                <SearchBar />
                <SearchMenu />
            </div>
            <Cart />
        </div>
    )
}

export default Search