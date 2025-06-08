import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/layout/header';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Counter from './app/components/Counter';
import DestinationList from './app/components/destinationList';
import DestinationFact from './app/components/destinationFact';
import ResetApp from './app/components/ResetApp';

// Wrap complete application with the store using Provider
// Provider is a component that makes the Redux store available to any nested components that need to access the Redux store.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container text-white m-10'>
      {/* Provider is set at the global level so that all children gets it */}
      <Provider store={store}>
        <Header />
        <ResetApp />
        <Counter />
        <div className='p-4 border text-center mb-10'>
          <h4 className='text-success pb-2'>Destination List</h4>
          <p className='text-white'>List of Destinations</p>
          <DestinationList />
          <DestinationFact />
        </div>
      </Provider>
    </div >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
