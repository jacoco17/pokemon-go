import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://niffled.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
