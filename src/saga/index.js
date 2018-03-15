
import { put,takeEvery,fork,all } from 'redux-saga/effects'

import loginSaga from './loginSaga'
import userSaga from './userSaga'
import global from './globalSaga'
import chartSaga from './chartSaga'

// 所有saga的入口配置文件
const config = [

    fork(loginSaga),
    fork(userSaga),
    fork(global),
    fork(chartSaga),
  

]


export default function* rootSaga(){

    yield all(config)

};