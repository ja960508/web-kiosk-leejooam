import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000/api',
});

client.interceptors.response.use(
  (res) => res,
  async (error) => {
    return Promise.reject(error);
  },
);

export default client;
