import axios from 'axios';

const bankaUserToken = localStorage.getItem('bankaUserToken');;

const instance = axios.create({
  baseURL: 'https://crestfinance.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    bankaUserToken,
  },
});

export default instance;
