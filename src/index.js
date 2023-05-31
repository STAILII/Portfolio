import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.title = 'Terminal_Portfolio_Staili'; // Modification du titre de l'application

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
