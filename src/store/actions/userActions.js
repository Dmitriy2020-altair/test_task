import { DELETE_USER_PENDING, GET_USERS_FAILURE, GET_USERS_PENDING, GET_USERS_SUCCESS } from "../types";

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
