import {
  ADD_USER_FAILURE,
  ADD_USER_PENDING,
  ADD_USER_SUCCESS,
  DELETE_USER_PENDING,
  GET_USERS_FAILURE,
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAILURE,
  UPDATE_USER_PENDING,
} from "../types";

export const getUsers = () => ({
  type: GET_USERS_PENDING,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

export const deleteUser = (id) => ({
  type: DELETE_USER_PENDING,
  payload: id,
});

export const addUserPending = (user) => ({
  type: ADD_USER_PENDING,
  payload: { user }
});

export const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: { user }
});

export const addUserFailure = (error) => ({
  type: ADD_USER_FAILURE,
  payload: { error }
});

export const updateUserPending = () => ({
  type: UPDATE_USER_PENDING,
});

export const updateUser = (id, updatedData) => ({
  type: UPDATE_USER,
  payload: { id, updatedData },
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});
