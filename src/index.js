import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { CartProducts, products } from './data/CartProducts'

ReactDOM.render(
    <CartProducts.Provider value={products}>
      <App />
    </CartProducts.Provider>,
  document.getElementById('root')
);

