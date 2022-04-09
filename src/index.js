import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * redudx code
 */
import { createStore, } from "redux";
import { Provider } from 'react-redux';
import rootReducer from './services/reducer/rootReducer';


const store = createStore(rootReducer);
console.warn("store Data are :", store);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
