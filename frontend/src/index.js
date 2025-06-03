import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './style/base.css';
import './style/layout.css';
import './style/nav.css';
import './style/card.css';
import './style/dark-mode.css';
import './style/header.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
