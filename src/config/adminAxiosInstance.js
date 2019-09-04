import axios from 'axios';


const axiosWithAuth = () => {
  const bankaStaffToken = localStorage.getItem('bankaStaffToken');
  return axios.create({
    baseURL: 'https://crestfinance.herokuapp.com/api/v1',
    headers: {
      'Content-Type': 'application/json',
      authorization: bankaStaffToken,
    },
  });
};

export default axiosWithAuth;
