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
import { Home } from '../Pages';


// Once the files are imported here
// These will be available accross the entire application
// Available for all the components
// Or they can be added in index.tsx too because the app.tsx is available there

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;