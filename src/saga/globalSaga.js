import { put,takeLatest,call,select } from 'redux-saga/effects'
import { queryNotices,getservercsrf } from '../services/api';


function* getcsrf(){

  const csrf = yield call(getservercsrf);

  localStorage.setItem('apicsrf',csrf.apicsrf);

}


function* fetchNotices(){

  const data = yield call(queryNotices);

  yield put({
    type: 'saveNotices',
    payload: data,
  });

  yield put({
    type: 'changeNotifyCount',
    payload: data.length,
  });

  yield put({
    type:'nofetchNotices'
  })


}

function* clearNotices({payload}){

  yield put({
    type: 'saveClearedNotices',
    payload,
  });


}

function* global() {

    yield takeLatest('getcsrf', getcsrf)

    yield takeLatest('fetchNotices', fetchNotices)

    yield takeLatest('clearNotices', clearNotices)
   
  }

  export default global;