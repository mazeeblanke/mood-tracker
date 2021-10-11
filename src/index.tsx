import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from 'views/Home/HomePage/HomePage';
import initStore from './store';

WebFont.load({
  custom: {
    families: ['Nunito'],
    urls: ['/app.css'],
  },
});

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
