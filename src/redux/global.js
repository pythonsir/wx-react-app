'use strict';

const  initstate = {
    collapsed: false,
  }

function global(state = initstate, {type,payload}){

    switch(type){
        case 'changeLayoutCollapsed':
        return {
            ...state,
            collapsed: payload,
        }
        default:
        return state
    }

}

export default global;