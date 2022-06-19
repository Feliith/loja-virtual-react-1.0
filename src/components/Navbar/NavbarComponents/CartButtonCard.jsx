import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartProducts } from '../../../data/CartProducts'

const CartButtonCard = () => {
    
    const cartContext = useContext(CartProducts)

    return (
        <>
            {
                !cartContext[0] ?
                    <>
                        <img src={require('../../../images/shop.png')} alt="Sacolas de Compras" />
                        <p>Não Há Produtos Ainda</p> 
                    </> :
                    <>
                        {
                            <div className='cart-button-card-product-wrap'>
                                <p>Produtos Adicionados Recentemente</p>
                                <img src={cartContext[0].banner} />
                                <p>{cartContext[0].title}</p>
                                <>
                                    {
                                        cartContext[0].priceOffer ?
                                            <p>
                                                R${cartContext[0].priceOffer}
                                            </p> :
                                            <p>
                                                R${cartContext[0].price}
                                            </p>
                                    }
                                </>
                                <Link to="/cart" className='button'>Ver Meu Carrinho De Compras</Link>
                            </div>
                        }
                    </>
            }
        </>
    )
}

export default CartButtonCard