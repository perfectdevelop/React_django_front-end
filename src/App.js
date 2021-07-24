import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import { ToastContainer } from "react-toastify";
import Routes from './routes.js';
import $ from 'jquery';
window.$ = $;


// below <Root> add
<ToastContainer hideProgressBar={true} newestOnTop={true} />

const App = () => {
  return (
      <Routes />
  );
};

export default App;
