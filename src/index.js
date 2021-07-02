import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// importing react router steps:
// 1. import {Browserrouter} from 'react-router-dom'
// 2. wrap app component with BrowserRouter custom tag

ReactDOM.render(
  < React.StrictMode >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
