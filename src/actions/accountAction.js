import { toast } from 'react-toastify';
import axios from '../config/axiosInstance';
import axiosAdmin from '../config/adminAxiosInstance';
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
} from './types';


export const fetchAccountDetailsStart = () => ({
  type: FETCH_ACCOUNT_DETAILS_START,
});

export const fetchAccountDetailsSuccess = payload => ({
  type: FETCH_ACCOUNT_DETAILS_SUCCESS,
  payload,
});

export const fetchAccountDetailsFailure = () => ({
  type: FETCH_ACCOUNT_DETAILS_FAILURE,
});

export const fetchAccountDetails = bankaUserEmail => (dispatch) => {
  dispatch(fetchAccountDetailsStart());
  return axios()
    .get(`/users/${bankaUserEmail}/accounts`)
    .then((res) => {
      const { data } = res.data;
      const maxAcc = data.reduce((prevAccount, newAccount) => (newAccount.id > prevAccount.id ? newAccount : prevAccount), { id: 0 });
      dispatch(fetchAccountDetailsSuccess(maxAcc));
    })
    .catch((error) => {
      const { error: err } = error.response.data;
      dispatch(fetchAccountDetailsFailure());
      toast.error(err);
    });
};

export const createAccountStart = () => ({
  type: CREATE_ACCOUNT_START,
});

export const createAccountSuccess = payload => ({
  type: CREATE_ACCOUNT_SUCCESS,
  payload,
});

export const createAccountFailure = () => ({
  type: CREATE_ACCOUNT_FAILURE,
});

export const createAccount = type => (dispatch) => {
  dispatch(createAccountStart());
  return axios()
    .post('/accounts', type, {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('bankaUserToken'),
      },
    })
    .then((res) => {
      const { data } = res.data;
      const payload = {
        accountnumber: data.accountNumber,
        balance: data.openingBalance,
        status: 'Dormant',
        type: data.type,
      };
      dispatch(createAccountSuccess(payload));
      toast.success('Account created Successfully');
    })
    .catch((error) => {
      const { error: err } = error.response.data;
      dispatch(createAccountFailure());
      toast.error(err);
    });
};

export const fetchAllAccountStart = () => ({
  type: FETCH_ALL_ACCOUNTS_START,
});

export const fetchAllAccountSuccess = payload => ({
  type: FETCH_ALL_ACCOUNTS_SUCCESS,
  payload,
});

export const fetchAllAccountFailure = () => ({
  type: FETCH_ALL_ACCOUNTS_FAILURE,
});

export const fetchAllAccount = () => (dispatch) => {
  dispatch(fetchAllAccountStart());
  return axiosAdmin()
    .get('/accounts')
    .then((res) => {
      const { data } = res.data;
      dispatch(fetchAllAccountSuccess(data));
    })
    .catch((error) => {
      const { error: err } = error.response.data;
      dispatch(fetchAllAccountFailure());
      toast.error(err);
    });
};

export const fetchAllActiveAccountStart = () => ({
  type: FETCH_ALL_ACTIVE_ACCOUNTS_START,
});

export const fetchAllActiveSuccess = payload => ({
  type: FETCH_ALL_ACTIVE_ACCOUNTS_SUCCESS,
  payload,
});

export const fetchAllActiveAccountFailure = () => ({
  type: FETCH_ALL_ACTIVE_ACCOUNTS_FAILURE,
});

export const fetchAllActiveAccounts = () => (dispatch) => {
  dispatch(fetchAllActiveAccountStart());
  return axiosAdmin()
    .get('/accounts/?status=active')
    .then((res) => {
      const { data } = res.data;
      console.log(data, 'all active');
      dispatch(fetchAllActiveSuccess(data));
    })
    .catch((error) => {
      const { error: err } = error.response.data;
      dispatch(fetchAllActiveAccountFailure());
      toast.error(err);
    });
};

export const fetchAllDormantAccountStart = () => ({
  type: FETCH_ALL_DORMANT_ACCOUNTS_START,
});

export const fetchAllDormantAccountSuccess = payload => ({
  type: FETCH_ALL_DORMANT_ACCOUNTS_SUCCESS,
  payload,
});

export const fetchAllDormantAccountFailure = () => ({
  type: FETCH_ALL_DORMANT_ACCOUNTS_FAILURE,
});

export const fetchAllDormantAccount = () => (dispatch) => {
  dispatch(fetchAllDormantAccountStart());
  return axiosAdmin()
    .get('/accounts/?status=dormant')
    .then((res) => {
      const { data } = res.data;
      console.log(data, 'all dormant');
      dispatch(fetchAllDormantAccountSuccess(data));
    })
    .catch((error) => {
      const { error: err } = error.response.data;
      dispatch(fetchAllDormantAccountFailure());
      toast.error(err);
    });
};
