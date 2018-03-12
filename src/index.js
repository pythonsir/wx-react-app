import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import store ,{history} from './store'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'

import { getRouterData } from './common/router';

import Authorized from './utils/Authorized';

import 'ant-design-pro/dist/ant-design-pro.css'; 


const { AuthorizedRoute } = Authorized;

const routerData = getRouterData();

const BaseLayout = routerData['/'].component

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
              render={props => <BaseLayout />}
              authority={['admin', 'user']}
              redirectPath="/user/login"
            />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)