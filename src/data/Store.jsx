import React, { useState } from 'react'

const initialStore = {
    products: [],
    cart: [],
}

const StoreContext = React.createContext(initialStore)

const Store = (props) => {

    const [cart, SetCart] = useState(initialStore)

    return (
        <StoreContext.Provider>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Store