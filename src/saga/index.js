
import { put,takeEvery,fork,all } from 'redux-saga/effects'

import loginSaga from './loginSaga'
import userSaga from './userSaga'
import global from './globalSaga'

// 所有saga的入口配置文件
const config = [

    fork(loginSaga),
    fork(userSaga),
    fork(global),
  

]


export default function* rootSaga(){

    yield all(config)

};