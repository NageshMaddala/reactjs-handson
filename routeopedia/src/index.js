/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CryptoDetails from './CryptoDetails';
import NotFound from './NotFound';
import CreateProduct from './Pages/CreateProduct';
import ProductList from './Pages//ProductList';
import ProductDetails from './Pages//ProductDetails';
import Product from './Pages/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* <Route path="/product" element={<Product />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/product/details" element={<ProductList />} />
        <Route path="/product/list" element={<ProductDetails />} /> */}

        {/* // We also create nested routes for the product pages */}

        <Route path="product">
          {/* for empty path we can say index */}
          {/* <Route index element={<Product />} /> */}
          <Route path="" element={<Product />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="list" element={<ProductList />} />
          <Route path="details/:productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* Nested routes for crypto details */}
        <Route path="/cryptoDetail" element={<CryptoDetails />}>
          <Route path=":cryptoSymbol" element={<CryptoDetails />} />
          <Route path=":cryptoSymbol/:id" element={<CryptoDetails />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);