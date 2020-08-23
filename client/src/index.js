import './assets/main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SessionContextProvider from './context/session-context';

ReactDOM.render(
  <SessionContextProvider>
  <Router>
    <App />
  </Router>
  </SessionContextProvider>,
  document.getElementById('root')
);
