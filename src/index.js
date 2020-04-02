import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/reset.scss';
import './index.scss';
import App from './App';
import Header from 'containers/Header';
import Left from './containers/Left';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Left />
    <Header />
    <div className="main-container-fluid">
      <p>body</p>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
