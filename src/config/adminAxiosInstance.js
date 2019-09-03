import axios from 'axios';

const bankaStaffToken = localStorage.getItem('bankaStaffToken');

const instance = axios.create({
  baseURL: 'https://crestfinance.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    bankaStaffToken,
  },
});

export default instance;
