import React, { Component } from "react"
import { Link } from 'react-router-dom'

import CartButtonImg from '../../../images/cart-button.svg'

class CartButton extends Component {

    state = {hover: false}

    setHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        return (
            <Link to="cart" className="navbar-cart"
            onMouseEnter={this.setHover}
            onMouseLeave={this.setHover}>
                <a href="" className="cart-link">
                    <img src={CartButtonImg} />
                </a>
                <div className={this.state.hover ? "cart-conteiner on" : "cart-conteiner"}>
                    <img src={require('../../../images/shop.png')} alt="Sacolas de Compras" />
                    <p>Não Há Produtos Ainda</p>
                </div>
            </Link>
        )
    }
}

export default CartButton
