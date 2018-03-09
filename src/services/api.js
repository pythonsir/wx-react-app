
import axios from 'axios'

import request from '../utils/request';

import  '../mock/loginMock'

export async function login(param) {

   const {username,password,type} = param;


    return axios.get('/login').then(function(response){


        if(username === 'admin' && password === '123456'){
            
            return {
                status:'ok',
                type:type,
                currentAuthority:'admin'
            };
           
          }else if(password === '123456' && username === 'user'){

            return {
                status: 'ok',
                type,
                currentAuthority: 'user'
            }
         
          }else{

            return {
                status:'error',
                type:type,
            }
            
          }

                   
            
    
        })
    

}