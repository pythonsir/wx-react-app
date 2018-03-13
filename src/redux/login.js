'use strict';
import { setAuthority } from '../utils/authority';

const initstate={

 status:undefined,
 submitting:false,

}

function commonlogin(state,type,payload){

  setAuthority(payload.currentAuthority);
  
  return {
    ...state,
    status:payload.status,
    type:payload.type,
    submitting:payload.status == 'error'?false:true,
  }

}


function login(state = initstate, {type,payload}) {
    
    switch (type) {
      case 'commonlogin':
        return commonlogin(state,type,payload)
      case 'tologin':
        return {
          ...state,
        status:payload.status,
        type:payload.type,
        submitting:false,

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