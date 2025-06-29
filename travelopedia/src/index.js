import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import DestinationIndex from './components/DestinationIndex';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { destinationApi } from './api/destinationApi'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={destinationApi}>
      <Header />
      <DestinationIndex />
    </ApiProvider>
  </React.StrictMode>
);