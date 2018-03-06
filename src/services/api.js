
import axios from 'axios'

import  data from '../mock/loginMock'

export async function login(param) {

   const {username,password,type} = param;
   
    
    return axios.get('/login').then(function(response){

                    if(username === 'admin' && password === '123456'){
                        return {
                            status:'ok',
                            type:type,
                        }
                    }else{
                        return {
                            status:'error',
                            type:type,
                        }
                    }
            
    
        })
    

}