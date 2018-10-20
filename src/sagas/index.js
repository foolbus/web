import { fork} from 'redux-saga/effects'
import getSaga from './getSaga';


export default function* rootSaga() {
  yield [
    fork(getSaga)
  ];
}
