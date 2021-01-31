/*
 * @Author: your name
 * @Date: 2021-01-28 19:10:37
 * @LastEditTime: 2021-01-29 18:35:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /React-Design/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
