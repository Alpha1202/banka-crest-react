import {
  LOGIN_CLIENT_START,
  LOGIN_CLIENT_SUCCESS,
  LOGIN_CLIENT_FAILURE,
  LOGIN_STAFF_START,
  LOGIN_STAFF_SUCCESS,
  LOGIN_STAFF_FAILURE,
  SIGNUP_CLIENT_START,
  SIGNUP_CLIENT_SUCCESS,
  SIGNUP_CLIENT_FAILURE,
  LOGOUT,
} from '../actions/types';

const initialState = {
  client: {},
  staff: {},
  loading: false,
  redirect: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CLIENT_START:
      return {
        ...state,
        loading: true,
        redirect: false,
      };
    case LOGIN_CLIENT_SUCCESS:
      return {
        ...state,
        client: action.payload,
        loading: false,
        redirect: true,
      };
    case LOGIN_CLIENT_FAILURE:
      return {
        ...state,
        loading: false,
        redirect: false,
      };
    case LOGIN_STAFF_START:
      return {
        ...state,
        loading: true,
        redirect: false,
      };
    case LOGIN_STAFF_SUCCESS:
      return {
        ...state,
        staff: action.payload,
        loading: false,
        redirect: true,
      };
    case LOGIN_STAFF_FAILURE:
      return {
        ...state,
        loading: false,
        redirect: false,
      };
    case SIGNUP_CLIENT_START:
      return {
        ...state,
        loading: true,
        redirect: false,
      };
    case SIGNUP_CLIENT_SUCCESS:
      return {
        ...state,
        client: action.payload,
        loading: false,
        redirect: true,
      };
    case SIGNUP_CLIENT_FAILURE:
      return {
        ...state,
        loading: false,
        redirect: false,
      };
    case LOGOUT:
      return {
        ...initialState,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
