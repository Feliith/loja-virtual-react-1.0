import React, { Component } from "react"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartProducts } from "../../../data/CartProducts"

import CartButtonImg from '../../../images/cart-button.svg'
import CartButtonCard from "./CartButtonCard"

class CartButton extends Component {

    state = {hover: false}

    setHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        return (
            <div className="navbar-cart"
            onMouseEnter={this.setHover}
            onMouseLeave={this.setHover}>
                <Link to="/cart" className="cart-link">
                    <img src={CartButtonImg} />
                </Link>
                <div className={this.state.hover ? "cart-conteiner on" : "cart-conteiner"}>
                    <CartButtonCard />
                </div>
            </div>
        )
    }
}

export default CartButton
