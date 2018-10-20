
import {takeEvery, put, call} from 'redux-saga/effects';

export const getData = function* () {
  try {
    console.log('GET DATA api call failed');
  }
  catch(error){
    //HANDLE ERROR HERE
    console.log('GET DATA api call failed');
  }
};

export default function* dataSaga() {
  yield takeEvery(GET_DATA, getData);
}
