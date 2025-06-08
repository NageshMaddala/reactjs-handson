import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slice/counterSlice";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinationSlice";

// Multiple stores can be created but it is not recommended
// as it can lead to complex state management issues.
// Just one store is typically sufficient for most applications.

// Reducer is something that takes the current state and an action, and returns a new state.
// A store can have Multiple slices, each with its own reducer.
// A slice is a part of the state that is managed by a reducer.
// The store is the single source of truth for the application state.
// Slice is a way to organize the state and the reducer in a single file.
// Slice is responsible for a specific part of the state.

export const store = configureStore({
    reducer: {
        counterStore: counterReducer, // The key is the name of the slice, and the value is the reducer for that slice
        destinationStore: destinationReducer
    }
});

console.log(store);
console.log(store.getState());
store.dispatch({ type: "counter/increment" }); // Dispatching an action to the store
console.log(store.getState()); // Getting the current state of the store after dispatching the action
store.dispatch({ type: "counter/increment" }); // Dispatching an action to the store
store.dispatch({ type: "counter/increment" }); // Dispatching an action to the store
store.dispatch({ type: "counter/increment" }); // Dispatching an action to the store
console.log(store.getState()); // Getting the current state of the store after dispatching the action