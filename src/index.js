// React is a javaScript library for building user interfaces.
import React from 'react';
// The react module is an entry point to the React library, while react-dom provides access to DOM-specific methods.
import ReactDOM from 'react-dom';
// The App is the top-level of the react App right after index.js
import App from './App';
//Importing bootstrap for access to additional styling
import 'bootstrap/dist/css/bootstrap.min.css';
// ReactDOM.render takes a React component, or tree of React components and (eventually) renders them to the DOM.
// The first argument is the component we want to render (<App/>), and second is the target element to render to (#root)
ReactDOM.render(<App />, document.getElementById('root'));
