import { request } from '@/lib/axios/config';

const BASE_API = '/api/users';

export const getCurrentUser = () => {
  request.get(BASE_API);
};
