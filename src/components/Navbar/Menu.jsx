import React, { useState } from 'react'
import { Contacts } from '../Contacts'

const Menu = () => {
    const [qrHover, setQrHover] = useState(false)

    const qrCodeHover = () => {
        setQrHover(!qrHover)
    }

    return (
        <div className='navbar-menu'>
            <div className="navbar-links one">
                <div className="navbar-link">
                    <a href="">Central do Vendedor</a>
                </div>
                <div className="navbar-link">
                    <a href="">Venda na Shopee</a>
                </div>
                <div className="navbar-link qr" 
                    onMouseEnter={qrCodeHover}
                    onMouseLeave={qrCodeHover}
                >
                    <a href="">Baixe o App</a>
                    <div className={qrHover ? "navbar-qr-conteiner on" : "navbar-qr-conteiner"}>
                        <img src={require('../../images/navbar-qr.png')} alt="QR Code" />
                        <div className="stores-logos">
                            <img src={require('../../images/app-store.png')} alt="App Store" />
                            <img src={require('../../images/google-play.png')} alt="Google Play" />
                        </div>
                    </div>
                </div>
                <div className="navbar-link">
                    <a>Siga-nos no</a>
                    <ul className='navbar-contacts'>
                        {Contacts.map((item, index) => {
                            return (
                                <li key={index} className='navbar-contact'>
                                    <a href="">
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <ul className="navbar-links two">
                <li className='navbar-link'>
                    <a href="">
                        <i className="fa-regular fa-bell"></i>
                        Notificações
                    </a>
                </li>
                <li className='navbar-link'>
                    <a href="">
                        <i className="fa-regular fa-circle-question"></i>
                        Ajuda
                    </a>
                </li>
                <li className='navbar-link lang'>
                    <a href="">
                        <i className="fa-solid fa-globe"></i>
                        Português - BR
                        <i className="fa-solid fa-angle-down"></i>
                    </a>
                </li>
                <li className='navbar-link login'>
                    <a href="">Cadastrar</a>
                </li>
                <li className='navbar-link register'>
                    <a href="">Entre</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu