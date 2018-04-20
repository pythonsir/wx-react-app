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

import './index.css'; 

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

const { AuthorizedRoute } = Authorized;

const routerData = getRouterData();

const BaseLayout = routerData['/'].component

const UserLayout = routerData['/user'].component;



render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <LocaleProvider locale={zh_CN}>
      <Switch>
        <Route 
              path="/user"
              component={UserLayout}
            />
        <AuthorizedRoute
              path="/"
              render={props => <BaseLayout {...props} />}
              authority={['admin', 'user']}
              redirectPath="/user/login"
            />
      </Switch>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)