import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './components/AppIndex';
import NotMatch from './components/NotMatch';

require('normalize.css/normalize.css');
require('styles/App.scss');
// Render the main component into the dom
ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={AppIndex} />
      <Route component={NotMatch} />
    </Switch>
  </Router>

), document.getElementById('app'));
