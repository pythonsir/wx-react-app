import { put,takeLatest,call,select } from 'redux-saga/effects'
import {getCurrent as gCurrent,getuserlist} from '../services/api'
import {_addUser} from '../services/user'

function* getCurrent(){

    const response = yield call(gCurrent);


    yield put({
        type: 'saveCurrentUser',
        payload: response,
      });


}

function* getUserList(){

    const response = yield call(getuserlist)
    
  
    yield put({
        type:'userList',
        payload:response.users,

    })

    yield put({
        type:'listload',
        payload:false,
    })

}
/**
 * 添加用户
 * @param {*} param0 
 */
function* addUser({payload}){

    const response = yield call(_addUser,payload);

    console.log(response)

}

function* userSaga() {

    yield takeLatest('fetchCurrent', getCurrent)

    yield takeLatest('getuserlist', getUserList)

    yield takeLatest('addUser', addUser)

   
  }

  export default userSaga;