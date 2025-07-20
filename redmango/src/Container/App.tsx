import React, { useEffect, useState } from 'react';

// Importing the Header and Footer components from the Layout directory
// This will allow us to use these components in the App component
// We can import them directly from the Layout directory
// This is a cleaner way to import components from the same directory
// We can also import them from the individual files if we want to
// For example, we can import them like this:
// import Header from '../Components/Layout/Header';
// import Footer from '../Components/Layout/Footer';

import { Header, Footer } from '../Components/Layout';
import { menuItemModel } from '../Interfaces';
import { Home, Login, MenuItemDetails, NotFound, Register, ShoppingCart } from '../Pages';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetShoppingCartQuery } from '../Apis/shoppingCartApi';
import { setShoppingCart } from '../Storage/Redux/shoppingCartSlice';

// Once the files are imported here
// These will be available accross the entire application
// Available for all the components
// Or they can be added in index.tsx too because the app.tsx is available there

function App() {

  const dispatch = useDispatch();
  const { data, isLoading } = useGetShoppingCartQuery("f62ea628-a6e4-4d61-97e5-e9748d6fa3ff");

  useEffect(() => {
    if (!isLoading) {
      console.log("Shopping Cart Data:", data.result);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  return (
    <div>
      <Header />
      {/* The Home component will be rendered here */}
      {/* This is the main content of the application */}
      {/* The Home component will be the first page that the user sees */}
      {/* We can add more pages later and use React Router to navigate between them */}
      <div className="pb-5">
        <Routes>
          // Defining the routes for the application
          // The Home component will be rendered when the user visits the root path
          // This is the main page of the application
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;