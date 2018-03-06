'use strict';
import { combineReducers } from 'redux';


const initstate={

 status:undefined,
 submitting:false,

}


function login(state = initstate, {type,payload}) {
    
    switch (type) {
      case 'commonlogin':
        return {
          ...state,
          status:payload.status,
          type:payload.type,
          submitting:payload.status == 'error'?false:true,
        }
      case 'mobilelogin':

        return state
      case 'loading':
      return {
        ...initstate,
        submitting:true
      }
      default:
        return state
    }
  }

export default login;