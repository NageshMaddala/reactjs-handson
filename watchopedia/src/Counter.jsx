/* eslint-disable no-unused-vars */
import { use, useState } from "react";
// This is a functional component
// Functional components are the building blocks of React applications
// They are JavaScript functions that return JSX
// Hook is available in React 16.8 and later
// Hooks allow you to use state and other React features without writing a class
// This is a simple counter component, it is a functional component

const Counter = () => {
  // need to import useState from React
  // this is called a React Hook

  // useState is a Hook that lets you add React state to function components
  // useState must be called in the same order in every render
  // using usestate, we can pass the default value of the state variable
  // useState returns an array with two elements:
  // 1. The current state value
  // 2. A function that updates the state value

  // Below counter is a state variable, it is initialized to 10
  // setCounter is a function that updates the counter state variable
  // setCounter is used to update the state variable
  //   const [counter, setCounter] = useState(10);
  // Below code makes sure the initial value is set to 10 only once
  // Alwaus use array function syntax to initialize state
  const [counter, setCounter] = useState(() => {
    return 10;
  });

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    // Always use the previous state value to update the state
    setCounter((prevState) => prevState - 1);
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div className="col-12 col-md-3 offset-md-4 border text-white">
      <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span>
      <button className="btn btn-success m-1" onClick={incrementCounter}>
        +1
      </button>
      <button className="btn btn-danger m-1" onClick={decrementCounter}>
        -1
      </button>
      <br />
      <span className="h4">
        Counter: &nbsp;
        <span className="text-primary">{counter}</span>
      </span>
    </div>
  );
};

export default Counter;
