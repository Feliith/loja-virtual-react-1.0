import React, { Component } from "react"

class Language extends Component {
    
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
            <li className='navbar-link lang'
            onMouseEnter={this.setHover}
            onMouseLeave={this.setHover}>
                <a>
                    <i className="fa-solid fa-globe"></i>
                    Português - BR
                    <i className="fa-solid fa-angle-down"></i>
                </a>
                <div className={this.state.hover ? "language-conteiner on" : "language-conteiner"}>
                    <span>Português - BR</span>
                    <span>English</span>
                </div>
            </li>
        )
    }
}

export default Language