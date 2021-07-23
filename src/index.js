import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
// import 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';
import './assets/css/jquery.mCustomScrollbar.min.css';
import './assets/css/owl.carousel.css';
import './assets/css/jquery.emojipicker.css';
import './assets/css/jquery.emojipicker.tw.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/custom.css';
// import './assets/js/jquery.min.js';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
// import './assets/js/jquery.mousewheel.min.js';
// import './assets/js/jquery.mCustomScrollbar.js';
// import 'assets/js/script.js';
// import 'assets/js/jquery.emojipicker.js';
// import 'assets/js/jquery.emojis.js';
import $ from 'jquery';
window.$ = $;


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
