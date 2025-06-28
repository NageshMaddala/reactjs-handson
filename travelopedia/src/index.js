import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import DestinationIndex from './components/DestinationIndex';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { destinationAPI } from './api/destinationAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={destinationAPI}>
      <Header />
      <DestinationIndex />
    </ApiProvider>
  </React.StrictMode>
);