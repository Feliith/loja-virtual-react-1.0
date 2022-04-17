import './CartProductsConteiner.css'

import ProductsTableTitle from './ProductsTableTitle/ProductsTableTitle'
import CartProductsWrap from './CartProductsWrap/CartProductsWrap'

const CartProductsConteiner = () => {
    return (
        <div className='cart-products-conteiner'>
            <ProductsTableTitle />
            <CartProductsWrap />
        </div>
    )
}

export default CartProductsConteiner