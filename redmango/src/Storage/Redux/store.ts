import { configureStore } from "@reduxjs/toolkit";
import { menuItemReducer } from "./menuItemSlice";

// Importing rtk query API slice
import { authApi, menuItemApi } from "../../Apis"; // Importing the menuItemApi for API calls
import { shoppingCartApi } from "../../Apis"; // Importing the shoppingCartApi for shopping cart management
import { shoppingCartReducer } from "./shoppingCartSlice";
import { userAuthReducer } from "./userAuthSlice";

const store = configureStore({
    reducer: {
        shoppingCartStore: shoppingCartReducer, // Registering the shopping cart reducer
        menuItemStore: menuItemReducer,
        // after registering the reducer, we can use the state in our components
        // This is used to manage the state of menu items in the application
        // We also need to add middleware for the rtk query API slice
        // This is used to manage the state of menu items in the application
        userAuthStore: userAuthReducer,

        [menuItemApi.reducerPath]: menuItemApi.reducer, // Adding the rtk query API slice to the store
        [shoppingCartApi.reducerPath]: shoppingCartApi.reducer, // Adding the shopping cart API slice to the store
        [authApi.reducerPath]: authApi.reducer
    },
    // Adding the rtk query API middleware to the store
    // This is used to manage the state of menu items in the application
    // The middleware is responsible for handling the API calls and caching the results
    // It is used to manage the state of menu items in the application
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(menuItemApi.middleware) // Adding the rtk query API middleware to the store
            .concat(authApi.middleware)
            .concat(shoppingCartApi.middleware) // Adding the shopping cart API middleware to the store
});

// RootState type for use in selectors
// This is required to get the correct type for the state in selectors
// It is derived from the store's state
// This allows us to use the RootState type in our components and selectors
// It ensures that the state shape is consistent with the reducers we have defined
// It is useful for TypeScript to infer the types of the state in our components
// and selectors
// It helps to catch errors at compile time rather than runtime
// It is a best practice to define the RootState type in Redux applications
// It is used to ensure type safety in our Redux application
// It is a common pattern in Redux applications to define the RootState type
// It is used to ensure that the state shape is consistent with the reducers we have defined
// This is used for typescrip purpose
export type RootState = ReturnType<typeof store.getState>;

// Export the store to be used in the application
// This allows us to use the store in our components and selectors
// It is a common pattern in Redux applications to export the store
// It is used to provide access to the store in our components and selectors
export default store;