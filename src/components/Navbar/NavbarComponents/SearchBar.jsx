import React, { Component } from "react"

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <input type="text" name="search" placeholder="Pesquise por produtos, marcas e lojas" className="search-input" />
                <button className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        )
    }
}

export default SearchBar
