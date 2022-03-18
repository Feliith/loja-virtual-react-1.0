import React, { Component } from "react"

class Cart extends Component {

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
                <a href="" className="cart-link">
                    <i className="fa-solid fa-cart-shopping"></i>
                </a>
                <div className={this.state.hover ? "cart-conteiner on" : "cart-conteiner"}>
                    <img src={require('../../../images/shop.png')} alt="Sacolas de Compras" />
                    <p>Não Há Produtos Ainda</p>
                </div>
            </div>
        )
    }
}

export default Cart
