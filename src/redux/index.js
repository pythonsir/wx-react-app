import React from 'react'
import { combineReducers } from 'redux';
import {
  routerReducer,
} from 'react-router-redux'

import login from './login'



const config = {
  routerReducer,
  login,

}

  



export default combineReducers(config);

