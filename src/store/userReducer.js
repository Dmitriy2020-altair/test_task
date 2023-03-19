import { GET_USERS_PENDING, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "./types";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};
export default function userReducer(state = initialState, action) {
  console.log(state);
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
    default:
      return state;
  }
}
