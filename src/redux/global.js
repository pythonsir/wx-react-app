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
        case 'saveClearedNotices':
          return {
            ...state,
            notices: state.notices.filter(item => item.type !== payload),
          }
        default:
        return state
    }

}

export default global;