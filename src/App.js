import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './main.min.css';

import {
  LandingPage,
  Test1
} from './components/pages';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path='/' component={ LandingPage } />
            <Route exact path='/test-1' component={ Test1 } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
