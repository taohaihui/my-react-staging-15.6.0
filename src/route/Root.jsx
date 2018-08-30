/**
 * Created by thh on 2018/1/23.
 */
import React, { Component } from 'react';
import {Router, hashHistory} from 'react-router';
import routerArr from './createRouter.js';

export default class Root extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        {routerArr}
      </Router>
    );
  }
}