import React, { Component } from "react"

class QrCodeLink extends Component {

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
            <div className="navbar-link qr"
            onMouseEnter={this.setHover}
            onMouseLeave={this.setHover}>
                <a href="">Baixe o App</a>
                <div className={this.state.hover ? "navbar-qr-conteiner on" : "navbar-qr-conteiner"}>
                    <img src={require('../../../images/navbar-qr.png')} alt="QR Code" />
                    <div className="stores-logos">
                        <img src={require('../../../images/app-store.png')} alt="App Store" />
                        <img src={require('../../../images/google-play.png')} alt="Google Play" />
                    </div>
                </div>
            </div>
        )
    }
}

export default QrCodeLink