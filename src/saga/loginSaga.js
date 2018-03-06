import { put,takeEvery,call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {login} from '../services/api'


 function* logincheck({payload}){

  const response = yield call(login, payload);

  yield put({
    type:'commonlogin',
    payload:{
      ...response,
    },
  })

  if(response.status === 'ok'){

    yield put(push("/home"))

  }


}

 function* loginSaga() {

    yield takeEvery('getToken', logincheck)

  }

  export default loginSaga;