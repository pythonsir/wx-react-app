import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import store ,{history} from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router'

import { getRouterData } from './common/router';

import 'ant-design-pro/dist/ant-design-pro.css'; 


import RenderAuthorized from 'ant-design-pro/lib/Authorized';


const Authorized = RenderAuthorized('');

const { AuthorizedRoute } = Authorized;

const routerData = getRouterData();

const UserLayout = routerData['/user'].component;



render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
      <Route 
            path="/user"
            component={UserLayout}
          />
      <AuthorizedRoute
            path="/"
            render={props => <div>....</div>}
            authority={['admin', 'user']}
            redirectPath="/user/login"
          />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)