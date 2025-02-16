// Entry file for the react app
// It's like a bootstrap file that loads the app
// This file is responsible for rendering the app
// and mounting it to the DOM
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// createRoot is responsible for creating a root for the app
// and mounting it to the DOM
// App is the main component of the app, the first component to be analyzed and rendered by React
// And then the children components are rendered
// Structure of components are rendered
// React combines all the components into a tree structure and renders them on the dom
// As a developer, you don't have to worry about the tree structure
// React does that for you
ReactDOM.createRoot(entryPoint).render(<App/>);