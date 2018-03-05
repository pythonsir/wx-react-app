import { put,takeEvery,call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {login} from '../services/api'


 function* test({payload}){

  const response = yield call(login, payload);

  yield put({
    type:'commonlogin',
    payload:{
      response
    },
  })

  yield put(push("/home"))

}

 function* loginSaga() {

    yield takeEvery('getToken', test)

  }

  export default loginSaga;