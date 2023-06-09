import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_PENDING,
  ADD_USER_SUCCESS,
  ADD_USER_PENDING,
  ADD_USER_FAILURE,
  UPDATE_USER_PENDING,
  UPDATE_USER_FAILURE,
  UPDATE_USER
} from "./types";

const initialState = {
  users: [],
  isLoading: false,
  isDeleting: false,
  isAdding: false,
  isUpdating: false,
  error: null,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_USER_PENDING:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        isDeleting: false,
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeleting: false,
      };
    case ADD_USER_PENDING:
      return {
        ...state,
        isAdding: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload.user],
        isAdding: false,
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAdding: false,
      };
    case UPDATE_USER_PENDING:
      return {
        ...state,
        isUpdating: true,
      };
    case UPDATE_USER:
      const { id, updatedData } = action.payload;
      const updatedUsers = state.users.map((user) => user.id === id ? { ...user, ...updatedData } : user);
      return { ...state, users: updatedUsers, isUpdating: false };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUpdating: false,
      };
    default:
      return state;
  }
}
