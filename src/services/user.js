import request from '../utils/request';

export async function _addUser(param) {


     return  request('user/add?XDEBUG_SESSION_START=19284',{
        method:'POST',
        data:param,
        headers:{
            'Authorization':"Bearer "+localStorage.getItem("access_toke")
        }
    });




}