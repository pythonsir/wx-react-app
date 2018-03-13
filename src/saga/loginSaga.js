import { put,takeEvery,call,select } from 'redux-saga/effects'
import { push,replace } from 'react-router-redux'
import {login} from '../services/api'
import { reloadAuthorized } from '../utils/Authorized';

 function* logincheck({payload}){

  const response = yield call(login, payload);

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

function* logout({payload}){

  try {
    // get location pathname
    const urlParams = new URL(window.location.href);
    const pathname = yield select(state => state.routing.location.pathname);
    // add the parameters in the url
    urlParams.searchParams.set('redirect', pathname);
    window.history.replaceState(null, 'login', urlParams.href);
  } finally {
    yield put({
      type: 'commonlogin',
      payload: {
        status: false,
        currentAuthority: 'guest',
      },
    });
    reloadAuthorized();
    yield put(push('/user/login'));
  }


}

 function* loginSaga() {

    yield takeEvery('getToken', logincheck)

  }

  export default loginSaga;