import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import Routes from './routes.js';
import $ from 'jquery';
window.$ = $;

const App = () => {
  return (
      <Routes />
  );
};

export default App;
