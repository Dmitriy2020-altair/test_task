import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getUsersFailure, getUsersSuccess } from '../store/actions/getUsers';
import { GET_USERS_PENDING } from '../store/types';

export function* getUsers() {
  try {
    const response = yield call(axios.get, 'https://641735c89863b4d772a560b8.mockapi.io/api/v1/users');
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure(error.message));
  }
}

export function* watchGetUsers() {
  yield takeLatest(GET_USERS_PENDING, getUsers);
}