import React, { Component } from "react"

class Notifications extends Component {

    state = {
        hover: false
    }

    setHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        return (
            <li className='navbar-link'
            onMouseEnter={this.setHover}
            onMouseLeave={this.setHover}>
                <a>
                    <i className="fa-regular fa-bell"></i>
                    Notificações
                </a>
                <div className={this.state.hover ? "notifications-conteiner on" : "notifications-conteiner"}>
                    <img src={require('../../../images/cute.png')} />
                    <p>Autentique-se para ver as notificações</p>
                    <div className="notifications-buttons">
                        <button>Cadastrar</button>
                        <button>Entre</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default Notifications
