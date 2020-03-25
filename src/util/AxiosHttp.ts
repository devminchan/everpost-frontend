import axios from 'axios';
import { getAuthToken } from './AuthManager';

export default axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    Authorization: `Bearer ${getAuthToken()}`,
  },
});
