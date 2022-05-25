import React from 'react'

export const products = [
    // Encaixar produtos adicionados ao carrinho.
    {
        id: 0,
        banner: require('../../src/images/Products/smartwatch/smartwatch-pink.jpg'),
        title: 'Smartwatch Y68/D20',
        url: 'smartwatch',
        quant: 0,
        price: '98,78',
        priceOffer: '20,88',
        offerPercent: '79%',
        star: '4.7',
        evaluation: '49,1mil',
        sold: '12mil',
        colorId: 0,
        color: [
            {
                colorName: 'Rosa',
                colorSrc: require('../../src/images/Products/smartwatch/smartwatch-pink.jpg')
            },
            {
                colorName: 'Preto',
                colorSrc: require('../../src/images/Products/smartwatch/smartwatch-black.jpg')
            },
            {
                colorName: 'Branco',
                colorSrc: require('../../src/images/Products/smartwatch/smartwatch-white.jpg')
            },
            {
                colorName: 'Azul',
                colorSrc: require('../../src/images/Products/smartwatch/smartwatch-blue.jpg')
            }
        ],
        src: [
            {img: require('../../src/images/Products/smartwatch/smartwatch-pink.jpg')},
            {img: require('../../src/images/Products/smartwatch/smartwatch-black.jpg')},
            {img: require('../../src/images/Products/smartwatch/smartwatch-white.jpg')},
            {img: require('../../src/images/Products/smartwatch/smartwatch-blue.jpg')},
        ]
    }
]

export const CartProducts = React.createContext(products)
