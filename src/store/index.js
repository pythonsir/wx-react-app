import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createHashHistory'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import reducer from '../redux/index'
import  rootSaga from '../saga/index'

const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const middlewares = [ routerMiddleware(history),sagaMiddleware];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export {history}

export default store;