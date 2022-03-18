import React, { useState } from 'react'
import { Contacts } from '../Contacts'

import QrCodeLink from './NavbarComponents/QrCodeLink'
import Notifications from './NavbarComponents/Notifications'
import Language from './NavbarComponents/Language'

const Menu = () => {
    return (
        <div className='navbar-menu'>
            <div className="navbar-links one">
                <div className="navbar-link">
                    <a href="">Central do Vendedor</a>
                </div>
                <div className="navbar-link">
                    <a href="">Venda na Shopee</a>
                </div>
                <QrCodeLink />
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
                <Notifications />
                <li className='navbar-link'>
                    <a href="">
                        <i className="fa-regular fa-circle-question"></i>
                        Ajuda
                    </a>
                </li>
                <Language />
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