const BASE_API = '/api/user';
import { request } from '@/lib/axios/config';

export const getCurrentUser = () => {
  request.get(BASE_API);
};
