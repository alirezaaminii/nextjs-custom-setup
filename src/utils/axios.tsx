import axios from 'axios';

const axiosInstance = axios.create();

export const setToken = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Token ${token}`;
  }
};

export const clearToken = () => {
  axiosInstance.defaults.headers.common.Authorization = '';
};

export default axiosInstance;
