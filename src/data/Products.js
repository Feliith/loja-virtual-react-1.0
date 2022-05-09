const Products = [
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
    },
    {
        id: 1,
        banner: require('../../src/images/Products/relogio-pulso/relogio-pulso.jpg'),
        title: 'Relógio De Pulso, Gato Luminoso',
        url: 'relogio-pulso',
        quant: 0,
        price: '39,00',
        priceOffer: '19,00',
        offerPercent: '51%',
        star: '4.8',
        evaluation: '565',
        sold: '1,1mil',
        colorId: 0,
        color: [
            {
                colorName: 'Completo',
                colorSrc: require('../../src/images/Products/relogio-pulso/relogio-pulso.jpg')
            },
            {
                colorName: 'Só Pulseira',
                colorSrc: require('../../src/images/Products/relogio-pulso/relogio-pulso-so-pulseira.jpg')
            }
        ],
        src: [
            {img: require('../../src/images/Products/relogio-pulso/relogio-pulso.jpg')},
            {img: require('../../src/images/Products/relogio-pulso/relogio-pulso-so-pulseira.jpg')}
        ]
    },
    {
        id: 2,
        banner: require('../../src/images/Products/camiseta-time/camiseta-time-pink.jpg'),
        title: 'Camisetas Femininas De Time, Sao Paulo',
        url: 'camiseta-time',
        quant: 0,
        price: '35,00',
        priceOffer: '22,05',
        offerPercent: '37%',
        star: '3.7',
        evaluation: '40',
        sold: '74',
        colorId: 0,
        color: [
            {
                colorName: 'Rosa',
                colorSrc: require('../../src/images/Products/camiseta-time/camiseta-time-pink.jpg')
            },
            {
                colorName: 'Listrada',
                colorSrc: require('../../src/images/Products/camiseta-time/camiseta-time-listrada.jpg')
            }
        ],
        src: [
            {img: require('../../src/images/Products/camiseta-time/camiseta-time-pink.jpg')},
            {img: require('../../src/images/Products/camiseta-time/camiseta-time-listrada.jpg')}
        ]
    },
    {
        id: 3,
        banner: require('../../src/images/Products/maquina-cabelo/maquina-cabelo.jpg'),
        title: 'Máquina De Cortar Cabelo Profissional',
        url: 'maquina-cabelo',
        quant: 0,
        price: '98,94',
        priceOffer: '15,99',
        offerPercent: '84%',
        star: '4.9',
        evaluation: '4,7mil',
        sold: '11,4mil',
        color: false,
        src: [
            {img: require('../../src/images/Products/maquina-cabelo/maquina-cabelo.jpg')},
            {img: require('../../src/images/Products/maquina-cabelo/maquina-cabelo-01.jpg')},
            {img: require('../../src/images/Products/maquina-cabelo/maquina-cabelo-02.jpg')},
        ]
    },
    {
        id: 4,
        banner: require('../../src/images/Products/fone-pastel/fone-pastel.jpg'),
        title: 'I12 Fone De Ouvido Sem Fio Cor Pastel',
        url: 'fone-pastel',
        quant: 0,
        price: '37,58',
        priceOffer: '21,80',
        offerPercent: '42%',
        star: '4.7',
        evaluation: '23,7mil',
        sold: '80,2mil',
        colorId: 0,
        color: [
            {
                colorName: 'Azul',
                colorSrc: require('../../src/images/Products/fone-pastel/fone-pastel-blue.jpg')
            },
            {
                colorName: 'Verde',
                colorSrc: require('../../src/images/Products/fone-pastel/fone-pastel-green.jpg')
            },
            {
                colorName: 'Amarelo',
                colorSrc: require('../../src/images/Products/fone-pastel/fone-pastel-yellow.jpg')
            }
        ],
        src: [
            {img: require('../../src/images/Products/fone-pastel/fone-pastel.jpg')},
            {img: require('../../src/images/Products/fone-pastel/fone-pastel-01.jpg')},
            {img: require('../../src/images/Products/fone-pastel/fone-pastel-blue.jpg')},
            {img: require('../../src/images/Products/fone-pastel/fone-pastel-green.jpg')},
            {img: require('../../src/images/Products/fone-pastel/fone-pastel-yellow.jpg')},
        ]
    },
    {
        id: 5,
        banner: require('../../src/images/Products/adesivo-cartao/adesivo-cartao.jpg'),
        title: 'Adesivo Para Cartão de Crédito',
        url: 'adesivo-cartao',
        quant: 0,
        price: '1,99',
        priceOffer: '1,59',
        offerPercent: '20%',
        star: '4.9',
        evaluation: '3,3mil',
        sold: '7,6mil',
        color: false,
        src: [
            {img: require('../../src/images/Products/adesivo-cartao/adesivo-cartao.jpg')},
        ]
    },
    {
        id: 6,
        banner: require('../../src/images/Products/corrente-lacoste/corrente-lacoste.jpg'),
        title: 'Corrente Cartier Dourado',
        url: 'corrente-lacoste',
        quant: 0,
        price: '7,99',
        star: '4.9',
        evaluation: '648',
        sold: '1,3mil',
        color: false,
        src: [
            {img: require('../../src/images/Products/corrente-lacoste/corrente-lacoste.jpg')},
            {img: require('../../src/images/Products/corrente-lacoste/corrente-lacoste-01.jpg')},
            {img: require('../../src/images/Products/corrente-lacoste/corrente-lacoste-02.jpg')}
        ]
    },
    {
        id: 7,
        banner: require('../../src/images/Products/perfume-scandal/perfume-scandal.jpg'),
        title: 'Perfume Scandal By Night',
        url: 'perfume-scandal',
        quant: 0,
        price: '10,00',
        star: '4.7',
        evaluation: '118',
        sold: '197',
        color: false,
        src: [
            {img: require('../../src/images/Products/perfume-scandal/perfume-scandal.jpg')},
            {img: require('../../src/images/Products/perfume-scandal/perfume-scandal-01.jpg')},
        ]
    },
    {
        id: 8,
        banner: require('../../src/images/Products/oculos-gradiente/oculos-gradiente.jpg'),
        title: 'Óculos de Sol Gradiente',
        url: 'oculos-gradiente',
        quant: 0,
        price: '42,80',
        priceOffer: '16,29',
        offerPercent: '62%',
        star: '4.8',
        evaluation: '8,3mil',
        sold: '24,2mil',
        colorId: 0,
        color: [
            {
                colorName: 'Cinza e Rosa',
                colorSrc: require('../../src/images/Products/oculos-gradiente/oculos-gradiente-cinza-rosa.jpg')
            },
            {
                colorName: 'Pó Azul',
                colorSrc: require('../../src/images/Products/oculos-gradiente/oculos-gradiente-po-azul.jpg')
            },
            {
                colorName: 'Roxo',
                colorSrc: require('../../src/images/Products/oculos-gradiente/oculos-gradiente-roxo.jpg')
            }
        ],
        src: [
            {img: require('../../src/images/Products/oculos-gradiente/oculos-gradiente.jpg')},
            {img: require('../../src/images/Products/oculos-gradiente/oculos-gradiente-cinza-rosa.jpg')},
            {img: require('../../src/images/Products/oculos-gradiente/oculos-gradiente-po-azul.jpg')},
            {img: require('../../src/images/Products/oculos-gradiente/oculos-gradiente-roxo.jpg')}
        ]
    },
    {
        id: 9,
        banner: require('../../src/images/Products/fone-intra/fone-intra-black.jpg'),
        title: 'Fone de Ouvido Intra-auricular/Sem Fio',
        url: 'fone-intra',
        quant: 0,
        price: '30,00',
        priceOffer: '9,00',
        offerPercent: '70%',
        star: '4.4',
        evaluation: '7,8mil',
        sold: '20,5mil',
        colorId: 0,
        color: [
            {
                colorName: 'Preto',
                colorSrc: require('../../src/images/Products/fone-intra/fone-intra-black.jpg')
            },
            {
                colorName: 'Branco',
                colorSrc: require('../../src/images/Products/fone-intra/fone-intra-white.jpg')
            }
        ],
        src: [
            {img: require('../../src/images/Products/fone-intra/fone-intra-black.jpg')},
            {img: require('../../src/images/Products/fone-intra/fone-intra-white.jpg')},
            {img: require('../../src/images/Products/fone-intra/fone-intra-01.jpg')},
        ]
    },
    {
        id: 10,
        banner: require('../../src/images/Products/conjunto-nike/conjunto-nike-black.jpg'),
        title: 'Conjunto Nike',
        url: 'conjunto-nike',
        quant: 0,
        price: '54,00',
        star: '4.9',
        evaluation: '302',
        sold: '700',
        colorId: 0,
        color: [
            {
                colorName: 'Preto',
                colorSrc: require('../../src/images/Products/conjunto-nike/conjunto-nike-black.jpg')
            },
            {
                colorName: 'Branco',
                colorSrc: require('../../src/images/Products/conjunto-nike/conjunto-nike-white.jpg')
            },
            {
                colorName: 'Vermelho',
                colorSrc: require('../../src/images/Products/conjunto-nike/conjunto-nike-red.jpg')
            }
        ],
        src: [
            {img: require('../../src/images/Products/conjunto-nike/conjunto-nike-black.jpg')},
            {img: require('../../src/images/Products/conjunto-nike/conjunto-nike-white.jpg')},
            {img: require('../../src/images/Products/conjunto-nike/conjunto-nike-red.jpg')},
        ]
    },
    {
        id: 11,
        banner: require('../../src/images/Products/tenis-nike/tenis-nike.jpg'),
        title: 'Tênis Nike',
        url: 'tenis-nike',
        quant: 0,
        price: '44,90',
        priceOffer: '75,00',
        offerPercent: '60%',
        star: '4.8',
        evaluation: '8,1mil',
        sold: '16mil',
        colorId: 0,
        color: [
            {
                colorName: 'Padrão',
                colorSrc: require('../../src/images/Products/tenis-nike/tenis-nike.jpg')
            },
            {
                colorName: 'Rosa',
                colorSrc: require('../../src/images/Products/tenis-nike/tenis-nike-pink.jpg')
            }
        ],
        src: [
            {img: require('../../src/images/Products/tenis-nike/tenis-nike.jpg')},
            {img: require('../../src/images/Products/tenis-nike/tenis-nike-pink.jpg')}
        ]
    }
]

export default Products