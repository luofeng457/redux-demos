import { put, takeEvery } from 'redux-saga/effects';
import { GET_MY_LIST, getListAction } from '../actions';
import axios from 'axios';

function *fetchList() {
  const res = yield axios.get('http://mock-api.com/rg1WrEKY.mock/list');
  yield put(getListAction(res));
}

function *mySaga() {
  yield takeEvery(GET_MY_LIST, fetchList);
}

export default mySaga;