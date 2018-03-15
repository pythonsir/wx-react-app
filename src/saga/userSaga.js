import { put,takeEvery,call,select } from 'redux-saga/effects'
import {getCurrent as gCurrent} from '../services/api'


function* getCurrent(){

    const response = yield call(gCurrent);

    console.log(response)

    yield put({
        type: 'saveCurrentUser',
        payload: response,
      });


}

function* userSaga() {

    yield takeLatest('fetchCurrent', getCurrent)
   
  }

  export default userSaga;