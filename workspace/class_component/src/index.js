import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RoundButton from './App';

ReactDOM.render(
  <div>
    <RoundButton id="btn1">Button</RoundButton>
    <RoundButton id="btn2">Button</RoundButton>
    <RoundButton id="btn3">Button</RoundButton>
    <RoundButton id="btn4">Button</RoundButton>
    <RoundButton id="btn5">Button</RoundButton>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
