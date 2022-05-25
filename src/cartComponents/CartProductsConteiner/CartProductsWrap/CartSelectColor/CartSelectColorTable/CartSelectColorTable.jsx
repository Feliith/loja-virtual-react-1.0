import './CartSelectColorTable.css'
import React, {useContext} from 'react'
import { CartProducts } from '../../../../../data/CartProducts'

const CartSelectColorTable = (props) => {

    const cartContext = useContext(CartProducts)

    function colorClick(index) {
        props.setColorOn(index)
    }

    function colorSelect() {
        cartContext[props.id].colorId = props.colorOn
        props.cancel()
    }

    return (
        <div className={props.on ? 'cart-select-color-table on' : 'cart-select-color-table'}>
            <div className='table-arrow'></div>
            <div className='select-color-wrap'>
                <div className='select-color-btns'>
                    <p>Cores:</p>
                    {props.colors.map((item, index) => {
                        return (
                            <button key={index}
                            className={index == props.colorOn ? 'active' : ''}
                            onClick={e => colorClick(index)}>
                                {item.colorName}
                                <span><i className="fa-solid fa-check"></i></span>
                            </button>
                        )
                    })}
                </div>
                <div className="select-color-confirm">
                    <button onClick={props.cancel}>CANCELAR</button>
                    <button onClick={colorSelect}>CONFIRMAR</button>
                </div>
            </div>
        </div>
    )
}

export default CartSelectColorTable