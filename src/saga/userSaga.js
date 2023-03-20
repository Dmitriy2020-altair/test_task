import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getUsersFailure, getUsersSuccess, addUserSuccess, addUserFailure } from '../store/actions/userActions';
import {
  DELETE_USER_FAILURE,
  DELETE_USER_PENDING,
  DELETE_USER_SUCCESS,
  GET_USERS_PENDING,
  ADD_USER_PENDING,
} from '../store/types';
import { mockApi } from '../config'

export function* getUsers() {
  try {
    const response = yield call(axios.get, `${mockApi}`);
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure(error.message));
  }
}

export function* watchGetUsers() {
  yield takeLatest(GET_USERS_PENDING, getUsers);
}

function* deleteUser(action) {
  try {
    yield call(axios.delete, `${mockApi}/${action.payload}`);
    yield put({ type: DELETE_USER_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_USER_FAILURE, payload: error });
  }
}

export function* watchDeleteUser() {
  yield takeLatest(DELETE_USER_PENDING, deleteUser);
}

function* addUser(action) {
  try {
    const response = yield axios.post(`${mockApi}`, action.payload);
    yield put(addUserSuccess(response.data));
  } catch (error) {
    yield put(addUserFailure(error.message));
  }
}

export function* watchAddUser() {
  yield takeLatest(ADD_USER_PENDING, addUser);
}