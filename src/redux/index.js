import React from 'react'
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux'

import login from './login'
import global from './global'
import user from './user'
import chart from './chart'
import useradd from './useradd'

const config = {
  routerReducer,
  login,
  global,
  user,
  chart,
  useradd,


}

  



export default combineReducers(config);

