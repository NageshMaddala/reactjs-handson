import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Container/App';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Importing the main App component and rendering it to the root element
// This is the entry point of the React application
// The App component is the main component that will be rendered
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);