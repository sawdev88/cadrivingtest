import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './main.min.css';

import {
  LandingPage,
} from './components/pages';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path='/' component={ LandingPage } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
