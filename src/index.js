import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers,compose } from 'redux'
import { connect, Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import reducer from './redux'
import 'ant-design-pro/dist/ant-design-pro.css'; 
import App from './App'

import  rootSaga from './saga'

const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const middlewares = [ routerMiddleware(history),sagaMiddleware];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export {store};

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
      <App />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)