import React from 'react'
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux'

import login from './login'
import global from './global'
import user from './user'


const config = {
  routerReducer,
  login,
  global,
  user,


}

  



export default combineReducers(config);

