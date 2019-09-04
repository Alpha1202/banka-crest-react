import { toast } from 'react-toastify';
import axios from '../config/axiosInstance';
import axiosAdmin from '../config/adminAxiosInstance';
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
} from './types';


export const loginClientStart = () => ({
  type: LOGIN_CLIENT_START,
});

export const loginClientSuccess = payload => ({
  type: LOGIN_CLIENT_SUCCESS,
  payload,
});

export const loginClientFailure = () => ({
  type: LOGIN_CLIENT_FAILURE,
});

export const loginClient = userData => (dispatch) => {
  dispatch(loginClientStart());
  return axios()
    .post('/auth/signin', userData)
    .then((res) => {
      const { data } = res.data;
      localStorage.setItem('bankaUserToken', `Bearer ${data.token}`);
      localStorage.setItem('bankaUserEmail', data.email);
      localStorage.setItem('bankaUserfirstName', data.firstName);
      localStorage.setItem('bankaUserlastName', data.lastName);
      dispatch(loginClientSuccess(data));
    })
    .catch((error) => {
      const { error: err } = error.response.data;
      dispatch(loginClientFailure());
      toast.error(err);
    });
};

export const loginSatffStart = () => ({
  type: LOGIN_STAFF_START,
});

export const loginStaffSuccess = payload => ({
  type: LOGIN_STAFF_SUCCESS,
  payload,
});

export const loginStaffFailure = () => ({
  type: LOGIN_STAFF_FAILURE,
});

export const loginStaff = userData => (dispatch) => {
  dispatch(loginSatffStart());
  return axiosAdmin()
    .post('/users/signin', userData)
    .then((res) => {
      const { data } = res.data;
      localStorage.setItem('bankaStaffToken', `Bearer ${data.token}`);
      localStorage.setItem('bankaStaffEmail', data.email);
      localStorage.setItem('bankaStafffirstName', data.firstName);
      localStorage.setItem('bankaStafflastName', data.lastName);
      dispatch(loginStaffSuccess(data));
    })
    .catch((error) => {
      const { error: err } = error.response.data;
      dispatch(loginStaffFailure());
      toast.error(err);
    });
};

export const signupClientStart = () => ({
  type: SIGNUP_CLIENT_START,
});

export const signupClientSuccess = payload => ({
  type: SIGNUP_CLIENT_SUCCESS,
  payload,
});

export const signupClientFailure = () => ({
  type: SIGNUP_CLIENT_FAILURE,
});

export const signupClient = userData => (dispatch) => {
  dispatch(signupClientStart());
  return axios()
    .post('/auth/signup', userData)
    .then((res) => {
      const { data } = res.data;
      localStorage.setItem('bankaUserToken', `Bearer ${data.token}`);
      localStorage.setItem('bankaUserEmail', data.email);
      localStorage.setItem('bankaUserfirstName', data.firstName);
      localStorage.setItem('bankaUserlastName', data.lastName);
      dispatch(signupClientSuccess(data));
    })
    .catch((error) => {
      const { error: err } = error.response.data;
      dispatch(signupClientFailure());
      toast.error(err);
    });
};
