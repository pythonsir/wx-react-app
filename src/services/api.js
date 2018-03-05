
import axios from 'axios'

import  data from '../mock/loginMock'

export async function login(param) {

    console.log( param);
    
    return axios.get('/login').then(function(response){

            return response.data
    
        })
    

}