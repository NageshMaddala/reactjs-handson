import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/layout/header';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Counter from './app/components/Counter';

// Wrap complete application with the store using Provider
// Provider is a component that makes the Redux store available to any nested components that need to access the Redux store.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='text-white'>
      {/* Provider is set at the global level so that all children gets it */}
      <Provider store={store}>
        <Header />
        <Counter />
      </Provider>
    </div >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
