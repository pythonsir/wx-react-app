import { put,takeLatest,call,select } from 'redux-saga/effects'
import {getCurrent as gCurrent,getuserlist} from '../services/api'


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



}

function* userSaga() {

    yield takeLatest('fetchCurrent', getCurrent)

    yield takeLatest('getuserlist', getUserList)

   
  }

  export default userSaga;