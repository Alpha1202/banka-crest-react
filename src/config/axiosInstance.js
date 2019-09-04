import axios from 'axios';

const axiosWithAuth = () => {
  const bankaUserToken = localStorage.getItem('bankaUserToken');
  return axios.create({
    baseURL: 'https://crestfinance.herokuapp.com/api/v1',
    headers: {
      'Content-Type': 'application/json',
      authorization: bankaUserToken,
    },
  });
};

export default axiosWithAuth;
