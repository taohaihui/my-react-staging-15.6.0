/**
 * Created by thh on 2018/2/27.
 */
import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import {isArray} from '../utils/util.js';

import Frame from '../layout/frame/Frame';
import Login from '../view/login/Login';
import Index from '../view/index/Index';

let routerData = [
  {
    type: 'Route',
    path: '/',
    component: Frame,
    children: [
      {
        type: 'IndexRedirect',
        path: 'login'
      },
      {
        type: 'Route',
        path: 'login',
        title: '登录',
        component: Login
      },
      {
        type: 'Route',
        path: 'index',
        title: '首页',
        component: Index
      }
    ]
  }
];

function createRouter(routeArr) {
  if (!isArray(routeArr)) {
    return;
  }

  let routeJSX = routeArr.map(function (item, index) {
    if (item.type === 'Route') {
      return (
        <Route
          key={index}
          path={item.path}
          component={item.component}
          onEnter={(nextState, replaceState)=> {handleEnter(nextState, replaceState, item);}}
          onLeave={(prevState)=> {handleLeave(prevState, item);}}>
          {
            isArray(item.children)
              ? createRouter(item.children)
              : null
          }
        </Route>
      );
    }

    if (item.type === 'IndexRedirect') {
      return (
        <IndexRedirect key={index} to={item.path}/>
      );
    }
  });
  return routeJSX;
}

function handleEnter(nextState, replaceState, item) {
  console.log('enter route: ' + nextState.location.pathname);
}

function handleLeave(prevState, item) {
  console.log('leave route' + prevState.location.pathname);
}

export default createRouter(routerData);