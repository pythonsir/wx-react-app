
import { put,takeEvery,fork,all } from 'redux-saga/effects'

import loginSaga from './loginSaga'


// 所有saga的入口配置文件
const config = [

    fork(loginSaga)
  

]


export default function* rootSaga(){

    yield all(config)

};