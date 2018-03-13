
import axios from 'axios'

import request from '../utils/request';

import  '../mock/loginMock'

export async function login(param) {

   const {username,password,type} = param;


    return axios.get('/api/login').then(function(response){


        if(username === 'admin' && password === '888888'){
            
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

export async function getCurrent(param){

        return {
                    $desc: "获取当前用户接口",
                    $params: {
                      pageSize: {
                        desc: '分页',
                        exp: 2,
                      },
                    },
                    $body: {
                      name: 'Serati Ma',
                      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                      userid: '00000001',
                      notifyCount: 12,
                    },
                  }

}