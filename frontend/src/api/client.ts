import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(
  (res) => res,
  async (error) => {
    return Promise.reject(error);
  },
);

export default client;
