const initstate = {
    saveloading:false,
}


function useradd(state = initstate,{type,payload}){

    switch (type) {
        case 'useradd/result':
            return {
                ...state,
                saveloading:false,
                status:payload.status,
            }
        case 'startsave':
            return {
                saveloading:true,
            }
        default:
            return state;
    }


}

export default useradd;