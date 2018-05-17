import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './main.min.css';

import {
  LandingPage,
  Test1,
  Test2
} from './components/pages';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path='/' component={ LandingPage } />
            <Route exact path='/test-1' component={ Test1 } />
            <Route exact path='/test-2' component={ Test2 } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
