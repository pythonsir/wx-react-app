'use strict';

const  initstate = {
    collapsed: false,
    notices: [],
    fetchingNotices:false,
  }

function global(state = initstate, {type,payload}){

    switch(type){
        case 'changeLayoutCollapsed':
            return {
                ...state,
                collapsed: payload,
            }
        case 'saveNotices':
          return {
              ...state,
              notices:payload
          }
        case 'fetchNotices':
          return {
            ...state,
            fetchingNotices:true
          }
        case 'nofetchNotices':
          return{
            ...state,
            fetchingNotices:false
          }
        default:
        return state
    }

}

export default global;