import './assets/main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SessionContextProvider from './context/session-context';
import CartContextProvider from './context/cart-context';

ReactDOM.render(
  <SessionContextProvider>
    <CartContextProvider>
      <Router>
        <App />
      </Router>
    </CartContextProvider>
  </SessionContextProvider>,
  document.getElementById('root')
);
