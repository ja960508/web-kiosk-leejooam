import axios from 'axios';
import { API_BASE_URL } from '../constants/request';

const client = axios.create({
  baseURL: API_BASE_URL,
});

client.interceptors.response.use(
  (res) => res,
  async (error) => {
    return Promise.reject(error);
  },
);

export default client;
