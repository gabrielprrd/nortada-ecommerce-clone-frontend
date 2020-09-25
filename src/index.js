import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store/index';
import App from './App';
import Cart from './pages/Cart/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={Cart} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
