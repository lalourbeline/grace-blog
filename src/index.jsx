// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'core-js/fn/object/assign';
import ReactDOM from 'react-dom';
import AppIndex from './components/AppIndex';
import NotMatch from './components/NotMatch';
import singleMusci from './components/singleMusic';

const React = require('react');
require('styles/App.scss');
// Render the main component into the dom
ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/grace-blog/" component={AppIndex} />
      <Route path="/grace-blog/singmusic" component={singleMusci} />
      <Route component={NotMatch} />
    </Switch>
  </Router>

), document.getElementById('app'));
