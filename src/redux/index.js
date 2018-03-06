import React from 'react'
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux'

import login from './login'
import global from './global'


const config = {
  routerReducer,
  login,
  global,

}

  



export default combineReducers(config);

