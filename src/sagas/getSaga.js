import {GET_DATA} from '../actions/types.js'
import {takeEvery, put, call} from 'redux-saga/effects';
import { postData } from '../api/code';

export const getData = function* () {
  try {
    const data = yield call(postData);

    console.log("ss");
  }
  catch(error){
    //HANDLE ERROR HERE
    console.log('GET DATA api call failed');
  }
};

export default function* dataSaga() {
  yield takeEvery(GET_DATA, getData);
}
