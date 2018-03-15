import { put,takeLatest,call,select } from 'redux-saga/effects'
import { fakeChartData } from '../services/api';


function* fetchChart(){

  const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: response,
      });


}


function* fetchSalesData(){

  const response = yield call(fakeChartData);

  yield put({
    type: 'save',
    payload: {
      salesData: response.salesData,
    },
  });


}



function* chart() {

    yield takeLatest('fetchSalesData', fetchSalesData)

    yield takeLatest('fetchChart', fetchChart)
   
   
  }

  export default chart;