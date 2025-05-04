import axios from 'axios';

const API_URL = import.meta.env.VITE_RICK_AND_MORTY_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
