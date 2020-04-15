import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "redux/reducers";
import './index.scss';
import App from './App';
import Header from 'common/Header';
import Left from 'common/Left';
import { UploadFiles } from 'containers/UploadFiles';
import { Deploy } from "containers/Deploy";
import * as serviceWorker from './serviceWorker';

// const store = createStore(
//   rootReducers,
//   compose(applyMiddleware(thunk))
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Left />
        <Header />
        <div className="main-container-fluid">
          <Switch>
            <Route exact path="/">
              <p>body</p>
            </Route>
            <Route path="/app" component={App} />
            <Route path="/deploy" component={Deploy} />
            <Route path="/upload" component={UploadFiles} />
            <Route render={() => { return <h1>404</h1> }} />
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
