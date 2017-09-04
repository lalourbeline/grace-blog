import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import AppIndex from './components/AppIndex';
import NotMatch from './components/NotMatch';
import singleMusci from './components/singleMusic';

require('normalize.css/normalize.css');
require('styles/App.scss');
// Render the main component into the dom
ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={AppIndex} />
      <Route path="/singmusic" component={singleMusci} />
      <Route component={NotMatch} />
    </Switch>
  </Router>

), document.getElementById('app'));
