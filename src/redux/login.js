'use strict';
import { combineReducers } from 'redux';


const initstate={

  notice: '',
  type: 'tab1',
  autoLogin: true,
  submitting:false

}


function login(state = initstate, {type,payload}) {
    
    switch (type) {
      case 'commonlogin':
      console.log(payload)
        return {
          ...state,
          ...payload
        }
      case 'mobilelogin':

        return state
      default:
        return state
    }
  }

export default login;