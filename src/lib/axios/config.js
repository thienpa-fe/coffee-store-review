import { REQUEST_TIMEOUT } from '@/utils/constants';
import axios from 'axios';

const BASE_API_URL = process.env.BASE_URL;

export const request = axios.create({
  baseURL: BASE_API_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});
