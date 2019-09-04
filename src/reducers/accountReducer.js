import {
  FETCH_ACCOUNT_DETAILS_START,
  FETCH_ACCOUNT_DETAILS_SUCCESS,
  FETCH_ACCOUNT_DETAILS_FAILURE,
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  FETCH_ALL_ACCOUNTS_START,
  FETCH_ALL_ACCOUNTS_SUCCESS,
  FETCH_ALL_ACCOUNTS_FAILURE,
  FETCH_ALL_ACTIVE_ACCOUNTS_START,
  FETCH_ALL_ACTIVE_ACCOUNTS_SUCCESS,
  FETCH_ALL_ACTIVE_ACCOUNTS_FAILURE,
  FETCH_ALL_DORMANT_ACCOUNTS_START,
  FETCH_ALL_DORMANT_ACCOUNTS_SUCCESS,
  FETCH_ALL_DORMANT_ACCOUNTS_FAILURE,
} from '../actions/types';

const initialState = {
  userAccount: {},
  newAccount: {},
  allAccounts: [],
  activeAccounts: [],
  dormantAccounts: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        userAccount: action.payload,
        loading: false,
      };
    case FETCH_ACCOUNT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case CREATE_ACCOUNT_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        newAccount: action.payload,
        loading: false,
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case FETCH_ALL_ACCOUNTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_ACCOUNTS_SUCCESS:
      return {
        ...state,
        allAccounts: action.payload,
        loading: false,
      };
    case FETCH_ALL_ACCOUNTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case FETCH_ALL_ACTIVE_ACCOUNTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_ACTIVE_ACCOUNTS_SUCCESS:
      return {
        ...state,
        activeAccounts: action.payload,
        loading: false,
      };
    case FETCH_ALL_ACTIVE_ACCOUNTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case FETCH_ALL_DORMANT_ACCOUNTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_DORMANT_ACCOUNTS_SUCCESS:
      return {
        ...state,
        dormantAccounts: action.payload,
        loading: false,
      };
    case FETCH_ALL_DORMANT_ACCOUNTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
