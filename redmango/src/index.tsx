import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Container/App';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from 'react-router-dom';

// Provider is used to provide the Redux store to the React application
// This allows the application to access the Redux store and dispatch actions
// It is a common pattern in Redux applications to wrap the main component with Provider
// This is used to connect the React application with the Redux store
// It is used to provide the store to the React application
import { Provider } from 'react-redux';
// We don't have to add index.tsx to the store, as it is already imported in the main file
import { store } from './Storage'; // Importing the Redux store

// Importing the main App component and rendering it to the root element
// This is the entry point of the React application
// The App component is the main component that will be rendered
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // Wrapping the App component with BrowserRouter to enable routing
  // BrowserRouter is used to handle routing in a React application
  // This allows the application to use React Router for navigation
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);