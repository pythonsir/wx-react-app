import { put,takeEvery,call,select } from 'redux-saga/effects'
import { queryNotices } from '../services/api';

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

    yield takeEvery('fetchNotices', fetchNotices)

    yield takeEvery('clearNotices', clearNotices)
   
  }

  export default global;