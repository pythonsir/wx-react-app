import { put,takeEvery,call } from 'redux-saga/effects'
import { push,replace } from 'react-router-redux'
import {login} from '../services/api'
import { reloadAuthorized } from '../utils/Authorized';

 function* logincheck({payload}){

  const response = yield call(login, payload);

  console.log(response);

  yield put({
    type:'commonlogin',
    payload:{
      ...response,
    },
  })

  if(response.status === 'ok'){

    reloadAuthorized();

    yield put(push("/"))

  }


}

 function* loginSaga() {

    yield takeEvery('getToken', logincheck)

  }

  export default loginSaga;