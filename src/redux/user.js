const initstate = {
    list: [],
    currentUser: {},
}


function user(state = initstate,{type,payload}){

    switch(type){
        case "currentUser":
            return {
                ...state
            }
        case "saveCurrentUser":
            return {
                ...state,
                currentUser:payload.$body
            }
        default:
            return state
    }



}

export default user;